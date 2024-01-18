import express from "express";
import Travel from "../models/travel.js";

const router = express.Router();

router.get("/", async (req, res) => {
    // res.send("hello, it's travel")
    console.log('its travel')
    try {
        const travels = await Travel.find()
        console.log(travels, 'fff')
        res.status(200).json(travels);
    } catch (error) {
        res.status(500).json(error);
    }
})

export default router