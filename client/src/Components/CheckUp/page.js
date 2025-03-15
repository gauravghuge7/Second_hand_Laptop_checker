

// components/Checkup.js or pages/checkup.js
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Shadcn Button
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Shadcn Card

export default function Checkup() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black to-gray-900 p-6">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white">
          System <span className="text-cyan-400">Checkup</span>
        </h1>

        {/* Checkup Card */}
        <Card className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 transition-transform transform hover:scale-105 duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-cyan-400 text-center">
              What Can MputeTest Check?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-300">
            {/* Description */}
            <p className="text-lg text-center">
              MputeTest provides comprehensive diagnostics for your computer, ensuring you have all the insights you need to optimize performance and troubleshoot issues. Here’s what we can check:
            </p>

            

            {/* Button */}
            <div className="text-center">
              <Link href="/User/CheckLaptop">
                <Button
                  className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-full py-6 px-8 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-cyan-500/50"
                >
                  Check MputeTest Process Now
                </Button>
              </Link>
              <p className="text-sm text-gray-400 mt-2">
                Download the app to start checking your system (Coming Soon)!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}