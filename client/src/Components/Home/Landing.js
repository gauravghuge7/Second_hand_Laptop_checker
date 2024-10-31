// components/Landing.js
"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center px-6">
      {/* Content Section */}
      <h1 className="text-4xl md:text-5xl p-4 pt-8 font-bold mb-6 transition-transform duration-300 hover:scale-105">
        Welcome to Laptop Checking System 
      </h1>
      <p className="text-lg md:text-xl mb-10 max-w-2xl text-blue-100 transition-transform duration-300 hover:scale-105">
        Get instant insights into your laptop’s performance, specifications, and display quality,
        helping you make informed choices before purchasing!
      </p>

      {/* Check Laptop Button */}
      <Link href="/User/CheckLaptop">
        <button className="px-8 py-3 bg-green-500 hover:bg-green-600 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
          Check Laptop
        </button>
      </Link>

      {/* Coming Soon Section */}
      <div className="mt-12 text-blue-200 text-sm md:text-base italic transition-opacity duration-300 hover:opacity-80">
        <p>🚀 Check Android feature is coming soon! Stay tuned for updates.</p>
      </div>

      {/* Feature Card Section with Hover Effects */}
      <div className="mt-16 max-w-5xl bg-white text-gray-900 rounded-lg shadow-lg p-8 md:p-12 transition-transform duration-500 hover:scale-105">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-900 transition-colors duration-300 hover:text-blue-700">
          Why Use Laptop Check?
        </h2>
        <p className="text-base md:text-lg mb-8 text-gray-800">
          Our laptop check tool provides comprehensive details on various aspects of laptop performance:
        </p>

        {/* Animated Feature Cards */}
        <div className="flex flex-col md:flex-row md:space-x-8">
          <FeatureCard
            title="Performance Evaluation"
            content="Discover in-depth insights into CPU speed, RAM efficiency, and storage capabilities, giving you a full view of what your laptop can handle."
            bgColor="bg-blue-50"
          />
          <FeatureCard
            title="Display Quality"
            content="Assess display features like brightness, color accuracy, and resolution, ensuring you choose the best screen for your needs."
            bgColor="bg-blue-50"
          />
          <FeatureCard
            title="Compatibility Check"
            content="Check compatibility with popular software and hardware to ensure your laptop supports your favorite tools."
            bgColor="bg-blue-50"
          />
        </div>
      </div>

      {/* Stories Section */}
      <div className="mt-16 max-w-5xl bg-white text-gray-900 rounded-lg shadow-lg p-8 md:p-12">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">
          User Stories
        </h2>
        
        {/* Story 1 */}
        <StoryCard
          title="Unexpected Issues with a New Laptop Purchase"
          content="A few days ago, I purchased a laptop for a friend – one Dell and one HP. Both seemed perfect at the time of purchase. However, within a week, a few keys on the keyboard of the HP model stopped working. Then, the display began duplicating, and it turned out the laptop was refurbished. I had no idea the display would be faulty, and without a tool to pre-check, I had no way of knowing. The Laptop Check app would have saved me a lot of trouble!"
        />

        {/* Story 2 */}
        <StoryCard
          title="Screen Brightness and Resolution Problems"
          content="Recently, I bought a high-spec laptop, but I noticed the screen was dim, and colors looked washed out. Even though it was a high-end model, the display quality was poor, and I struggled with visibility in bright lighting. Had I used Laptop Check, I would have known about the screen's limitations before making the purchase."
        />

        {/* Story 3 */}
        <StoryCard
          title="Compatibility Challenges with Software"
          content="I’m a graphic designer and need specific software for my work. After buying a laptop, I realized that it wasn’t compatible with some essential design tools. I couldn’t use it effectively for my job. With Laptop Check, I could have checked compatibility in advance to avoid this hassle."
        />
      </div>
    </div>
  );
}

/* Reusable FeatureCard Component */
function FeatureCard({ title, content, bgColor }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex-1 p-6 ${bgColor} rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out ${isHovered ? 'scale-105 shadow-2xl' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-xl font-semibold text-blue-800 mb-3 transition-colors duration-300 hover:text-blue-600">
        {title}
      </h3>
      <p className="text-gray-700 transition-opacity duration-300 hover:opacity-90">
        {content}
      </p>
    </div>
  );
}

/* Reusable StoryCard Component */
function StoryCard({ title, content }) {
  return (
    <div className="bg-blue-50 rounded-lg shadow-md p-6 mb-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-xl font-semibold text-blue-800 mb-3">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
