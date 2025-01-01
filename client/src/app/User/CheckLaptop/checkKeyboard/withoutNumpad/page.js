"use client";
import { useState, useEffect } from "react";

const KeyboardLayout = () => {
  const keys = [
    [
      { keyName: "Esc", keyStyle: "w-[60px] bg-red-400" },
      { keyName: "F1", keyStyle: "w-[60px] bg-blue-300" },
      { keyName: "F2", keyStyle: "w-[60px] bg-blue-300" },
      { keyName: "F3", keyStyle: "w-[60px] bg-blue-300" },
      { keyName: "F4", keyStyle: "w-[60px] bg-blue-300" },
      { keyName: "F5", keyStyle: "w-[60px] bg-blue-300" },
      { keyName: "F6", keyStyle: "w-[60px] bg-blue-300" },
      { keyName: "F7", keyStyle: "w-[60px] bg-blue-300" },
      { keyName: "F8", keyStyle: "w-[60px] bg-blue-300" },
      { keyName: "F9", keyStyle: "w-[60px] bg-blue-300" },
      { keyName: "F10", keyStyle: "w-[60px] bg-blue-300" },
      { keyName: "F11", keyStyle: "w-[60px] bg-blue-300" },
      { keyName: "F12", keyStyle: "w-[60px] bg-blue-300" },
    ],
    [
      { keyName: "`", keyStyle: "w-[60px] bg-gray-300" },
      { keyName: "1", keyStyle: "w-[50px] bg-gray-200" },
      { keyName: "2", keyStyle: "w-[50px] bg-gray-200" },
      { keyName: "3", keyStyle: "w-[50px] bg-gray-200" },
      { keyName: "4", keyStyle: "w-[50px] bg-gray-200" },
      { keyName: "5", keyStyle: "w-[50px] bg-gray-200" },
      { keyName: "6", keyStyle: "w-[50px] bg-gray-200" },
      { keyName: "7", keyStyle: "w-[50px] bg-gray-200" },
      { keyName: "8", keyStyle: "w-[50px] bg-gray-200" },
      { keyName: "9", keyStyle: "w-[50px] bg-gray-200" },
      { keyName: "0", keyStyle: "w-[50px] bg-gray-200" },
      { keyName: "-", keyStyle: "w-[50px] bg-gray-200" },
      { keyName: "=", keyStyle: "w-[50px] bg-gray-200" },
      { keyName: "Backspace", keyStyle: "w-[120px] bg-orange-300" },
    ],
    [
      { keyName: "Tab", keyStyle: "w-[120px] bg-green-300" },
      { keyName: "Q", keyStyle: "w-[50px] bg-blue-100" },
      { keyName: "W", keyStyle: "w-[50px] bg-blue-100" },
      { keyName: "E", keyStyle: "w-[50px] bg-blue-100" },
      { keyName: "R", keyStyle: "w-[50px] bg-blue-100" },
      { keyName: "T", keyStyle: "w-[50px] bg-blue-100" },
      { keyName: "Y", keyStyle: "w-[50px] bg-blue-100" },
      { keyName: "U", keyStyle: "w-[50px] bg-blue-100" },
      { keyName: "I", keyStyle: "w-[50px] bg-blue-100" },
      { keyName: "O", keyStyle: "w-[50px] bg-blue-100" },
      { keyName: "P", keyStyle: "w-[50px] bg-blue-100" },
      { keyName: "[", keyStyle: "w-[50px] bg-gray-300" },
      { keyName: "]", keyStyle: "w-[50px] bg-gray-300" },
      { keyName: "\\", keyStyle: "w-[60px] bg-red-300" },
    ],
    [
      { keyName: "Caps", keyStyle: "w-[140px] bg-yellow-300" },
      { keyName: "A", keyStyle: "w-[50px] bg-blue-100" },
      { keyName: "S", keyStyle: "w-[50px] bg-blue-100" },
      { keyName: "D", keyStyle: "w-[50px] bg-blue-100" },
      { keyName: "F", keyStyle: "w-[50px] bg-blue-100" },
      { keyName: "G", keyStyle: "w-[50px] bg-blue-100" },
      { keyName: "H", keyStyle: "w-[50px] bg-blue-100" },
      { keyName: "J", keyStyle: "w-[50px] bg-blue-100" },
      { keyName: "K", keyStyle: "w-[50px] bg-blue-100" },
      { keyName: "L", keyStyle: "w-[50px] bg-blue-100" },
      { keyName: ";", keyStyle: "w-[50px] bg-gray-300" },
      { keyName: "'", keyStyle: "w-[50px] bg-gray-300" },
      { keyName: "Enter", keyStyle: "w-[100px] bg-orange-300" },
    ],
    [
      { keyName: "Shift", keyStyle: "w-[140px] bg-purple-300" },
      { keyName: "Z", keyStyle: "w-[50px] bg-green-100" },
      { keyName: "X", keyStyle: "w-[50px] bg-green-100" },
      { keyName: "C", keyStyle: "w-[50px] bg-green-100" },
      { keyName: "V", keyStyle: "w-[50px] bg-green-100" },
      { keyName: "B", keyStyle: "w-[50px] bg-green-100" },
      { keyName: "N", keyStyle: "w-[50px] bg-green-100" },
      { keyName: "M", keyStyle: "w-[50px] bg-green-100" },
      { keyName: ",", keyStyle: "w-[50px] bg-gray-300" },
      { keyName: ".", keyStyle: "w-[50px] bg-gray-300" },
      { keyName: "/", keyStyle: "w-[50px] bg-gray-300" },
      { keyName: "Shift", keyStyle: "w-[150px] bg-purple-300" },
    ],
    [
      { keyName: "Ctrl", keyStyle: "w-[70px] bg-gray-400" },
      { keyName: "Win", keyStyle: "w-[50px] bg-gray-400" },
      { keyName: "Alt", keyStyle: "w-[60px] bg-gray-400" },
      { keyName: "Space", keyStyle: "w-[400px] bg-gray-500" }, // Spacebar with a wide width
      { keyName: "Alt", keyStyle: "w-[60px] bg-gray-400" },
      { keyName: "Win", keyStyle: "w-[50px] bg-gray-400" },
      { keyName: "Menu", keyStyle: "w-[50px] bg-gray-400" },
      { keyName: "Ctrl", keyStyle: "w-[70px] bg-gray-400" },
    ],
  ];


  

  const [keyStates, setKeyStates] = useState({});
  const [testStarted, setTestStarted] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleStartTest = () => {
    // Reset key states before starting the test
    setKeyStates({});
    setTestStarted(true);
    setTimer(setTimeout(handleTimer, 1000));
  };



  useEffect(() => {
    const handlePhysicalKeyPress = (event) => {
      const key = event.key.length === 1 ? event.key.toUpperCase() : event.key;
      if (testStarted && keys.flat().some((k) => k.keyName === key)) {
        // Mark the key as pressed on physical key press
        setKeyStates((prevState) => ({
          ...prevState,
          [key]: true,
        }));
      }
    };

    // Adding event listener for keydown
    window.addEventListener("keydown", handlePhysicalKeyPress);

    return () => {
      // Clean up event listener
      window.removeEventListener("keydown", handlePhysicalKeyPress);
    };
  }, [testStarted]);

  return (
    <div className="flex flex-col items-center space-y-4 mt-5">
      <button
        onClick={handleStartTest}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mb-4"
      >
        Start Test
      </button>

      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl font-bold">
          {timer !== null ? "Time Left" : ""}
        </p>
        <p className="text-2xl font-bold">
          {timer !== null ? timer : ""}
        </p>
      </div>

      <div className="flex flex-col gap-y-2">
        {keys.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="flex gap-1 justify-center mb-1"
          >
            {row.map(({ keyName, keyStyle }, keyIndex) => (
              <button
                key={`${keyName}-${rowIndex}-${keyIndex}`}
                className={`${keyStyle} ${
                  keyStates[keyName] && testStarted
                    ? "bg-green-500"  // Key turns green when pressed
                    : "bg-gray-300"   // Default gray color
                } text-black font-medium p-2 rounded text-center border border-gray-400`}
              >
                {keyName}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyboardLayout;
