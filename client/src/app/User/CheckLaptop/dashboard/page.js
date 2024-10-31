"use client";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const [cpuData, setCpuData] = useState([]);
  const [ramData, setRamData] = useState([]);
  const [diskData, setDiskData] = useState([]);
  const [batteryHealth, setBatteryHealth] = useState(85); // Sample data

  useEffect(() => {
    // Simulate fetching data
    const fetchData = () => {
      // Sample data for CPU, RAM, Disk usage over time
      setCpuData([20, 40, 30, 50, 70, 60, 80]);
      setRamData([25, 45, 35, 55, 75, 65, 85]);
      setDiskData([10, 30, 20, 40, 60, 50, 70]);
    };

    fetchData();
  }, []);

  const chartData = (data, label) => ({
    labels: ['0h', '1h', '2h', '3h', '4h', '5h', '6h'],
    datasets: [
      {
        label: label,
        data: data,
        borderColor: '#3b82f6', // Blue color
        backgroundColor: 'rgba(59, 130, 246, 0.3)', // Light blue background
        fill: true,
        tension: 0.1,
      },
    ],
  });

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Laptop Health Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {/* System Status Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">System Status</h2>
          <p className="text-4xl text-green-500 mb-4">👍 Healthy</p>
          <p className="text-gray-600">Your laptop is running smoothly!</p>
        </div>

        {/* Performance Metrics Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Performance Metrics</h2>
          <Line data={chartData(cpuData, 'CPU Usage')} options={{ responsive: true }} />
        </div>

        {/* RAM Usage Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">RAM Usage</h2>
          <Line data={chartData(ramData, 'RAM Usage')} options={{ responsive: true }} />
        </div>

        {/* Disk Usage Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Disk Usage</h2>
          <Line data={chartData(diskData, 'Disk Usage')} options={{ responsive: true }} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Battery Health Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Battery Health</h2>
          <p className="text-4xl text-yellow-500 mb-4">{batteryHealth}%</p>
          <p className="text-gray-600">Battery condition is good. Charge your laptop to maintain health.</p>
        </div>

        {/* Recent Diagnostics Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Recent Diagnostics</h2>
          <ul className="text-gray-600">
            <li>Diagnostics run on 10/30/2024: All systems functional.</li>
            <li>Diagnostics run on 10/29/2024: Battery health 85%.</li>
            <li>Diagnostics run on 10/28/2024: No issues detected.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
