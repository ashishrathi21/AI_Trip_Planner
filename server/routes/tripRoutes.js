import express from "express";
import {
  getTrip,
  createTripWithAI,
  getTripById,
  savedTrip,
  getAllSavedTrips,
  deleteTripById,
} from "../controllers/tripController.js";
import isLoggedIn from "../middlewares/authMiddleware.js";

const Router = express.Router();

Router.post("/create-ai-trip", isLoggedIn, createTripWithAI);
Router.get("/get-trips", isLoggedIn, getTrip);
Router.get("/get-trip/:id", isLoggedIn, getTripById);
Router.put("/save-trip/:id", isLoggedIn, savedTrip);
Router.get("/get-saved-trips", isLoggedIn, getAllSavedTrips);
Router.delete("/delete-trip/:id", isLoggedIn, deleteTripById);

export default Router;
