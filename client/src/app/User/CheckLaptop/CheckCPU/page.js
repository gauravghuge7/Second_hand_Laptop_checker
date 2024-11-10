// pages/systemInfo.js
"use client";
import React, { useEffect, useState } from 'react';

const SystemInfo = () => {
   const [cpuInfo, setCpuInfo] = useState({
      cores: null,
      os: '',
      memory: '',
      brand: '',
   });
   const [isCompatible, setIsCompatible] = useState(false);
   const [loading, setLoading] = useState(true);

   const requiredCores = 4;

   useEffect(() => {
      const getClientCpuInfo = () => {
         if (navigator.hardwareConcurrency) {
         setCpuInfo((prev) => ({
            ...prev,
            cores: navigator.hardwareConcurrency,
         }));
         checkCompatibility(navigator.hardwareConcurrency);
         }

         setCpuInfo((prev) => ({
         ...prev,
         os: navigator.platform,
         memory: `${Math.round(navigator.deviceMemory || 4)} GB`,
         brand: 'Intel', // Placeholder for CPU brand, could be fetched with server-side logic
         }));
      };

      const checkCompatibility = (cores) => {
         if (cores >= requiredCores) {
         setIsCompatible(true);
         }
         setLoading(false);
      };

      getClientCpuInfo();
   }, []);

   return (
      <div className="min-h-screen bg-gray-50 py-10 px-5">

      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
         System Information / सिस्टम जानकारी
      </h2>


      <div className="grid grid-cols-2 gap-8">
         {/* CPU Cores */}
         <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
            <h3 className="text-xl font-medium">CPU Cores / CPU कोर</h3>
            <p className="text-2xl mt-2">
            {loading ? 'Loading...' : cpuInfo.cores}
            </p>
         </div>

         {/* Operating System */}
         <div className="bg-green-500 text-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
            <h3 className="text-xl font-medium">Operating System / ऑपरेटिंग सिस्टम</h3>
            <p className="text-2xl mt-2">
            {loading ? 'Loading...' : cpuInfo.os}
            </p>
         </div>

         {/* Memory */}
         <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
            <h3 className="text-xl font-medium">Memory / मेमोरी</h3>
            <p className="text-2xl mt-2">
            {loading ? 'Loading...' : cpuInfo.memory}
            </p>
         </div>

         {/* CPU Brand */}
         <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
            <h3 className="text-xl font-medium">CPU Brand / CPU ब्रांड</h3>
            <p className="text-2xl mt-2">
            {loading ? 'Loading...' : cpuInfo.brand}
            </p>
         </div>

         {/* Compatibility */}
         <div
            className={`${
            isCompatible ? 'bg-teal-500' : 'bg-red-500'
            } text-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105`}
         >
            <h3 className="text-xl font-medium">Compatibility / संगतता</h3>
            <p className="text-2xl mt-2">
            {isCompatible ? '✔ Compatible / संगत' : '✖ Not Compatible / असंगत'}
            </p>
         </div>
      </div>


         <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">

            <div className="mt-10">
               <h3 className="text-2xl font-semibold text-gray-700 mb-4">
               
                  Things to Check Before Buying a Second-Hand Laptop / पुराना लैपटॉप खरीदते समय ध्यान देने योग्य बातें
               </h3>
               <ul className="text-gray-600 space-y-4">
                  <li>
                  <strong>1. Cores & Threads / कोर और थ्रेड्स:</strong> More cores help with multitasking and performance. For tasks beyond basics, at least 4 cores are recommended.
                  <br />
                  ज्यादा कोर होने से मल्टीटास्किंग और प्रदर्शन में मदद मिलती है। साधारण कार्यों से अधिक के लिए, कम से कम 4 कोर होने चाहिए।
                  </li>
                  <li>
                  <strong>2. Clock Speed / क्लॉक स्पीड:</strong> Clock speed, measured in GHz, affects processing speed. Aim for around 2.5 GHz or higher.
                  <br />
                  क्लॉक स्पीड (GHz में मापी गई) प्रोसेसिंग गति को प्रभावित करती है। लगभग 2.5 GHz या अधिक की स्पीड पर्याप्त होती है।
                  </li>
                  <li>
                  <strong>3. CPU Architecture / CPU आर्किटेक्चर:</strong> Modern architectures like Intel i-series and AMD Ryzen are more efficient. Older ones may be slower and use more power.
                  <br />
                  आधुनिक आर्किटेक्चर (Intel i-सीरीज़, AMD Ryzen) अधिक कुशल होते हैं। पुराने आर्किटेक्चर धीमे हो सकते हैं और ज्यादा ऊर्जा खर्च करते हैं।
                  </li>
                  <li>
                  <strong>4. Physical Condition / शारीरिक स्थिति:</strong> Check the physical state of the CPU and motherboard for overheating or damage.
                  <br />
                  CPU और मदरबोर्ड की स्थिति (अत्यधिक गर्मी या क्षति) की जांच करें।
                  </li>
                  <li>
                  <strong>5. Compatibility / संगतता:</strong> Make sure the CPU meets the requirements for your applications or OS.
                  <br />
                  सुनिश्चित करें कि CPU आपके ऐप्स या ऑपरेटिंग सिस्टम के लिए आवश्यकताओं को पूरा करता है।
                  </li>
                  <li>
                  <strong>6. Battery and Performance / बैटरी और प्रदर्शन:</strong> Battery life is crucial for portable use. Ensure it holds a good charge if you need it on-the-go.
                  <br />
                  बैटरी का अच्छा प्रदर्शन महत्वपूर्ण है। यदि आपको लैपटॉप का पोर्टेबल उपयोग करना है, तो बैटरी की लाइफ पर्याप्त होनी चाहिए।
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default SystemInfo;
