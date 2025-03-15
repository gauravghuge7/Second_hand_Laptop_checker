"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Button } from "@/components/ui/button"; // Shadcn Button component
import { cn } from "@/lib/utils"; // Utility from shadcn for className merging

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pathSegments, setPathSegments] = useState([]);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const segments = pathname.split("/").filter(Boolean);
    setPathSegments(segments);
  }, [pathname]);

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-lg border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="text-white hover:text-gray-300 hover:bg-gray-900"
          >
            <AiOutlineMenu size={24} />
          </Button>
          <h1 className="text-xl font-bold">
            <span className="text-gray-400">Mpute</span>
            <span className="text-white">Test</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6 items-center">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-gray-300 hover:bg-gray-900">
              Home
            </Button>
          </Link>
          <Link href="/features">
            <Button variant="ghost" className="text-white hover:text-gray-300 hover:bg-gray-900">
              Features
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" className="text-white hover:text-gray-300 hover:bg-gray-900">
              Contact
            </Button>
          </Link>
          <Link href="/download">
            <Button className="bg-gray-800 hover:bg-gray-700 text-white">
              Download App
            </Button>
          </Link>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 w-64 h-full bg-gray-900 text-white z-50 transform transition-transform duration-300 ease-in-out",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h2 className="text-lg font-bold">
            <span className="text-gray-400">Mpute</span>
            <span className="text-white">Test</span>
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <AiOutlineClose size={20} />
          </Button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <Link href="/">
            <Button
              variant="ghost"
              className="w-full text-left justify-start text-gray-300 hover:text-white hover:bg-gray-800"
            >
              Home
            </Button>
          </Link>
          <Link href="/features">
            <Button
              variant="ghost"
              className="w-full text-left justify-start text-gray-300 hover:text-white hover:bg-gray-800"
            >
              Features
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="ghost"
              className="w-full text-left justify-start text-gray-300 hover:text-white hover:bg-gray-800"
            >
              Contact
            </Button>
          </Link>
          <Link href="/download">
            <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
              Download App
            </Button>
          </Link>
        </nav>
      </div>
    </div>
  );
}