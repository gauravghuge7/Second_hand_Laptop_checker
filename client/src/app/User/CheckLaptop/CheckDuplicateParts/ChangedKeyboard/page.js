"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Home = () => {
  const [parts, setParts] = useState({ keyboard: '', display: '' });
  const [error, setError] = useState('');
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // Check compatibility whenever the parts change
    if (checked) {
      checkCompatibility(parts);
    }
  }, [parts, checked]);

  // Function to check compatibility
  const checkCompatibility = (parts) => {
    // Reset error before checking
    setError('');

    // Example compatibility check
    if (
      (parts.keyboard === 'Mechanical' && parts.display === 'Touch') ||
      (parts.keyboard === 'Membrane' && parts.display === '4K')
    ) {
      setError('Incompatible parts detected: Selected keyboard and display are not compatible.');
    } else {
      setError('The selected parts are compatible.');
    }
  };

  // Handlers for part selections
  const handleKeyboardChange = (e) => {
    setParts((prevParts) => ({ ...prevParts, keyboard: e.target.value }));
  };

  const handleDisplayChange = (e) => {
    setParts((prevParts) => ({ ...prevParts, display: e.target.value }));
  };

  // Button click handler
  const handleCheckParts = () => {
    setChecked(true); // Trigger the compatibility check
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mb-8 animate__animated animate__fadeIn">Laptop Configuration</h1>

      {/* Form Container */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full animate__animated animate__fadeIn">
        {/* Keyboard Selection */}
        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium text-gray-700">Select Keyboard</label>
          <select
            className="p-3 border rounded-lg w-full transition-transform transform hover:scale-105 focus:ring-2 focus:ring-blue-400"
            value={parts.keyboard}
            onChange={handleKeyboardChange}
          >
            <option value="">Select Keyboard</option>
            <option value="Mechanical">Mechanical Keyboard</option>
            <option value="Membrane">Membrane Keyboard</option>
          </select>
        </div>

        {/* Display Selection */}
        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium text-gray-700">Select Display</label>
          <select
            className="p-3 border rounded-lg w-full transition-transform transform hover:scale-105 focus:ring-2 focus:ring-blue-400"
            value={parts.display}
            onChange={handleDisplayChange}
          >
            <option value="">Select Display</option>
            <option value="HD">HD Display</option>
            <option value="Touch">Touch Display</option>
            <option value="4K">4K Display</option>
          </select>
        </div>

        {/* Compatibility Checker */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Laptop Parts Compatibility Checker</h2>
          
          {/* Show error message if there is any compatibility issue */}
          {error && (
            <div className="mt-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 shadow-xl animate__animated animate__shakeX">
              <p>{error}</p>
            </div>
          )}

          {/* Display list of selected parts */}
          <div className="mt-4 space-y-2">
            <h3 className="text-lg font-medium text-gray-700">Selected Parts:</h3>
            <ul className="list-disc list-inside">
              <li>Keyboard: {parts.keyboard || 'Not selected'}</li>
              <li>Display: {parts.display || 'Not selected'}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Check Parts Button */}
      <div className="mt-8 animate__animated animate__zoomIn">
        <button
          onClick={handleCheckParts}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-110"
        >
          Check Parts Compatibility
        </button>
      </div>

      {/* View Dashboard Button */}
      <div className="mt-8 animate__animated animate__zoomIn">
        <Link href="/User/CheckLaptop/dashboard">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-110">
            View Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
