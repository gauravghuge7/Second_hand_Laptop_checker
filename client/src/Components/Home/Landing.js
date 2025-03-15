// components/Landing.js
"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button"; // Shadcn Button
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Shadcn Card
import { FaLaptopCode, FaRocket, FaTools, FaDownload } from "react-icons/fa"; // React Icons
import FeatureCard from "./FeatureCard"; 
import About from "@/app/about/page";
import Checkup from "../CheckUp/page";

export default function Landing() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900 px-6 py-16 overflow-hidden">
        {/* Neon Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#00ffcc_0,_transparent_70%)] opacity-20 animate-pulse" />
        
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-6 tracking-tight">
          <span className="text-cyan-400">Mpute</span>
          <span className="text-white">Test</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl text-center mb-10 leading-relaxed">
          Diagnose your computer’s hardware and software with our cutting-edge cross-platform app. Fast, reliable, and free!
        </p>
        <Link href="/download">
          <Button
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-full px-8 py-6 flex items-center gap-2 shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <FaDownload />
            Download Now
          </Button>
        </Link>
        <p className="mt-4 text-sm text-gray-400 italic">Available for Windows, macOS, and Linux</p>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Why Choose <span className="text-cyan-400">MputeTest</span>?
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FaLaptopCode size={40} className="text-cyan-400" />}
            title="Comprehensive Diagnostics"
            content="Analyze CPU, GPU, RAM, storage, and more with detailed reports."
            bgColor="bg-gray-800"
          />
          <FeatureCard
            icon={<FaRocket size={40} className="text-cyan-400" />}
            title="Lightning Fast"
            content="Get results in seconds with our optimized cross-platform engine."
            bgColor="bg-gray-800"
          />
          <FeatureCard
            icon={<FaTools size={40} className="text-cyan-400" />}
            title="Fix & Optimize"
            content="Receive actionable insights to improve performance and stability."
            bgColor="bg-gray-800"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-900 to-black text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Test Your Machine?
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Download MputeTest now and take control of your computer’s health.
        </p>
        <Link href="/download">
          <Button
            size="lg"
            className="bg-white text-cyan-900 hover:bg-gray-200 font-bold rounded-full px-8 py-6 shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Button>
        </Link>
      </section>

      <Checkup />

      <About />

    </div>
  );
}