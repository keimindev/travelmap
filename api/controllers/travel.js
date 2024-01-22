import { Travel } from "../models/travel.js";

export const getAllTravels = async(req,res, next) =>{
  try {
    const travel = await Travel.find();
    res.status(200).json(travel)
  } catch (error) {
    next(error)
  }
}