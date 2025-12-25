# 🤖 AI Trip Planner - Your Personal Travel Roadmap

An AI-powered full-stack application that generates a personalized day-wise itinerary for your next trip based on budget, destination, and duration.

## 🚀 Live Demo
**Frontend:** https://ai-trip-planner-silk-nu.vercel.app/

**Backend:** https://ai-trip-planner-4-mbkk.onrender.com/

## ✨ Features
- **AI-Generated Plans:** Integration with **Google Gemini AI** for smart travel suggestions.
- **Dynamic Visuals:** **Unsplash API** used to fetch relevant landmark images.
- **Secure Auth:** JWT-based authentication with **HTTP-Only Cookies** for maximum security.
- **Export to PDF:** Download your itinerary with one click using `react-to-print`.
- **Responsive UI:** Modern, clean, and mobile-friendly design with **Tailwind CSS**.

## 🛠️ Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, Axios, React Icons
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas)
- **AI:** Google Gemini Pro API
- **Deployment:** Vercel (Client), Render (Server)

## 📦 Installation & Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/ashishrathi21/AI_Trip_Planner.git

2. **Set Up client:**
   ```bash
   cd client
   npm install
   npm run dev

3. **Set Up server:**
   ```bash
   cd server
   npm install
   node server.js

4. Environment Variables: Create a `.env ` file in both folders and add your API keys

5. **For cilent:**
    ```bash
    VITE_UNSPLASH_ACCESS_KEY=<YOUR_UNSPLASH_ACCESS_KEY>

6. **For server:**
   ```bash
   PORT = <YOUR_PORT>
   MONGODB_URI = <YOUR_MONGODB_URI>
   JWT_SECRET = <YOUR_SECRET_KEY>
   GEMINI_API_KEY=<YOUR_GEMINI_API_KEY>

📄 License
This project is open-source and available under the MIT License.
