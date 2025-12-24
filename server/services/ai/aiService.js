import axios from "axios";
import { buildTripPrompt } from "./promptBuilder.js";
import dotenv from "dotenv";
dotenv.config();

export const generateTripItinerary = async (tripData) => {
  try {
    const promptText = buildTripPrompt(tripData);
    const apiKey = process.env.GEMINI_API_KEY;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

    console.log("Calling Gemini 3 Flash Preview...");

    const response = await axios.post(url, {
      contents: [
        {
          parts: [{ text: promptText }],
        },
      ],
    });

    if (!response.data || !response.data.candidates) {
      throw new Error("No response from AI");
    }

    const aiText = response.data.candidates[0].content.parts[0].text;
    const cleanJson = aiText.replace(/```json|```/g, "").trim();

    return {
      raw: aiText,
      parsed: JSON.parse(cleanJson),
    };
  } catch (error) {
    const errorMsg = error.response?.data?.error?.message || error.message;
    console.error("❌ API ERROR:", errorMsg);

    if (error.response?.status === 429) {
      throw new Error("Quota full! Please wait 60 seconds.");
    }
    throw new Error(errorMsg);
  }
};
