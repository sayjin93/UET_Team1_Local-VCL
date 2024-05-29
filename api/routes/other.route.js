import express from "express";
import { countAllPosts } from "../controllers/other.controller.js";

const router = express.Router();

router.get("/countPosts", countAllPosts);

export default router;
