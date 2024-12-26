import { useState } from 'react';

const DisplayTest = () => {
   const [bgColor, setBgColor] = useState('white');

   const colors = ['white', 'black', 'red', 'green', 'blue'];

   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
         <h1 className="text-3xl font-bold mb-4">Display Test</h1>
         <div className="flex space-x-4 mb-8">
         {colors.map((color) => (
            <button
               key={color}
               onClick={() => setBgColor(color)}
               className={`p-4 rounded-full shadow-md ${
               color === bgColor ? 'ring-4 ring-blue-400' : ''
               }`}
               style={{ backgroundColor: color }}
            />
         ))}
         </div>
         <div
         className="w-full h-full"
         style={{ backgroundColor: bgColor, transition: 'background-color 0.5s' }}
         />
      </div>
   );
};

export default DisplayTest;
