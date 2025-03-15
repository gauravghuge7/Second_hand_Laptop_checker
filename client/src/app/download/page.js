// pages/download.js
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Shadcn Button
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Shadcn Card
import { FaLinux, FaApple, FaWindows } from "react-icons/fa"; // OS Icons

export default function Download() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black to-gray-900 p-6">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white">
          Download <span className="text-cyan-400">MputeTest</span>
        </h1>

        {/* Main Card */}
        <Card className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 transition-transform transform hover:scale-105 duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-cyan-400 text-center">
              Get the Cross-Platform App
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-300">
            {/* Description */}
            <p className="text-lg text-center">
              MputeTest is your go-to tool for diagnosing computer hardware and software across Linux, macOS, and Windows. While our app is still in development, stay tuned for its release—coming soon to optimize your system like never before!
            </p>

            {/* Download Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Linux Button */}
              <div className="flex flex-col items-center">
                <Button
                  disabled
                  className="w-full bg-gray-700 text-white hover:bg-gray-600 rounded-full py-6 flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <FaLinux size={24} />
                  Linux
                </Button>
                <p className="text-sm text-gray-400 mt-2">Coming Soon</p>
              </div>

              {/* macOS Button */}
              <div className="flex flex-col items-center">
                <Button
                  disabled
                  className="w-full bg-gray-700 text-white hover:bg-gray-600 rounded-full py-6 flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <FaApple size={24} />
                  macOS
                </Button>
                <p className="text-sm text-gray-400 mt-2">Coming Soon</p>
              </div>

              {/* Windows Button */}
              <div className="flex flex-col items-center">
                <Button
                  disabled
                  className="w-full bg-gray-700 text-white hover:bg-gray-600 rounded-full py-6 flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <FaWindows size={24} />
                  Windows
                </Button>
                <p className="text-sm text-gray-400 mt-2">Coming Soon</p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center">
              <p className="text-base mb-4">
                Once ready, MputeTest will be hosted on Cloudinary for fast, secure downloads. Check back here or follow our updates for the official launch!
              </p>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="bg-transparent border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Notify Me When Available
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}