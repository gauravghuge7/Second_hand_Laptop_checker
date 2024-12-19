"use client";

import { useState } from "react";

const CheckPorts = () => {
  const [portsInfo, setPortsInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to request permission and check connected USB devices
  const checkPorts = async () => {
    setLoading(true);
    try {
      // Request for a USB device connection (this will trigger a prompt)
      const device = await navigator.usb.requestDevice({
        filters: []  // You can specify filters to select particular devices
      });


      // await navigator.hardwareConcurrency.toString();

      console.log(navigator.hardwareConcurrency.toString());

      // Log the device to console (for debugging)
      console.log(device);

      // Prepare the information of the connected USB device
      const mockPortsData = [
        {
          port: `USB: ${device.productName}`,
          status: "Working",
          description: `Connected USB device: ${device.productName}, Vendor ID: ${device.vendorId}, Product ID: ${device.productId}`,
        },
      ];

      // Set ports information
      setPortsInfo(mockPortsData);
    } catch (error) {
      console.error("Error checking USB ports:", error);
      setPortsInfo([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-8 animate__animated animate__fadeIn">Check Device Ports</h1>

      {/* Button to check ports */}
      <button
        onClick={checkPorts}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-110"
      >
        {loading ? "Checking Ports..." : "Check Ports"}
      </button>

      {/* Display cards for each port once checked */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {portsInfo.length > 0 && !loading ? (
          portsInfo.map((port, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl mt-4 ${
                port.status === "Not working" ? "border-4 border-red-500" : "border-4 border-green-500"
              }`}
            >
              <h2 className="text-2xl font-semibold text-gray-800">{port.port}</h2>
              <p className="mt-2 text-gray-600">Status: {port.status}</p>
              <p className="mt-2 text-gray-500">{port.description}</p>
            </div>
          ))
        ) : (
          <p className="text-white mt-4">Please click the button to check the ports.</p>
        )}
      </div>
    </div>
  );
};

export default CheckPorts;
