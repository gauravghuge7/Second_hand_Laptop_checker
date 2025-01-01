"use client";
import React from 'react';
import Link from 'next/link';
import Dashboard from './dashboard/page';

const DeviceCheckPage = () => {
  
  const cards = [
    {
      title: 'Check Keyboard',
      description: 'Test your keyboard for any issues and see if all keys are functional.',
      buttonText: 'Test Keyboard',
      link: '/User/CheckLaptop/checkKeyboard',
      bgColor: 'bg-gradient-to-r from-green-400 to-green-600',
    },
    {
      title: 'Check Processing Power',
      description: 'Analyze the CPU and its performance under load.',
      buttonText: 'Check CPU',
      link: '/User/CheckLaptop/CheckCPU',
      bgColor: 'bg-gradient-to-r from-blue-400 to-blue-600',
    },
    {
      title: 'Check Battery Status',
      description: 'View the current battery status and health of your device.',
      buttonText: 'View Battery',
      link: '/User/CheckLaptop/CheckBattery',
      bgColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
    },
    {
      title: 'Check Compatibility',
      description: 'Check the compatibility of your device with various applications and updates.',
      buttonText: 'Check Compatibility',
      link: '/User/CheckLaptop/CheckCompatibility',
      bgColor: 'bg-gradient-to-r from-purple-400 to-purple-600',
    },
    {
      title: 'Check Storage',
      description: 'Inspect available storage and storage health on your device.',
      buttonText: 'Check Storage',
      link: '/User/CheckLaptop/CheckStorage',
      bgColor: 'bg-gradient-to-r from-indigo-400 to-indigo-600',
    },
    {
      title: 'Check Duplicate Parts',
      description: 'Ensure all parts are compatible and avoid duplicates.',
      buttonText: 'Check Parts',
      link: '/User/CheckLaptop/CheckDuplicateParts',
      bgColor: 'bg-gradient-to-r from-red-400 to-red-600',
    },
    {
      title: 'Check Ports',
      description: 'Verify the functionality of all device ports.',
      buttonText: 'Check Ports',
      link: '/User/CheckLaptop/CheckPorts',
      bgColor: 'bg-gradient-to-r from-teal-400 to-teal-600',
    },
    // Additional cards can be added here
  ];


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



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300`}
          >
            <h2 className="text-xl font-semibold mb-2 text-white">{card.title}</h2>
            <p className="mb-4 text-white">{card.description}</p>
            <Link href={card.link} >
              <button className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded transition duration-200">
                Start Check
              </button>
            </Link>
          </div>
        ))}
      </div>

      <Link href="/User/CheckLaptop/dashboard">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-200">
          View Dashboard
        </button>
      </Link>

      <Link href="/User/CheckLaptop/Checkup">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-200">
         All Dashboard
        </button>
      </Link>
    </div>
  );
};

export default DeviceCheckPage;
