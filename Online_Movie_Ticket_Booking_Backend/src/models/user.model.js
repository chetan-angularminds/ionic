import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "full name is required"],
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "email is already taken"],
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    username: {
      type: String,
      required: [true, "username is required"],
      unique: [true, "username is already taken"],
      trim: true,
      index: true,
      lowercase: true,
    },
    avatar: {
      type: String,
      required: [true, "avatar is required"],
    },
    deleted: {
        type: Boolean,
    }
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
