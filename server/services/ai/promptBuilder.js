export const buildTripPrompt = ({
  destination,
  days,
  budget,
  interests,
  travelstyle,
  travelersType,
}) => {
  return `
    You are an expert AI Travel Planner. 
    Generate a highly personalized ${days}-day itinerary for ${destination}.

    TRAVELER CONTEXT:
    - Group Type: ${travelersType} (Crucial: Tailor all activities for this group type)
    - Budget: ₹${budget} (Total budget)
    - Travel Pace: ${travelstyle}
    - Primary Interests: ${interests.join(", ")}

   IMAGE KEYWORD RULES:
    - For each day, provide a "imageKeyword" which is a VERY SPECIFIC landmark or place name.
    - Format: "${destination} [Exact Place Name] landmark scenic view"
    - Example for Paris: "Paris Eiffel Tower Trocadero Garden view"
    - DO NOT use generic words like "hotel" or "breakfast". Use only famous sightseeing spots.

    SPECIFIC INSTRUCTIONS FOR GROUP TYPE:
    - If "Couple": Suggest romantic, scenic, and intimate locations.
    - If "Family": Focus on safety, kid-friendly spots, and accessible locations.
    - If "Single": Suggest social spots, hostels (if budget fits), and adventure or solo-friendly activities.
    - If "Friends": Focus on nightlife, group activities, and fun/vibrant spots.

    Return ONLY a valid JSON object. No markdown, no prose, no backticks.
    
    JSON STRUCTURE:
    {
      "destination": "${destination}",
      "mainImageKeyword": "Detailed scenic keyword for ${destination}",
      "totalDays": ${days},
      "travelersType": "${travelersType}",
      "days": [
        {
          "day": 1,
          "morning": "Detailed specific activity for morning",
          "afternoon": "Detailed specific activity for afternoon",
          "evening": "Detailed specific activity for evening",
          "estimatedCost": "Approx cost in INR for this day"
          "imageKeyword": "Detailed specific landmark name",
        }
      ]
    }
  `;
};
