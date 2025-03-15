"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Shadcn Card
import { Button } from "@/components/ui/button"; // Shadcn Button

// Mock Redux state (replace with actual Redux store logic)
const mockLaptopTest = [
  { name: "Processor (CPU)", route: "/User/CheckLaptop/CheckCPU", checked: false },
  { name: "Graphics Card (GPU)", route: "/User/CheckLaptop/CheckGPU", checked: false },
  { name: "RAM (Memory)", route: "/ram", checked: false },
  { name: "Storage", route: "/User/CheckLaptop/CheckStorage", checked: false },
  { name: "Display", route: "/display", checked: false },
  { name: "Operating System (OS)", route: "/os", checked: false },
  { name: "Battery Life", route: "/battery", checked: false },
  { name: "Ports and Connectivity", route: "/User/CheckLaptop/CheckPorts", checked: false },
  { name: "Build Quality and Design", route: "/design", checked: false },
  { name: "Additional Features", route: "/features", checked: false },
  { name: "Brand and Warranty", route: "/brand", checked: false },
  // Additional tests from my side
  { name: "Keyboard Performance", route: "/keyboard", checked: false },
  { name: "Cooling System", route: "/cooling", checked: false },
  { name: "Network Performance", route: "/network", checked: false },
  { name: "Audio Quality", route: "/audio", checked: false },
];

const LaptopConfigurations = () => {
  // Mock Redux selector (uncomment and adjust if using real Redux)
  // const data = useSelector((state) => state.laptopReducer.laptopTest);
  const data = mockLaptopTest; // Using mock data for this example

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-black to-gray-900 p-6">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white">
          Laptop <span className="text-cyan-400">Configurations</span>
        </h1>
        <div className="space-y-6">
          {data.map((config, index) => (
            <Card
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 transition-transform transform hover:scale-105 duration-300 hover:shadow-cyan-500/50"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">
                  {config.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Status Indicator */}
                <div>
                  {config.checked ? (
                    <h2 className="text-green-400 font-bold">Test Passed</h2>
                  ) : (
                    <h2 className="text-red-400 font-bold">Not Checked Yet</h2>
                  )}
                </div>
                {/* Start Test Button */}
                <div className="text-right">
                  <Link href={config.route}>
                    <Button
                      className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-full py-2 px-6 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-cyan-500/50"
                    >
                      View Checkup
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaptopConfigurations;