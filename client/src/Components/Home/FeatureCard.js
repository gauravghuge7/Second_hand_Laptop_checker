// components/FeatureCard.js
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils"; // Shadcn utility for className merging

export default function FeatureCard({ title, content, bgColor }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        `flex-1 p-6 ${bgColor} rounded-lg shadow-lg transform transition-all duration-300 ease-in-out`,
        isHovered ? "scale-105 shadow-2xl" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-xl font-semibold text-gray-100 mb-3 transition-colors duration-300 hover:text-white">
        {title}
      </h3>
      <p className="text-gray-300 transition-opacity duration-300 hover:opacity-90">
        {content}
      </p>
    </div>
  );
}