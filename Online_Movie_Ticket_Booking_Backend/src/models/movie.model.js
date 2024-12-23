import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      trim: true,
      index: true,
    },
    description: { type: String, required: [true, "description is required"] },
    genre: [{ type: String, required: [true, "genre is required"] }],
    releaseDate: {
      type: Date,
      required: [true, "releaseDate is required"],
      index: true,
    },
    rating: { type: Number },
    poster: { type: String, required: [true, "poster is required"] },
    language: [{ type: String, required: [true, "language is required"] }],
    cast: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cast",
        required: [true, "cast is required"],
      },
    ],
    crew: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Crew",
        required: [true, "crew is required"],
      },
    ],
    trailer: [{ type: String, required: [true, "trailer is required"] }],
    format: [{ type: String, required: [true, "format is required"] }],
    censorRating: {
      type: String,
      required: [true, "censorRating is required"],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "user is required"],
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

export const Movie = mongoose.model("Movie", movieSchema);
