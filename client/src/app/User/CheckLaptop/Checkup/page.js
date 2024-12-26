"use client";

import { useState } from "react";
import Link from "next/link";

const LaptopConfigurations = () => {
   const [configurations, setConfigurations] = useState([
      { 
         name: "Processor (CPU)", 
         route: "/User/CheckLaptop/CheckCPU",
         checked: false 
      },
      { 
         name: "Graphics Card (GPU)", 
         route: "/User/CheckLaptop/CheckGPU",
         checked: false 
      },
      { 
         name: "RAM (Memory)", 
         route: "/ram", 
         checked: false 
      },
      {
         name: "Storage",
         route: "/User/CheckLaptop/CheckStorage",
         checked: false,
      },
      { 
         name: "Display", 
         route: "/display", 
         checked: false 
      },
      { 
         name: "Operating System (OS)", 
         route: "/os", 
         checked: false 
      },
      { 
         name: "Battery Life", 
         route: "/battery", 
         checked: false 
      },
      { 
         name: "Ports and Connectivity", 
         route: "/User/CheckLaptop/CheckPorts", 
         checked: false 
      },
      { 
         name: "Build Quality and Design", 
         route: "/design", 
         checked: false 
      },
      { 
         name: "Additional Features", 
         route: "/features", 
         checked: false 
      },
      { 
         name: "Brand and Warranty", 
         route: "/brand", 
         checked: false 
      },
      { 
         name: "Budget", 
         route: "/budget", 
         checked: false 
      },
   ]);

   const handleCheckboxToggle = (index) => {
      setConfigurations((prev) => {
         const updatedConfigurations = [...prev];
         updatedConfigurations[index].checked = !updatedConfigurations[index].checked;
         return updatedConfigurations;
      });
   };

   return (
      <div className="max-w-xl mx-auto mt-10 p-5 bg-gray-100 rounded-lg shadow-lg">
         <h1 className="text-2xl font-bold mb-5 text-gray-700 text-center">
         Laptop Configurations
         </h1>
         <div className="grid grid-cols-1 gap-4">
         {configurations.map((config, index) => (
            <div
               key={index}
               className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-md transition"
            >
               <Link href={config.route}>
               <div className="text-lg font-medium text-blue-600 hover:underline">
                  {config.name}
               </div>
               </Link>
               <button
               onClick={() => handleCheckboxToggle(index)}
               className="flex items-center justify-center w-6 h-6 border-2 border-blue-600 rounded-full focus:outline-none"
               >
               {config.checked && (
                  <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
               )}
               </button>
            </div>
         ))}
         </div>
      </div>
   );
};

export default LaptopConfigurations;

