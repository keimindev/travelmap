import express from "express";
import { getAllTravels } from "../controllers/travel.js";

const router = express.Router();

router.get("/", getAllTravels)

export default router