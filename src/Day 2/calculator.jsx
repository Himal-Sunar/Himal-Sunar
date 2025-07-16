
import React, { useState } from 'react';
// import "./styles/calculator.css"

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let res = 0;

    switch (operation) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        res = b !== 0 ? a / b : 'Error';
        break;
      default:
        res = 'Invalid';
    }

    setResult(res);
  };

  return (
    <div className="App">
      <h2>Simple Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={e => setNum1(e.target.value)}
        placeholder="First Number"
      />
      <input
        type="number"
        value={num2}
        onChange={e => setNum2(e.target.value)}
        placeholder="Second Number"
      />
      <select value={operation} onChange={e => setOperation(e.target.value)}>
        <option value="+">Add (+)</option>
        <option value="-">Subtract (-)</option>
        
      </select>
      <br />
      <button onClick={calculate}>Calculate</button>
      <h3>Result: {result !== null ? result : ''}</h3>
    </div>
  );
}

export default Calculator;
