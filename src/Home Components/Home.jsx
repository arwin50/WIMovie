import Carousel from './Carousel'
import DetailedMovieSection from './DetailedMovieSection'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ShuffleButton from './ShuffleButton'



export default function Home() {
    const [slides, setSlides] = useState([])
    const [currIndex, setCurrIndex] = useState(0)
    const [isShuffled, setIsShuffled] = useState(false)

    const getRandNum = () => {
        return Math.floor(Math.random() * 20) + 1;
    }

    const getRecommendedMovies = async () => {

        let rand1 = getRandNum();
        while (rand1 < 3) {
            rand1 = getRandNum();
        }
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=1`
            );

            const recommendations = response.data.results.slice(rand1 - 3, rand1);
            setSlides(recommendations)

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getRecommendedMovies();
    }
        , [isShuffled]);

    const prevSlide = () =>
        setCurrIndex((currIndex) => currIndex === 0 ? 3 - 1 : currIndex - 1)

    const nextSlide = () =>
        setCurrIndex((currIndex) => currIndex === 2 ? 0 : currIndex + 1)

    const toggleShuffle = () => {
        console.log(isShuffled)
        setIsShuffled(!isShuffled)

    }

    return (
        <main className="flex flex-col ">
            <section className='flex flex-col lg:flex-row  justify-center items-center columns-2 lg:space-x-8 lg:mt-2 w-full'>
                <Carousel slides={slides} autoSlide={true} currIndex={currIndex} prevSlide={prevSlide} nextSlide={nextSlide} />
                <DetailedMovieSection slides={slides} />
            </section>
            <section className="place-self-center mb-2">
                <ShuffleButton toggleShuffle={toggleShuffle} />
            </section>
        </main>

    )
}