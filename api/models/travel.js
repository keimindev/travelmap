import mongoose from "mongoose";

const travelSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true, 
    },
    country:{
        type: String,
        required: true,
    },
    markerOffset:{ type: Number},
    coordinates: { type: Array, required: true},
    contents:{
        type: [{ 
            id:{
            type: Number,
            required: true, 
        },
            city:{
                type: String,
                required:true,
            },
            image:{
                type:String,
                required: true,
            }}],
        required: true,
    },  
}, 
{timestamps: true }
)


export const Travel = mongoose.models?.Travel || mongoose.model("Travel", travelSchema);