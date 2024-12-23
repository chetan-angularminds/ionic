import mongoose from "mongoose";

const castSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is required"]},
    role: {type: String, required: [true, "Role is required"]},
    avatar: {type: String, required: [true, "Avatar is required"]},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: [true, "Created by is required"]},
});

export const Cast = mongoose.model("Cast", castSchema); // <--- typo here