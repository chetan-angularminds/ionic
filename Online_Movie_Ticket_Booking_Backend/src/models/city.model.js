import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "City name is required"],
    index: true,
  },
  country: { type: String, required: [true, "Country is required"] },
  state: { type: String, required: [true, "State is required"] },
  geolocation: { type: String, required: [true, "Geolocation is required"] },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
