import mongoose from "mongoose";
import Movie from "../models/movie.js";
import axios from "axios";

main()
  .then(() => console.log("Connected to the Database"))
  .catch((err) => console.log("OHNO ERROR!", err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/WiMovie");
}

const seedDB = async () => {
  await Movie.deleteMany({});
  const response = await axios.get(
    "https://api.themoviedb.org/3/tv/top_rated?api_key=7bf5ed7233aef31fbfb393a85985d9c2&language=en-US&page=1"
  );
  for (let data of response.data.results) {
    const movie = new Movie({
      name: `${data.name}`,
      date: `${data.first_air_date}`,
      description: `${data.overview}`,
      backdropPath: `${data.backdrop_path}`,
      posterPath: `${data.poster_path}`,
    });
    await movie.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
