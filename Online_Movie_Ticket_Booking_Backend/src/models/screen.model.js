import mongoose from "mongoose";

const screenSchema = new mongoose.Schema(
  {
    screenName: { type: String, required: [true, "Screen name is required"] },
    theaterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Theater",
      required: [true, "Theater ID is required"],
    },
    totalSeats: { type: Number, required: [true, "Total seats is required"] },
    screenType: { type: String, required: [true, "Screen type is required"] },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },
    updatedBy: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        date: { type: Date },
      },
    ],
  },

  {
    timestamps: true,
  }
);

export const Screen = mongoose.model("Screen", screenSchema);
