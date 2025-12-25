import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    source: {
      type: String,
      required: true,
      trim: true,
    },
    destination: {
      type: String,
      required: true,
      trim: true,
    },
    days: {
      type: Number,
      required: true,
    },
    travelMode: {
      type: String,
      default: "Plane",
    },
    travelersType: {
      type: String,
      enum: ["Single", "Couple", "Family", "Friends"],
      default: "Single",
    },
    budget: {
      type: Number,
      required: true,
    },
    interests: {
      type: [String],
      default: [],
    },
    travelStyle: {
      type: String,
      enum: ["Relaxed", "Moderate", "Packed"],
      default: "Moderate",
    },
    aiResponse: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Trip", tripSchema);
