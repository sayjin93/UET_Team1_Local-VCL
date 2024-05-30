import express from "express";
import {
  countAllPosts,
  getAllCities,
} from "../controllers/other.controller.js";

const router = express.Router();

router.get("/countPosts", countAllPosts);
router.get("/cities", getAllCities);

export default router;
