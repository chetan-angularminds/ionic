import mongoose from "mongoose";

const showSchema = new mongoose.Schema({
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: [true, "Movie is required"],
    index: true,
  },
  showDate: {
    type: Date,
    required: [true, "Show date is required"],
    index: true,
  },
  showStartTime: {
    type: Date,
    required: [true, "Show start time is required"],
  },
  showEndTime: {
    type: Date,
    required: [true, "Show end time is required"],
  },
  theater: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Theater",
    required: [true, "Theater is required"],
    index: true,
  },
  screen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Screen",
    required: true,
    index: true,
  },
  SeatingLayout: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SeatingLayout",
    required: true,
  },
  seatPrice: [
    {
      seatingAreaLabel: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  updatedBy: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      date: { type: Date },
    },
  ],
});

const Show = mongoose.model("Show", showSchema);

export { default as Show } from "./Show";
