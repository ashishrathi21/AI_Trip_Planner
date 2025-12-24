import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

import dataBaseConnection from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import tripRoutes from "./routes/tripRoutes.js";

const app = express();
dataBaseConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173", 
      "https://ai-trip-planner-silk-nu.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, 
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

res.cookie("token", token, {
  httpOnly: true,
  secure: true,      
  sameSite: "none",  
  maxAge: 24 * 60 * 60 * 1000, 
});



app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is Live and Running! 🚀" });
});

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/trips", tripRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});