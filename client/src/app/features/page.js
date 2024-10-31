// components/Features.js
const featuresData = [
   {
     title: "Comprehensive Diagnostics",
     description: "Run a full diagnostic check to assess your laptop's performance, battery health, and hardware status.",
     icon: "🔍", // You can replace this with an actual icon component
   },
   {
     title: "User-Friendly Interface",
     description: "Enjoy an intuitive and easy-to-navigate interface that simplifies the checking process.",
     icon: "🖥️",
   },
   {
     title: "Real-Time Monitoring",
     description: "Monitor system performance in real-time with detailed analytics and metrics.",
     icon: "📈",
   },
   {
     title: "Custom Recommendations",
     description: "Receive tailored recommendations based on your laptop's health and performance results.",
     icon: "💡",
   },
   {
     title: "Secure Data Handling",
     description: "Your data privacy is our priority; we ensure secure handling of all diagnostics.",
     icon: "🔒",
   },
   {
     title: "24/7 Support",
     description: "Get help anytime with our round-the-clock customer support for all your technical queries.",
     icon: "📞",
   },
 ];
 
 export default function Features() {
   return (
     <div className="bg-gray-100 py-16">
       <div className="max-w-7xl mx-auto px-4">
         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Features</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {featuresData.map((feature, index) => (
             <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 duration-300">
               <div className="text-4xl mb-4 text-blue-500 text-center">
                 {feature.icon}
               </div>
               <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{feature.title}</h3>
               <p className="text-gray-600 text-center">{feature.description}</p>
             </div>
           ))}
         </div>
       </div>
     </div>
   );
 }
 