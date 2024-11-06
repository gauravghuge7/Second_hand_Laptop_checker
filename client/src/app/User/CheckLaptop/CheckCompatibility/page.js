"use client";

import { useEffect, useState } from 'react';

export default function SystemInfo() {
  const [systemInfo, setSystemInfo] = useState({
    userAgent: '',
    platform: '',
    language: '',
    onlineStatus: '',
    hardwareConcurrency: null,
  });

  useEffect(() => {
    const ua = navigator.userAgent || 'Unknown';
    const platform = navigator.platform || 'Unknown';
    const language = navigator.language || 'Unknown';
    const onlineStatus = navigator.onLine ? 'Online' : 'Offline';
    const hardwareConcurrency = navigator.hardwareConcurrency || 1; // Fallback to 1 if not supported

    setSystemInfo({
      userAgent: ua,
      platform: platform,
      language: language,
      onlineStatus: onlineStatus,
      hardwareConcurrency: hardwareConcurrency,
    });
  }, []);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">System Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <p className="text-lg font-medium text-gray-500">User Agent</p>
          <p className="text-md font-semibold text-gray-800">{systemInfo.userAgent}</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <p className="text-lg font-medium text-gray-500">Platform</p>
          <p className="text-md font-semibold text-gray-800">{systemInfo.platform}</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <p className="text-lg font-medium text-gray-500">Language</p>
          <p className="text-md font-semibold text-gray-800">{systemInfo.language}</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <p className="text-lg font-medium text-gray-500">Online Status</p>
          <p className="text-md font-semibold text-gray-800">{systemInfo.onlineStatus}</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <p className="text-lg font-medium text-gray-500">CPU Cores</p>
          <p className="text-md font-semibold text-gray-800">{systemInfo.hardwareConcurrency}</p>
        </div>
      </div>


      <PermissionExample />
    </div>
  );
}



function PermissionExample() {
  const [location, setLocation] = useState(null);
  const [permissionStatus, setPermissionStatus] = useState(null);

  useEffect(() => {
    // Check for geolocation permission
    const checkPermission = async () => {
      try {
        const status = await navigator.permissions.query({ name: 'geolocation' });
        setPermissionStatus(status.state);

        if (status.state === 'granted') {
          getLocation();
        }
        
        // Listen for changes in permission status
        status.onchange = () => {
          setPermissionStatus(status.state);
          if (status.state === 'granted') {
            getLocation();
          }
        };
      } catch (error) {
        console.error('Error checking permissions:', error);
      }
    };

    checkPermission();
  }, []);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Geolocation Permission Example</h2>

      <div className="bg-white shadow-lg rounded-lg p-4 text-center">
        <p className="text-lg font-medium text-gray-500">Permission Status:</p>
        <p className="text-md font-semibold text-gray-800">{permissionStatus || 'Checking...'}</p>
      </div>

      {location && (
        <div className="bg-white shadow-lg rounded-lg p-4 text-center mt-4">
          <p className="text-lg font-medium text-gray-500">Your Location:</p>
          <p className="text-md font-semibold text-gray-800">Latitude: {location.latitude}</p>
          <p className="text-md font-semibold text-gray-800">Longitude: {location.longitude}</p>
        </div>
      )}
    </div>
  );
}
