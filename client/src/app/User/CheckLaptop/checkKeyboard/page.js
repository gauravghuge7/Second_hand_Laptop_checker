// Import necessary dependencies
import Link from 'next/link';
import { AiOutlineCalculator, AiOutlineLaptop } from 'react-icons/ai';

export default function LaptopComparison() {

   

   
   
   return (
      <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gray-100 p-6 gap-8">
         {/* Card for Laptop with Numeric Keypad */}
         <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm flex flex-col items-center">

            <AiOutlineCalculator size={50} className="text-blue-600" />

            <h2 className="text-2xl font-semibold mt-4">With Numeric Keypad</h2>
            <p className="text-gray-600 mt-2 text-center">
               This laptop model includes a numeric keypad, ideal for data entry and quick calculations.
            </p>
            <Link 
               href="/User/CheckLaptop/checkKeyboard/withNumpad"
               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
               Learn More
            </Link>
         </div>

         {/* Card for Laptop without Numeric Keypad */}
         <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm flex flex-col items-center">
            <AiOutlineLaptop size={50} className="text-green-600" />
            <h2 className="text-2xl font-semibold mt-4">Without Numeric Keypad</h2>
            <p className="text-gray-600 mt-2 text-center">
               This compact laptop model is designed without a numeric keypad, making it more portable.
            </p>
            <Link
               className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
               href="/User/CheckLaptop/checkKeyboard/withoutNumpad"
            >
               Learn More
            </Link>
         </div>
      </div>
   );
}
