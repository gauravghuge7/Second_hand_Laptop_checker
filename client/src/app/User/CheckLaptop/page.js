"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

const LaptopConfigurations = () => {
  // Get configurations from Redux state
  const data = useSelector((state) => state.laptopReducer.laptopTest);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-8 text-gray-700 text-center">
        Laptop Configurations
      </h1>
      <div className="space-y-6">
        {data.map((config, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-6 bg-white rounded-lg shadow hover:shadow-md transition border border-gray-200"
          >
            {/* Card Header with Test Name */}
            <div className="mb-4">
              <h2 className="text-xl font-medium text-blue-600">
                {config.name}
              </h2>
            </div>

            <section>
               {
                  config.checked ? 
                  <h2 className="text-green-500 font-bold">Test Passed</h2> : 
                  <h2 className="text-red-500 font-bold">Not Check Yet</h2>
               }
            </section>
            

            {/* Card Footer with Start Test Button */}
            <div className="text-right">
              <Link href={config.route}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition">
                  Start Test
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaptopConfigurations;
