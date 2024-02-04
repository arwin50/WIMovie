import { useState } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

export default function Carousel({ slides }) {
    const [currIndex, setCurrIndex] = useState(0)
    const prevSlide = () =>
        setCurrIndex((currIndex) => currIndex === 0 ? slides.length - 1 : currIndex - 1)

    const nextSlide = () =>
        setCurrIndex((currIndex) => currIndex === slides.length - 1 ? 0 : currIndex + 1)

    return (
        <div className="max-w-full md:max-w-2xl flex overflow-hidden relative md:ml-14">
            {slides.map((slide, index) => {
                return <div key={index} className="flex-shrink-0 w-full h-full transition-transform ease-out duration-500"
                    style={{ transform: `translateX(-${currIndex * 100}%)` }}>
                    <img src={slide} className="w-full h-full object-cover" /></div>
            })}``
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