import { useEffect, useState } from "react"
import axios from 'axios';

const imageUrl = "https://image.tmdb.org/t/p/original"

export default function MoviePage() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://localhost:5000/movies');
                setMovies(response.data);

            } catch (error) {
                console.error(error);
            }
        };

        fetchMovies();
    }, [])
    return (
        <section className="flex flex-col mt-2 justify-center">
            <div className="text-white text-center">
                <p>Search Movie</p>
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-5 gap-y-14 mt-4" >
                {movies.map((movie) => {
                    return <div key={movie._id} className="w-32 h-44 flex flex-col border-2 border-white"><img className="w-full h-full" src={`${imageUrl}/${movie.posterPath}`} />
                        <p className="text-white text-xs text-center font-rubik mt-2">{movie.name}</p>
                    </div>
                })}
            </div>
        </section>
    )
}