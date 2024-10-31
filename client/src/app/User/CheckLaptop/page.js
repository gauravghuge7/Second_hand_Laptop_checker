"use client";
import React from 'react';
import Link from 'next/link';

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
      link: '/User/CheckCPU',
      bgColor: 'bg-gradient-to-r from-blue-400 to-blue-600',
    },
    {
      title: 'Check Battery Status',
      description: 'View the current battery status and health of your device.',
      buttonText: 'View Battery',
      link: '/User/CheckBattery',
      bgColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
    },
    {
      title: 'Check Compatibility',
      description: 'Check the compatibility of your device with various applications and updates.',
      buttonText: 'Check Compatibility',
      link: '/User/CheckCompatibility',
      bgColor: 'bg-gradient-to-r from-purple-400 to-purple-600',
    },
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Device Check</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300`}
          >
            <h2 className="text-xl font-semibold mb-2 text-white">{card.title}</h2>
            <p className="mb-4 text-white">{card.description}</p>
            <Link
              href={card.link}
              className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded transition duration-200"
            >
              {card.buttonText}
            </Link>
          </div>
        ))}
      </div>

      <Link href="/User/CheckLaptop/dashboard">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-200">
          View Dashboard
        </button>
      </Link>
    </div>
  );
};

export default DeviceCheckPage;
