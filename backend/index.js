import express from "express";
import mongoose from "mongoose";
import router from './routes/router.js'
import Movie from "./models/movie.js";
import cors from 'cors'

main().then(() => console.log('Connected to the Database'))
    .catch(err => console.log('OHNO ERROR!', err));

async function main() {
    await mongoose.connect("mongodb://localhost:27017/WiMovie");
}
const app = express()
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

app.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.json(movies)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


app.listen(5000, () => {
    console.log('listening in 4000000000')
})

