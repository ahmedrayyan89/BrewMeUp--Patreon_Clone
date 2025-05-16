"use client"
import React from "react";
import { motion } from 'framer-motion';
import { FiDatabase, FiImage, FiServer } from "react-icons/fi";
import { 
  FiSearch, FiHeart, FiUser, FiAward, FiTrendingUp, FiStar, 
  FiMusic, FiCode, FiPenTool, FiBook, FiCamera, FiMic, FiFilm,
  FiZap, FiPieChart, FiGlobe, FiCoffee 
} from 'react-icons/fi';
export default function Home() {
    return (
      <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white flex items-center justify-center px-6">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to <span className="text-blue-400">BrewMeUp</span></h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
            A platform to support creators, artists, and developers. Subscribe, connect, and grow.
          </p>
          <a href="/explore" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Explore Creators
          </a>
        </div>
      </main>
    );
  }
  