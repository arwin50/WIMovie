import express from "express";
import mongoose from "mongoose";
import MovieRoutes from "./routes/movieroute.js";
import Movie from "./models/movie.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

main()
  .then(() => console.log("Connected to the Database"))
  .catch((err) => console.log("OHNO ERROR!", err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/WiMovie");
}
const app = express();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/movies", MovieRoutes);


app.listen(5000, () => {
  console.log("listening in 4000000000");
});
