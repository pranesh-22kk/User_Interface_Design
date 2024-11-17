import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setInput(Function('"use strict";return (' + input + ')')().toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="calculator">
      {/* Add the image */}
      <h2>Calculator</h2>
      <div className="display">
        <input type="text" className="input" value={input} readOnly />
      </div>

      <div className="keypad">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')} className="operator">+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')} className="operator">-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')} className="operator">*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')} className="dot">.</button>
        <button onClick={handleClear} className="clear">C</button>
        <button onClick={handleCalculate} className="equals">=</button>
        <button onClick={() => handleClick('/')} className="operator">/</button>
      </div>
    </div>
  );
}

export default App;
