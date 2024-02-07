import mongoose from "mongoose";
const Schema = mongoose.Schema

const movieSchema = new Schema(
    {
        name: String,
        date: String,
        description: String,
        backdropPath: String,
        posterPath: String
    }
)

const Movie = mongoose.model('movieSchema', movieSchema)

export default Movie