"use client";

import Link from "next/link";

const AnimatedCards = () => {
  const cards = [
    {
      title: "Check Duplicate Parts",
      description: "Verify if any parts in the configuration are duplicates or incompatible.",
      path: "/User/CheckLaptop/CheckDuplicateParts",
    },
    {
      title: "External Company Display",
      description: "Ensure that external displays are compatible with the selected system.",
      path: "/User/CheckLaptop/CheckDuplicateParts/ChangedDisplay",
    },
    {
      title: "Check Keyboard",
      description: "Verify if the selected keyboard is compatible with the system configuration.",
      path: "/path3",
    },
    {
      title: "Check Drivers",
      description: "Check if the necessary drivers are installed and up-to-date for your system.",
      path: "/path4",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-8 animate__animated animate__fadeIn">
        System Compatibility Checker
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {cards.map((card, index) => (
          <Link
            key={index}
            href={card.path}
            className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer hover:shadow-xl hover:bg-blue-100"
          >
            <h2 className="text-2xl font-semibold text-gray-800">{card.title}</h2>
            <p className="mt-2 text-gray-600">{card.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCards;
