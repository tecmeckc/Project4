import dotenv from "dotenv";
dotenv.config(); // Load .env variables

console.log("Loaded Environment Variables:", process.env); // Debug: Check all env variables

const API_TOKEN = process.env.VITE_WAQI_API_KEY;
console.log("API TOKEN:", API_TOKEN);

if (!API_TOKEN) {
  console.error("Missing API key! Make sure VITE_WAQI_API_KEY is set in your .env file.");
}
