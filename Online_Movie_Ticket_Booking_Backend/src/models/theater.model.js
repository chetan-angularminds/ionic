import mongoose from "mongoose";

const theaterAddressSchema = new mongoose.Schema({
  addressLine1: {
    type: String,
    required: [true, "Address Line 1 is required"],
  },
  addressLine2: { type: String },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "City",
    required: [true, "City is required"],
  },
  state: { type: String, required: [true, "State is required"] },
  country: { type: String, required: [true, "Country is required"] },
  pincode: {
    type: Number,
    required: [true, "Pincode is required"],
    match: [/^[0-9]{6}$/, "Pincode must be 6 digits"],
  },
  Geolocation: { type: String, required: [true, "Geolocation is required"] },
});

const facilitiesSchema = new mongoose.Schema({
  parking: { type: Boolean, default: false },
  foodCourt: { type: Boolean, default: false },
  ATM: { type: Boolean, default: false },
  foodAndBeverages: { type: Boolean, default: false },
  reclinerSeats: { type: Boolean, default: false },
  mTicket: { type: Boolean, default: false },
  wheelchairAccessibility: { type: Boolean, default: false },
});

const theaterSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    address: {
      type: theaterAddressSchema,
      required: [true, "Address is required"],
      index: true,
    },
    contactNumber: {
      type: Number,
      required: [true, "Contact Number is required"],
      match: [/^[0-9]{10}$/, "Contact Number must be 10 digits"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already exists"],
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Email must be valid",
      ],
    },
    numberOfScreens: {
      type: Number,
      required: [true, "Number of Screens is required"],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    facilities: [
      { type: facilitiesSchema, required: [true, "Facilities is required"] },
    ],
    updatedBy: [{user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, date: {type: Date} }],
  },
  {
    timestamps: true,
  }
);

export const Theater = mongoose.model("Theater", theaterSchema);
