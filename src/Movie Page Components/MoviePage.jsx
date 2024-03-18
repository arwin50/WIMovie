import { useEffect, useState } from "react"
import axios from 'axios';
import Movie from "./Movies";



export default function MoviePage() {
    const [movies, setMovies] = useState([])
    const [formData, setFormData] = useState("")
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

    const handleSubmit = (evt) => {
        evt.preventDefault()

    }

    const inputChange = async (evt) => {
        setFormData(evt.target.value)
        try {
            const response = await axios.get(`http://localhost:5000/movies`, { params: { name: formData } });
            setMovies(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <section className="flex flex-col mt-2 justify-center space-y-6">
            <h1 className="text-3xl text-white text-center mt-6 font-semibold font-rubik">Search Movies</h1>
            <form onSubmit={handleSubmit} className=" text-center ">
                <input
                    type="text"
                    placeholder="Enter keywords..."
                    className="w-[40%] p-2 border-2 rounded text-center mb-1"
                    value={formData}
                    name="movie"
                    id="movie"
                    onChange={inputChange} />
            </form>
            <Movie movies={movies} />
        </section >
    )
}