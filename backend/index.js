import express from "express";
import mongoose from "mongoose";
import MovieRoutes from "./routes/movieroute.js";
import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import dotenv from "dotenv";
import { setupPassport } from "./auth/googleAuth.js";
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

app.use(express.json());
app.use(cors(corsOptions));
app.use(
  session({
    secret: "lols",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1800000 },
  })
);

app.use(passport.initialize());
app.use(passport.session());

setupPassport();

app.use("/", userRoutes);
app.use("/movies", MovieRoutes);
app.use("/auth/google", authRoutes);

app.listen(5000, () => {
  console.log("listening in 4000000000");
});
