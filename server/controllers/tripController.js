import userModel from "../models/userModel.js";
import tripModel from "../models/tripModel.js";
import { generateTripItinerary } from "../services/ai/aiService.js";

export const createTripWithAI = async (req, res) => {
  try {
    const userId = req.user;
    const {
      source,
      destination,
      days,
      budget,
      interests,
      travelstyle,
      travelersType,
      travelMode,
    } = req.body;

    const tripInput = {
      source,
      destination,
      days,
      budget,
      interests: Array.isArray(interests) ? interests : [interests],
      travelType: travelstyle || "Moderate",
      travelersType,
      travelMode,
    };

    const aiResult = await generateTripItinerary(tripInput);

    const trip = await tripModel.create({
      userId: userId,
      source,
      destination,
      days,
      budget,
      interests: tripInput.interests,
      travelersType,
      travelStyle: travelstyle,
      aiResponse: aiResult.parsed,
      travelMode,
    });

    await userModel.findByIdAndUpdate(userId, {
      $push: { createdTrips: trip._id },
    });

    res.status(201).json({ success: true, trip });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getTrip = async (req, res) => {
  try {
    const userId = req.user;
    const trips = await tripModel.find({ userId });
    res.status(200).json({ message: "Trips fetched successfully", trips });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getTripById = async (req, res) => {
  try {
    const { id } = req.params;
    const trip = await tripModel.findById(id);

    if (!trip) {
      return res
        .status(404)
        .json({ success: false, message: "Trip not found" });
    }

    res.status(200).json({
      success: true,
      trip: trip,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const savedTrip = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user;

    const trip = await tripModel.findById(id);
    if (!trip)
      return res
        .status(404)
        .json({ success: false, message: "Trip not found" });

    const user = await userModel.findById(userId);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    if (!user.savedTrips.includes(trip._id)) {
      user.savedTrips.push(trip._id);
      await user.save();
    }
    res.status(200).json({ success: true, message: "Trip saved successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllSavedTrips = async (req, res) => {
  try {
    const userId = req.user;
    const user = await userModel.findById(userId).populate("savedTrips");
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    res.status(200).json({ success: true, savedTrips: user.savedTrips });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTripById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user;

    const deletedTrip = await tripModel.findByIdAndDelete(id);
    if (!deletedTrip) {
      return res
        .status(404)
        .json({ success: false, message: "Trip not found" });
    }
    await userModel.findByIdAndUpdate(userId, {
      $pull: {
        createdTrips: id,
        savedTrips: id,
      },
    });

    res
      .status(200)
      .json({
        success: true,
        message: "Trip deleted permanently from everywhere",
      });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
