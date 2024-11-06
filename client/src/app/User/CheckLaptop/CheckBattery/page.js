"use client";

import { useEffect, useState } from 'react';

export default function BatteryStatus() {
  const [batteryInfo, setBatteryInfo] = useState({
    level: null,
    charging: null,
    chargingTime: null,
    dischargingTime: null,
  });

  useEffect(() => {
    // Only run on the client side
    if (typeof navigator !== 'undefined' && 'getBattery' in navigator) {
      navigator.getBattery().then((battery) => {
        setBatteryInfo({
          level: battery.level * 100,
          charging: battery.charging,
          chargingTime: battery.chargingTime,
          dischargingTime: battery.dischargingTime,
        });

        // Event listeners for battery status updates
        battery.addEventListener('levelchange', () => {
          setBatteryInfo((prev) => ({ ...prev, level: battery.level * 100 }));
        });
        battery.addEventListener('chargingchange', () => {
          setBatteryInfo((prev) => ({ ...prev, charging: battery.charging }));
        });
        battery.addEventListener('chargingtimechange', () => {
          setBatteryInfo((prev) => ({ ...prev, chargingTime: battery.chargingTime }));
        });
        battery.addEventListener('dischargingtimechange', () => {
          setBatteryInfo((prev) => ({ ...prev, dischargingTime: battery.dischargingTime }));
        });
      });
    } else {
      console.warn('Battery Status API is not supported on this device.');
    }
  }, []);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Battery Status</h2>
      
      {batteryInfo.level !== null ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-md">
          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <p className="text-lg font-medium text-gray-500">Battery Level</p>
            <p className="text-3xl font-bold text-gray-800">{batteryInfo.level}%</p>
          </div>

          <div className={`bg-white shadow-lg rounded-lg p-4 text-center ${batteryInfo.charging ? 'border-green-500' : 'border-red-500'} border-l-4`}>
            <p className="text-lg font-medium text-gray-500">Charging</p>
            <p className={`text-3xl font-bold ${batteryInfo.charging ? 'text-green-500' : 'text-red-500'}`}>
              {batteryInfo.charging ? 'Yes' : 'No'}
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <p className="text-lg font-medium text-gray-500">Charging Time</p>
            <p className="text-2xl font-bold text-gray-800">
              {batteryInfo.chargingTime === Infinity ? 'N/A' : `${batteryInfo.chargingTime} sec`}
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <p className="text-lg font-medium text-gray-500">Discharging Time</p>
            <p className="text-2xl font-bold text-gray-800">
              {batteryInfo.dischargingTime === Infinity ? 'N/A' : `${batteryInfo.dischargingTime} sec`}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Battery information is not available on this device.</p>
      )}
    </div>
  );
}
