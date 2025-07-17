// FocusInput.jsx
import React, { useRef } from 'react';
import './focusinput.css';

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Focus on the first input
  };

  return (
    <div className="focus-container">
      <h2 className="focus-title">Input</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="As your wish"
        className="focus-input"
      />
      <input
        type="text"
        placeholder="Dont change your thoughts for others"
        className="focus-input"
      />
      <button onClick={handleFocus} className="focus-button">
        I like physical touch
      </button>
    </div>
  );
};



export default FocusInput;