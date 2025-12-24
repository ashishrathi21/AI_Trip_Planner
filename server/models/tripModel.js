import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
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
