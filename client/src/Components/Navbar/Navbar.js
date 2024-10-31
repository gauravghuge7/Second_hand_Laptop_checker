"use client";

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
   const [sidebarOpen, setSidebarOpen] = useState(false);
   const [pathSegments, setPathSegments] = useState([]);
   const pathname = usePathname(); // Use usePathname to track the current route
   
   const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
   };

   // Update path segments on route change
   useEffect(() => {
      const segments = pathname.split('/').filter(Boolean); // Filter out empty segments
      setPathSegments(segments);
   }, [pathname]); // Update pathSegments whenever pathname changes

   return (
      <div>
         {/* Navbar */}
         <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
            <button onClick={toggleSidebar} className="text-white">
               <AiOutlineMenu size={28} />
            </button>

            <h1 className="text-xl font-bold">Laptop Check</h1>

            {/* Display Current Path with Clickable Segments */}
            <div className="hidden lg:flex items-center space-x-2">
               <span className="text-gray-300">Current Path:</span>
               {pathSegments.length > 0 ? (
                  pathSegments.map((segment, index) => {
                     const path = '/' + pathSegments.slice(0, index + 1).join('/');
                     return (
                        <span key={index} className="flex items-center space-x-1">
                           <span className="text-gray-300">/</span>
                           <Link href={path} className="text-gray-200 hover:text-white">
                              {segment}
                           </Link>
                        </span>
                     );
                  })
               ) : (
                  <span className="text-gray-300">Home</span>
               )}
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex space-x-6">
               <Link href="/"><button className="hover:text-gray-300">Home</button></Link>
               <Link href="/features"><button className="hover:text-gray-300">Features</button></Link>
               <Link href="/contact"><button className="hover:text-gray-300">Contact</button></Link>
            </div>
         </nav>

         {/* Sidebar Overlay */}
         {sidebarOpen && (
            <div
               className="fixed inset-0 z-40"
               onClick={toggleSidebar}
            />
         )}

         {/* Sidebar */}
         <div
            className={`fixed top-0 left-0 w-64 h-full bg-gray-900 text-white z-50 transform ${
               sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out`}
         >
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
               <h2 className="text-xl font-semibold">Laptop Check</h2>
               <button onClick={toggleSidebar} className="text-gray-300">
                  <AiOutlineClose size={24} />
               </button>
            </div>
            <nav className="flex flex-col p-4 space-y-4">
               <Link href="/"><button className="text-gray-300 hover:text-white">Home</button></Link>
               <Link href="/features"><button className="text-gray-300 hover:text-white">Features</button></Link>
               <Link href="/contact"><button className="text-gray-300 hover:text-white">Contact</button></Link>
            </nav>
         </div>
      </div>
   );
}
