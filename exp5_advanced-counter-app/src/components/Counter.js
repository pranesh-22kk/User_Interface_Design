import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    const [history, setHistory] = useState([]); // New state for history
    const maxLimit = 100; // Max limit for counter
    const minLimit = 0; // Min limit for counter

    const increment = () => {
        if (count + step <= maxLimit) {
            setCount(count + step);
            setHistory([...history, `Incremented by ${step}`]);
        }
    };

    const decrement = () => {
        if (count - step >= minLimit) {
            setCount(count - step);
            setHistory([...history, `Decremented by ${step}`]);
        }
    };

    const handleCountChange = (event) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value)) {
            setCount(value);
            setHistory([...history, `Count manually set to ${value}`]);
        }
    };

    const handleStepChange = (event) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value)) {
            setStep(value);
        }
    };

    const resetCounter = () => {
        setCount(0);
        setStep(1);
        setHistory([...history, 'Counter reset']);
    };

    return (
        <div className="counter">
            <h2>Advanced Counter App</h2>
            <div className="counter-container">
                <button onClick={decrement} className="btn decrement">-</button>
                <input 
                    type="number" 
                    value={count} 
                    onChange={handleCountChange} 
                    className="input-box"
                />
                <button onClick={increment} className="btn increment">+</button>
            </div>
            <div className="step-container">
                <label htmlFor="step">Set Step Value: </label>
                <input 
                    type="number" 
                    value={step} 
                    onChange={handleStepChange} 
                    className="input-step"
                />
            </div>
            <div className="limit-info">
                <p>Min Limit: {minLimit}, Max Limit: {maxLimit}</p>
            </div>
            <button onClick={resetCounter} className="btn reset">Reset Counter</button>

            <div className="history">
                <h3>Action History:</h3>
                <ul>
                    {history.map((action, index) => (
                        <li key={index}>{action}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Counter;
