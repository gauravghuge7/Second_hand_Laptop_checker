// pages/about.js
export default function About() {
   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-600 p-6">
         <div className="max-w-4xl w-full">
            <h1 className="text-3xl font-bold text-center mb-8 text-white">
            About Us
            </h1>
   
            {/* Our Story Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6 transition-transform transform hover:scale-105 duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-green-500">Our Story</h2>
            <p className="text-lg text-gray-700 mb-4">
               Our journey began in 2022, when a group of passionate individuals came together with a common vision: to create a platform that connects, inspires, and informs. Each member of our team brings a unique background and perspective, allowing us to approach challenges creatively and collaboratively.
            </p>
            <p className="text-lg text-gray-700 mb-4">
               It all started as a small blog where we shared our thoughts on technology, lifestyle, and wellness. As our community grew, we realized the potential to expand our offerings. With the support of our dedicated readers, we transformed our blog into a vibrant hub where people can access resources, engage in meaningful conversations, and discover new ideas.
            </p>
            </div>
   
            {/* Our Mission Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6 transition-transform transform hover:scale-105 duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
               Our mission is simple: to empower individuals through knowledge and community. We believe that everyone has the potential to make a difference, and we strive to provide the tools and support necessary to help you on your journey.
            </p>
            </div>
   
            {/* Join Us Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6 transition-transform transform hover:scale-105 duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-purple-500">Join Us!</h2>
            <p className="text-lg text-gray-700 mb-4">
               We invite you to explore our website, engage with our content, and connect with our community. Your feedback is invaluable, and we would love to hear from you! Together, let&#39;s make the world a better place, one idea at a time.
            </p>
            </div>
         </div>
      </div>
   );
}
