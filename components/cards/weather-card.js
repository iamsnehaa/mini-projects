"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cloud, Sun, Droplets } from "lucide-react";

// Mock weather data (replace with actual API call in a real application)
const weatherData = {
  temperature: 22,
  condition: "Partly Cloudy",
  humidity: 60,
  windSpeed: 10,
};

export default function WeatherWidget() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
        transition={{ duration: 0.5 }}
        className="bg-black text-white p-6 rounded-xl border border-white/20 shadow-lg w-full max-w-sm"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Weather</h2>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <Sun className="text-yellow-400 w-8 h-8" />
          </motion.div>
        </div>
        <div className="mb-4">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold"
          >
            {weatherData.temperature}°C
          </motion.div>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400"
          >
            {weatherData.condition}
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-between text-sm"
        >
          <div className="flex items-center">
            <Droplets className="mr-2 text-blue-400" />
            <span>{weatherData.humidity}% Humidity</span>
          </div>
          <div className="flex items-center">
            <Cloud className="mr-2 text-gray-400" />
            <span>{weatherData.windSpeed} km/h Wind</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
