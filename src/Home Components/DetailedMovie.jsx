import { PlusSquare, PlusCircle } from "react-feather"
const imageUrl = "https://image.tmdb.org/t/p/original"


export default function DetailedMovie({ slide, index }) {

    return <div key={index} className="max-w-[30rem] max-[470px]:w-full h-36 mb-2 flex flex-row ">
        <img src={`${imageUrl}/${slide.poster_path}`} className="max-w-24 max-[470px]:max-w-20 h-full max-[470px]:h-5/6 object-cover max-[470px]:mt-2 " />
        <div className="ml-4 flex flex-col text-white ">
            <div className="flex flex-row"><h3 className="overflow-hidden font-bold max-[470px]:text-sm ">{slide.name}</h3>

                <button className="flex ml-auto items-center space-x-0.5 mr-4 hover:text-amber-300  ">
                    <PlusSquare size={20} />  <p className="ml-2 text-base max-[470px]:text-xs">Watchlist</p>
                </button>
                <button className="flex items-center space-x-0.5 mr-2 hover:text-amber-300 ">
                    <PlusCircle size={20} />  <p className="ml-2 text-base max-[470px]:text-xs">Add Review</p>
                </button>


            </div>
            <p className="text-xs mt-1  overflow-hidden">{slide.overview}</p>
            <p className="text-xs mt-1 ">Air Date: {slide.first_air_date}</p>
        </div>

    </div >
}
