import mongoose from "mongoose";

const rowSchema = new mongoose.Schema({
  rowNumber: { type: Number, required: true },
  rowLabel: { type: String, required: true },
  seats: { type: number, required: true },
});

const seatingAreaSchema = new mongoose.Schema({
  label: { type: String, required: [true, "Label is required"] },
  row: [{ type: rowSchema, required: [true, "Row is required"] }],
});

const seatingLayoutSchema = new mongoose.Schema({
  screen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Screen",
    required: [true, "Screen is required"],
    index: true,
  },
  walkway: [{ type: number }], // numbers of the seat which after there is a walkway
  seatingArea: [
    { type: seatingAreaSchema, required: [true, "Seating Area is required"] },
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User is required"],
  },
  updatedBy: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      date: { type: Date },
    },
  ],
});

export const SeatingLayout = mongoose.model(
  "SeatingLayout",
  seatingLayoutSchema
);
