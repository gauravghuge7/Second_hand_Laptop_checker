// components/Features.js
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Shadcn Card
import {
  FaSearch,
  FaDesktop,
  FaChartLine,
  FaLightbulb,
  FaLock,
  FaHeadset,
} from "react-icons/fa"; // React Icons

const featuresData = [
  {
    title: "Comprehensive Diagnostics",
    description:
      "Run a full diagnostic check to assess your laptop’s performance, battery health, and hardware status, including CPU, GPU, RAM, and storage insights.",
    icon: <FaSearch size={40} className="text-cyan-400" />,
  },
  {
    title: "User-Friendly Interface",
    description:
      "Enjoy an intuitive, easy-to-navigate interface designed to simplify the diagnostic process for users of all skill levels.",
    icon: <FaDesktop size={40} className="text-cyan-400" />,
  },
  {
    title: "Real-Time Monitoring",
    description:
      "Monitor system performance in real-time with detailed analytics and metrics, keeping you informed about your computer’s health.",
    icon: <FaChartLine size={40} className="text-cyan-400" />,
  },
  {
    title: "Custom Recommendations",
    description:
      "Receive tailored recommendations based on your system’s health and performance results to optimize and troubleshoot effectively.",
    icon: <FaLightbulb size={40} className="text-cyan-400" />,
  },
  {
    title: "Secure Data Handling",
    description:
      "Your data privacy is our priority; we ensure secure handling of all diagnostics with no unnecessary data collection.",
    icon: <FaLock size={40} className="text-cyan-400" />,
  },
  {
    title: "24/7 Support",
    description:
      "Get help anytime with our round-the-clock customer support, ready to assist with all your technical queries.",
    icon: <FaHeadset size={40} className="text-cyan-400" />,
  },
];

export default function Features() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12">
          Features of <span className="text-cyan-400">MputeTest</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 transition-transform transform hover:scale-105 duration-300 hover:shadow-cyan-500/50"
            >
              <CardHeader>
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-semibold text-white text-center">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}