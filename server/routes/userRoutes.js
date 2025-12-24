import express from "express";
import {
  Register,
  Login,
  Logout,
  getMe,
  updateUserProfile,
} from "../controllers/userController.js";
import isLoggedIn from "../middlewares/authMiddleware.js";

const Router = express.Router();

Router.post("/register", Register);
Router.post("/login", Login);
Router.get("/logout", Logout);
Router.get("/me", isLoggedIn, getMe);
Router.put("/profile", isLoggedIn, updateUserProfile);

export default Router;
