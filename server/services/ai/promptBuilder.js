export const buildTripPrompt = ({
  source,
  destination,
  days,
  budget,
  interests,
  travelstyle,
  travelersType,
  travelMode,
}) => {
  return `
    You are an expert AI Travel Planner. 
    Generate a highly personalized ${days}-day itinerary from ${source} to ${destination}.

    TRAVELER CONTEXT:
    - Group Type: ${travelersType} (Crucial: Tailor all activities for this group type)
    - Total Budget: ₹${budget} (IMPORTANT: All expenses including transport, food, and stay must fit within this total)
    - Travel Pace: ${travelstyle}
    - Primary Interests: ${interests.join(", ")}
    - Mode of Transport: ${travelMode} (From ${source} to ${destination})

    TRANSPORT & LOGISTICS RULES:
    - Calculate approximate travel duration from ${source} to ${destination} based on ${travelMode}.
    - If ${travelMode} is "Car": Include estimated Fuel + Toll costs.
    - If ${travelMode} is "Bus" or "Train" or "Plane": Include estimated ticket prices for ${travelersType}.
    - Deduct these transport costs from the total ₹${budget} before suggesting food and stay.

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
      "source": "${source}",
      "travelMode": "${travelMode}",
      "estimatedTravelTime": "Duration in hours/days from source to destination via ${travelMode}",
      "transportCostBreakdown": "Briefly mention ticket or fuel/toll estimate",
      "mainImageKeyword": "Detailed scenic keyword for ${destination}",
      "totalDays": ${days},
      "travelersType": "${travelersType}",
      "days": [
        {
          "day": 1,
          "morning": "Detailed specific activity for morning",
          "afternoon": "Detailed specific activity for afternoon",
          "evening": "Detailed specific activity for evening",
          "estimatedCost": "Approx cost in INR for this day (Food + Entry fees + local transport)",
          "imageKeyword": "Detailed specific landmark name"
        }
      ]
    }
  `;
};
