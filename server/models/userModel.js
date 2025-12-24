import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      default: "",
    },
    savedTrips: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
      ref: "Trip",
    },
    createdTrips: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
      ref: "Trip",
    },
    preferences: {
      type: [String],
      default: [],
    },
    travelStyle: {
      type: String,
      enum: ["Relaxed", "Moderate", "Packed"],
      default: "Moderate",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
