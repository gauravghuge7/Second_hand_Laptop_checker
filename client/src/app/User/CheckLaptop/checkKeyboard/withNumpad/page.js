"use client";
import { useState, useEffect } from 'react';

const KeyboardLayout = () => {
  const keys = [
    // Function keys row
    [
      { keyName: 'Esc', keyStyle: 'w-12' },
      { keyName: 'F1', keyStyle: 'w-12' },
      { keyName: 'F2', keyStyle: 'w-12' },
      { keyName: 'F3', keyStyle: 'w-12' },
      { keyName: 'F4', keyStyle: 'w-12' },
      { keyName: 'F5', keyStyle: 'w-12' },
      { keyName: 'F6', keyStyle: 'w-12' },
      { keyName: 'F7', keyStyle: 'w-12' },
      { keyName: 'F8', keyStyle: 'w-12' },
      { keyName: 'F9', keyStyle: 'w-12' },
      { keyName: 'F10', keyStyle: 'w-12' },
      { keyName: 'F11', keyStyle: 'w-12' },
      { keyName: 'F12', keyStyle: 'w-12' },
    ],
    // Number row
    [
      { keyName: '`', keyStyle: 'w-12' },
      { keyName: '1', keyStyle: 'w-12' },
      { keyName: '2', keyStyle: 'w-12' },
      { keyName: '3', keyStyle: 'w-12' },
      { keyName: '4', keyStyle: 'w-12' },
      { keyName: '5', keyStyle: 'w-12' },
      { keyName: '6', keyStyle: 'w-12' },
      { keyName: '7', keyStyle: 'w-12' },
      { keyName: '8', keyStyle: 'w-12' },
      { keyName: '9', keyStyle: 'w-12' },
      { keyName: '0', keyStyle: 'w-12' },
      { keyName: '-', keyStyle: 'w-12' },
      { keyName: '=', keyStyle: 'w-12' },
      { keyName: 'Backspace', keyStyle: 'w-24' },
    ],
    // QWERTY row
    [
      { keyName: 'Tab', keyStyle: 'w-20' },
      { keyName: 'Q', keyStyle: 'w-12' },
      { keyName: 'W', keyStyle: 'w-12' },
      { keyName: 'E', keyStyle: 'w-12' },
      { keyName: 'R', keyStyle: 'w-12' },
      { keyName: 'T', keyStyle: 'w-12' },
      { keyName: 'Y', keyStyle: 'w-12' },
      { keyName: 'U', keyStyle: 'w-12' },
      { keyName: 'I', keyStyle: 'w-12' },
      { keyName: 'O', keyStyle: 'w-12' },
      { keyName: 'P', keyStyle: 'w-12' },
      { keyName: '[', keyStyle: 'w-12' },
      { keyName: ']', keyStyle: 'w-12' },
      { keyName: '\\', keyStyle: 'w-16' },
    ],
    // Home row
    [
      { keyName: 'Caps', keyStyle: 'w-24' },
      { keyName: 'A', keyStyle: 'w-12' },
      { keyName: 'S', keyStyle: 'w-12' },
      { keyName: 'D', keyStyle: 'w-12' },
      { keyName: 'F', keyStyle: 'w-12' },
      { keyName: 'G', keyStyle: 'w-12' },
      { keyName: 'H', keyStyle: 'w-12' },
      { keyName: 'J', keyStyle: 'w-12' },
      { keyName: 'K', keyStyle: 'w-12' },
      { keyName: 'L', keyStyle: 'w-12' },
      { keyName: ';', keyStyle: 'w-12' },
      { keyName: '\'', keyStyle: 'w-12' },
      { keyName: 'Enter', keyStyle: 'w-28' },
    ],
    // Bottom row
    [
      { keyName: 'Shift', keyStyle: 'w-28' },
      { keyName: 'Z', keyStyle: 'w-12' },
      { keyName: 'X', keyStyle: 'w-12' },
      { keyName: 'C', keyStyle: 'w-12' },
      { keyName: 'V', keyStyle: 'w-12' },
      { keyName: 'B', keyStyle: 'w-12' },
      { keyName: 'N', keyStyle: 'w-12' },
      { keyName: 'M', keyStyle: 'w-12' },
      { keyName: ',', keyStyle: 'w-12' },
      { keyName: '.', keyStyle: 'w-12' },
      { keyName: '/', keyStyle: 'w-12' },
      { keyName: 'Shift', keyStyle: 'w-32' },
    ],
    // Control keys row
    [
      { keyName: 'Ctrl', keyStyle: 'w-16' },
      { keyName: 'Win', keyStyle: 'w-16' },
      { keyName: 'Alt', keyStyle: 'w-16' },
      { keyName: 'Space', keyStyle: 'w-[320px]' },
      { keyName: 'Alt', keyStyle: 'w-16' },
      { keyName: 'Win', keyStyle: 'w-16' },
      { keyName: 'Menu', keyStyle: 'w-16' },
      { keyName: 'Ctrl', keyStyle: 'w-16' },
    ],
    // Numpad row (added separately for layout consistency)
    [
      { keyName: 'Num Lock', keyStyle: 'w-16' },
      { keyName: '/', keyStyle: 'w-16' },
      { keyName: '*', keyStyle: 'w-16' },
      { keyName: '-', keyStyle: 'w-16' },
    ],
    [
      { keyName: '7', keyStyle: 'w-16' },
      { keyName: '8', keyStyle: 'w-16' },
      { keyName: '9', keyStyle: 'w-16' },
      { keyName: '+', keyStyle: 'h-24 w-16' },
    ],
    [
      { keyName: '4', keyStyle: 'w-16' },
      { keyName: '5', keyStyle: 'w-16' },
      { keyName: '6', keyStyle: 'w-16' },
    ],
    [
      { keyName: '1', keyStyle: 'w-16' },
      { keyName: '2', keyStyle: 'w-16' },
      { keyName: '3', keyStyle: 'w-16' },
      { keyName: 'Enter', keyStyle: 'h-24 w-16' },
    ],
    [
      { keyName: '0', keyStyle: 'w-32' },
      { keyName: '.', keyStyle: 'w-16' },
    ],
  ];

  const [keyStates, setKeyStates] = useState({});
  const [testStarted, setTestStarted] = useState(false);

  const handleStartTest = () => {
    setKeyStates({});
    setTestStarted(true);
  };

  const handleKeyClick = (keyName) => {
    setKeyStates((prevState) => ({ ...prevState, [keyName]: true }));
  };

  useEffect(() => {
    const handlePhysicalKeyPress = (event) => {
      const key = event.key.length === 1 ? event.key.toUpperCase() : event.key;
      if (testStarted && keys.flat().some(k => k.keyName === key)) {
        setKeyStates((prevState) => ({ ...prevState, [key]: true }));
      }
    };
    window.addEventListener("keydown", handlePhysicalKeyPress);
    return () => window.removeEventListener("keydown", handlePhysicalKeyPress);
  }, [testStarted]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        onClick={handleStartTest}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Start Test
      </button>
      
      <div className="flex flex-col gap-y-2">
        {keys.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="flex gap-x-1">
            {row.map(({ keyName, keyStyle }, keyIndex) => (
              <button
                key={`${keyName}-${rowIndex}-${keyIndex}`}
                onClick={() => handleKeyClick(keyName)}
                className={`${keyStyle} ${
                  keyStates[keyName] ? 'bg-green-500' : 'bg-blue-500'
                } text-white font-medium p-2 rounded-md text-center`}
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
