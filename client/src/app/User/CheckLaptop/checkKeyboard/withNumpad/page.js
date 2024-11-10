"use client";
import { useState, useEffect } from "react";

const KeyboardLayout = () => {
  const keys = [
    // Main keyboard rows (ignoring numpad for now)
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

  const numpadKeys = [
    [
      { keyName: "NumLock", keyStyle: "w-[60px] bg-gray-400" },
      { keyName: "7", keyStyle: "w-[50px] bg-gray-200" },
      { keyName: "8", keyStyle: "w-[50px] bg-gray-200" },
      { keyName: "9", keyStyle: "w-[50px] bg-gray-200" },
      { keyName: "/", keyStyle: "w-[50px] bg-gray-200" },
    ],
    [
      { keyName: "4", keyStyle: "w-[50px] bg-gray-200" },
      { keyName: "5", keyStyle: "w-[50px] bg-gray-200" },
      { keyName: "6", keyStyle: "w-[50px] bg-gray-200" },
      { keyName: "*", keyStyle: "w-[50px] bg-gray-200" },
    ],
    [
      { keyName: "1", keyStyle: "w-[50px] bg-gray-200" },
      { keyName: "2", keyStyle: "w-[50px] bg-gray-200" },
      { keyName: "3", keyStyle: "w-[50px] bg-gray-200" },
      { keyName: "-", keyStyle: "w-[50px] bg-gray-200" },
    ],
    [
      { keyName: "0", keyStyle: "w-[100px] bg-gray-200" },
      { keyName: ".", keyStyle: "w-[50px] bg-gray-200" },
      { keyName: "Enter", keyStyle: "w-[100px] bg-orange-300" },
    ],
  ];



  const [keyStates, setKeyStates] = useState({});
  const [testStarted, setTestStarted] = useState(false);

  // Start the test and reset the key states
  const handleStartTest = () => {
    setKeyStates({});
    setTestStarted(true);
  };

  // Handle key button click (for virtual keys)
  const handleKeyClick = (keyName) => {
    if (testStarted) {
      setKeyStates((prevState) => ({
        ...prevState,
        [keyName]: true,  // Update the key state as pressed
      }));
    }
  };
  useEffect(() => {
    // Handle physical key press events (e.g., keyboard keys)
    const handlePhysicalKeyPress = (event) => {
      const key = event.key.toUpperCase(); // Normalize key to uppercase
      
      // Check if the key is part of the layout and the test has started
      if (testStarted && keys.flat().some((k) => k.keyName.toUpperCase() === key)) {
        setKeyStates((prevState) => ({
          ...prevState,
          [key]: true,  // Mark key as pressed
        }));
      }
    };

    // Prevent default browser actions for common key shortcuts
    const disableBrowserShortcuts = (event) => {
      // List of key combinations to disable
      const disabledKeys = [
        "F5", // Refresh
        "F11", // Fullscreen
        "Ctrl+R", // Refresh
        "Ctrl+T", // New Tab
        "Ctrl+W", // Close Tab
        "Ctrl+N", // New Window
        "Ctrl+Shift+I", // Developer Tools
        "Ctrl+Shift+J", // Developer Console
        "Ctrl+Shift+T", // Reopen Tab
        "Alt+Tab", // Switching windows
        "Escape" // Escape (Esc)
      ];

      const keyPressed = event.key.toUpperCase();
      const isCtrl = event.ctrlKey;
      const isShift = event.shiftKey;
      const isAlt = event.altKey;

      // If a disabled key or key combination is pressed, prevent the default action
      if (
        disabledKeys.includes(keyPressed) ||
        (isCtrl && disabledKeys.some((k) => k === `Ctrl+${keyPressed}`)) ||
        (isShift && disabledKeys.some((k) => k === `Ctrl+Shift+${keyPressed}`)) ||
        (isAlt && disabledKeys.some((k) => k === `Alt+${keyPressed}`))
      ) {
        event.preventDefault();
      }
    };

    // Add event listeners for keypress events
    window.addEventListener("keydown", handlePhysicalKeyPress);
    window.addEventListener("keydown", disableBrowserShortcuts); // Disable browser shortcuts

    // Cleanup event listeners when the component is unmounted or test is restarted
    return () => {
      window.removeEventListener("keydown", handlePhysicalKeyPress);
      window.removeEventListener("keydown", disableBrowserShortcuts);
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


      <section className="flex flex-row  mt-20">

          {/* Main keyboard layout */}
        <div className="flex flex-col gap-y-2">

        {keys.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="flex gap-1 justify-center mb-1"
          >
            {row.map(({ keyName, keyStyle }, keyIndex) => (
              <button
                key={`${keyName}-${rowIndex}-${keyIndex}`}
                onClick={() => handleKeyClick(keyName)}
                className={`${keyStyle} ${
                  keyStates[keyName] && testStarted
                    ? "bg-green-500"
                    : "bg-gray-300"
                } text-black font-medium p-2 rounded text-center border border-gray-400`}
              >
                {keyName}
              </button>
            ))}
          </div>
        ))}
        </div>

        {/* Numpad layout */}
        <div className="flex flex-col gap-y-2 mt-4">
          {numpadKeys.map((row, rowIndex) => (
            <div
              key={`numpad-row-${rowIndex}`}
              className="flex gap-1 justify-center mb-1"
            >
              {row.map(({ keyName, keyStyle }, keyIndex) => (
                <button
                  key={`${keyName}-numpad-${rowIndex}-${keyIndex}`}
                  onClick={() => handleKeyClick(keyName)}
                  className={`${keyStyle} ${
                    keyStates[keyName] && testStarted
                      ? "bg-green-500"
                      : "bg-gray-300"
                  } text-black font-medium p-2 rounded text-center border border-gray-400`}
                >
                  {keyName}
                </button>
              ))}
            </div>
          ))}
        </div>

      
      
      </section>

      

    </div>
  );
};

export default KeyboardLayout;
