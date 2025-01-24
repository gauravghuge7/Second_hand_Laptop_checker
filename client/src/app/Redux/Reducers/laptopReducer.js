"use client"; // Ensure this is at the top


import { createSlice } from "@reduxjs/toolkit";



const initialState = {


   computerData :{


      hardware: {

         CPU: {
            name: "Processor (CPU)",
            description: "The brain of the computer, responsible for processing instructions.",
            route: "/User/CheckLaptop/CheckCPU",
            checked: false,
            details: {
               brand: null, // e.g., "Intel" or "AMD"
               model: null, // e.g., "Intel Core i7-12700H"
               cores: null, // e.g., 8 cores
               threads: null, // e.g., 16 threads
               baseClock: null, // e.g., "2.3 GHz"
               turboClock: null, // e.g., "4.5 GHz"
               cache: null, // e.g., "12 MB L3"
            },
         },


         GPU: {
            name: "Graphics Card (GPU)",
            description: "Responsible for rendering images, video, and 3D graphics.",
            route: "/User/CheckLaptop/CheckGPU",
            checked: false,
            details: {
               brand: null, // e.g., "NVIDIA" or "AMD"
               model: null, // e.g., "NVIDIA RTX 3060"
               memory: null, // e.g., "6GB GDDR6"
               coreClock: null, // e.g., "1500 MHz"
               boostClock: null, // e.g., "1800 MHz"
               TDP: null, // e.g., "130W"
            },
         },

         RAM: {
            name: "RAM (Memory)",
            description: "Temporary memory used by the computer to store active processes and data.",
            route: "/ram",
            checked: false,
            details: {
               size: null, // e.g., "16GB"
               type: null, // e.g., "DDR4"
               speed: null, // e.g., "3200 MHz"
               formFactor: null, // e.g., "SO-DIMM"
               channels: null, // e.g., "Dual-channel"
            },
         },

         Storage: {
            name: "Storage",
            description: "Stores operating system, software, and data.",
            route: "/User/CheckLaptop/CheckStorage",
            checked: false,
            details: {
               type: null, // e.g., "SSD" or "HDD"
               capacity: null, // e.g., "512GB"
               interface: null, // e.g., "NVMe PCIe 3.0"
               readSpeed: null, // e.g., "3500 MB/s"
               writeSpeed: null, // e.g., "3000 MB/s"
            },
         },

         Display: {
            name: "Display",
            description: "The screen used to display visuals and user interface.",
            route: "/display",
            checked: false,
            details: {
               size: null, // e.g., "15.6 inches"
               resolution: null, // e.g., "1920x1080"
               type: null, // e.g., "IPS"
               refreshRate: null, // e.g., "144 Hz"
               brightness: null, // e.g., "300 nits"
               colorGamut: null, // e.g., "100% sRGB"
            },
         },

         Battery: {
            name: "Battery",
            description: "Provides power to the laptop when not plugged in.",
            route: "/battery",
            checked: false,
            details: {
               brand: null, // e.g., "Samsung"
               capacity_mAh: null, // e.g., "5000 mAh"
               cells: null, // e.g., "4 cells"
               type: null, // e.g., "Lithium-ion"
               runtime: null, // e.g., "6 hours"
               chargingSpeed: null, // e.g., "65W Fast Charging"
               removable: null, // e.g., true/false
               healthPercentage: null, // e.g., "90%"
            },
         },

         Ports: {
            name: "Ports and Connectivity",
            description: "Interfaces for connecting peripherals and devices.",
            route: "/User/CheckLaptop/CheckPorts",
            checked: false,
            details: {
               ports: null, // e.g., "2x USB-C, 1x HDMI, 1x Ethernet"
               wireless: null, // e.g., "Wi-Fi 6, Bluetooth 5.2"
            },
         },

         keyboard: {
            name: "Keyboard",
            description: "The physical keyboard that users type on.",
            route: "/keyboard",
            checked: false,
            details: {
               type: null, // e.g., "Backlit, RGB"
            },
         },

         speakers: {
            name: "Speakers",
            description: "The speakers used to produce sound.",
            route: "/speakers",
            checked: false,
            details: {
               type: null, // e.g., "Dolby Atmos"
            },
         },

         webcam: {
            name: "Webcam",
            description: "The webcam used to capture video.",
            route: "/webcam",
            checked: false,
            details: {
               type: null, // e.g., "1080p"
            },
         },

         fingerprintReader: {
            name: "Fingerprint Reader",
            description: "The fingerprint reader used to authenticate users.",
            route: "/fingerprintReader",
            checked: false,
            details: {
               type: null, // e.g., "Fingerprint sensor"
            }, 
         },


         Cooling: {
            name: "Cooling System",
            description: "Keeps the computer's components cool during operation.",
            route: "/cooling",
            checked: false,
            details: {
               type: null, // e.g., "Air cooling"
               fanCount: null, // e.g., "2 fans"
               heatPipes: null, // e.g., "3 heat pipes"
               noiseLevel: null, // e.g., "30 dB"
            },
         },

         Design: {
            name: "Build Quality and Design",
            description: "The physical appearance and build materials of the laptop.",
            route: "/design",
            checked: false,
            details: {
               material: null, // e.g., "Aluminum"
               weight: null, // e.g., "1.5 kg"
               thickness: null, // e.g., "17 mm"
               color: null, // e.g., "Space Grey"
            },
         },

         Features: {
            name: "Additional Features",
            description: "Additional features and enhancements.",
            route: "/features",
            checked: false,
            details: {
               keyboard: null, // e.g., "Backlit, RGB"
               speakers: null, // e.g., "Dolby Atmos"
               webcam: null, // e.g., "1080p"
               fingerprintReader: null, // e.g., true/false
            },
         },

         Brand: {
            name: "Brand and Warranty",
            description: "Manufacturer information and warranty details.",
            route: "/brand",
            checked: false,
            details: {
               brand: null, // e.g., "Dell"
               warranty: null, // e.g., "2 years"
               support: null, // e.g., "24/7 customer support"
            },
         },

      },

      software: {
         OperatingSystem: {
            name: "Operating System (OS)",
            description: "The software that manages hardware resources and provides a user interface.",
            route: "/os",
            checked: false,
            details: {
               name: null, // e.g., "Windows 10"
               version: null, // e.g., "10.0.22000"
               edition: null, // e.g., "Home"
            },
         },
         Browser: {
            name: "Web Browser",
            description: "The software that allows users to access the internet.",
            route: "/browser",
            checked: false,
            details: {
               name: null, // e.g., "Google Chrome"
               version: null, // e.g., "114.0.5735.199"
            },
         },
         System: {
            brandName: null, // e.g., "Dell"
            modelName: null, // e.g., "XPS 15 9560"
         }
      },

   },

   laptopTest: [
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
   ]
   
}



const laptopSlice = createSlice({
   name: "laptop",
   initialState,
   reducers: {

      setCPU : (state, action) => {
         state.computerData.hardware.CPU = action.payload;
      },

      setGPU : (state, action) => {
         state.computerData.hardware.GPU = action.payload;
      },
      setRAM : (state, action) => {
         state.computerData.hardware.RAM = action.payload;
      },
      setStorage : (state, action) => {
         state.computerData.hardware.Storage = action.payload;
      },
      setDisplay : (state, action) => {
         state.computerData.hardware.Display = action.payload;
      },
      setBattery : (state, action) => {
         state.computerData.hardware.Battery = action.payload;
      },
      setPorts : (state, action) => {
         state.computerData.hardware.Ports = action.payload;
      },
      setCooling : (state, action) => {
         state.computerData.hardware.Cooling = action.payload;
      },
      setDesign : (state, action) => {
         state.computerData.hardware.Design = action.payload;
      },
      setFeatures : (state, action) => {
         state.computerData.hardware.Features = action.payload;
      },
      setBrand : (state, action) => {
         state.computerData.hardware.Brand = action.payload;
      },

      setOS : (state, action) => {
         state.computerData.software.OperatingSystem = action.payload;
      },
      setBrowser : (state, action) => {
         state.computerData.software.Browser = action.payload;
      },
      setSystem : (state, action) => {
         state.computerData.software.System = action.payload;
      }, 
      

   }
})


export const { setBattery, setCPU, setCooling, setDisplay, setGPU, setRAM, setStorage, setOS, setBrowser, setSystem, setDesign, setFeatures, setBrand, setPorts } = laptopSlice.actions;

export default laptopSlice.reducer;