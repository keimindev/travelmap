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


export default mongoose.model("Travel", travelSchema);