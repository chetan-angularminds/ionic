import mongoose from "mongoose";

const crewSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    role: { type: String, required: [true, "Role is required"] },
    avatar: { type: String, required: [true, "Avatar is required"] },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" , required: true},
  },
  {
    timestamps: true,
  }
);

export const Crew = mongoose.model("Crew", crewSchema);
