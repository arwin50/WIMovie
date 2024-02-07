import { useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

const imageUrl = "https://image.tmdb.org/t/p/original"

export default function Carousel({ slides, autoSlide = false, autoSlideInterval = 3000, currIndex, prevSlide, nextSlide }) {

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(nextSlide, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])
    return (
        <div className="min-w-screen max-w-full lg:max-w-3xl flex overflow-x-hidden relative lg:ml-14 flex-shrink-0 z-0 ">
            {slides.map((slide, index) => {
                return <><div key={index} className="flex-shrink-0 w-full h-full transition-transform ease-out duration-500"
                    style={{ transform: `translateX(-${currIndex * 100}%)` }}>
                    <img src={`${imageUrl}/${slide.backdrop_path}`} className="w-full h-full object-cover" /></div>
                    {currIndex === index &&
                        <div className="flex flex-row absolute bottom-0 left-0 right-0 p-4 text-white text-xl font-bold bg-black bg-opacity-50 transition-opacity"><p className="tracking-wider">{slide.name}</p>
                            <p className="ml-auto font-semibold text-lg tracking-wide">Rated: {Math.floor(slide.vote_average)}/10</p>
                        </div>}

                </>
            })}

            < div className="absolute inset-0 flex items-center justify-between p-2" >
                <button onClick={prevSlide} className="p-1 rounded shadow bg-white/70 text-grey-800 hover:bg-white ">
                    <ChevronLeft size={35} />
                </button>
                <button onClick={nextSlide} className="p-1 rounded shadow bg-white/70 text-grey-800 hover:bg-white ">
                    <ChevronRight size={35} />
                </button>
            </div >

        </div >
    )
}