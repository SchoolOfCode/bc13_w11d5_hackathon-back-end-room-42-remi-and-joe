import express from "express";
import getMovies from "../Models/moviesmodels.js";

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("test")
  const data = await getMovies();
  res.json({ success: true, payload: data });
});

export default router;
