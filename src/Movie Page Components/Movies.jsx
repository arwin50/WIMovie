import { Link } from "react-router-dom"

const imageUrl = "https://image.tmdb.org/t/p/original"
export default function Movie({ movies }) {
    return (
        <div className="grid grid-rows-2 grid-flow-col gap-5 gap-y-14 m-6" >
            {movies.map((movie) => {
                return <div key={movie._id} ><Link className="w-32 h-44 flex flex-col border-2 border-white"><img className="w-full h-full" src={`${imageUrl}/${movie.posterPath}`} />
                    <p className="text-white text-xs text-center font-rubik mt-2">{movie.name}</p></Link>
                </div>
            })}
        </div>
    )
}