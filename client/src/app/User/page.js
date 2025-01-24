"use client";
import React from 'react';
import Link from 'next/link';

const DeviceCheckPage = () => {
  
  //  
  
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Device Check</h1>

      <div class="bg-blue-100 p-6 rounded-lg shadow-xl max-w-lg mx-auto mt-10 mb-8">
        <h2 class="text-2xl font-semibold text-green-600 mb-4">Exciting New Features Coming Soon!</h2>
        
        <p class="text-gray-700 text-lg mb-4">We are in the process of building some awesome functionalities for you. From this features some are not working for now, but we'll update them soon with dynamic content!</p>
        <ul class="text-gray-600 text-base list-disc pl-5 mb-6 space-y-2">
            
        </ul>
        <p class="text-gray-500 text-sm">We appreciate your patience and support. Stay tuned for the updates!</p>
      </div>
    
      <hr />
      <hr />

      <Link href="/User/CheckLaptop">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-200">
         Start Test Here
        </button>
      </Link>
    </div>
  );
};

export default DeviceCheckPage;
