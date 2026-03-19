import express from "express";
import {} from "../controller/watchlistController.js";

const router = express.Router();

router.post("/", addToWatchlist);
