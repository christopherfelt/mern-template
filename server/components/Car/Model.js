import mongoose from "mongoose";
let Schema = mongoose.Schema;

const CarSchema = new Schema(
    {
    description: { type: String, required: true },
    title: { type: String, required: true },
    // creatorEmail: { type: String, required: true },
    },
    { timestamps: true }
);

const Car = mongoose.model("Car", CarSchema);

export default Car;    
