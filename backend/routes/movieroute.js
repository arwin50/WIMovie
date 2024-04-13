import express from "express";
const router = express.Router();
import * as movieController from "../controllers/movies.js";

router.route("/").get(movieController.getMovies);

export default router;
