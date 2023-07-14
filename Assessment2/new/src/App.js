import { useState, useEffect } from "react";
import "./App.css";
const App = () => {
  // const [text, setText] = useState("Hello World");
  const [result, setResult] = useState("0");
  const [firstOperand, setFirstOperand] = useState(0);

  const handleCalculator = (char) => {
    if (result === "0") {
      setResult(char);
      // console.log("set result to nothing");
    } else if (char === "C") {
      setResult("0");
    } else {
      setResult(result + char);
    }
    // console.log(+char);
  };

  const handleAddition = (result) => {
    setFirstOperand(result);
    console.log(result);
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="display-content">{result}</div>
      </div>

      <div className="layout">
        <div
          className="modifying-operator"
          onClick={(e) => {
            handleCalculator(e.target.outerText);
          }}
        >
          C
        </div>
        <div className="modifying-operator">+/-</div>
        <div className="modifying-operator">%</div>
        <div className="operators">/</div>
        <div
          className="numbers"
          onClick={(e) => {
            handleCalculator(e.target.outerText);
          }}
        >
          7
        </div>
        <div
          className="numbers"
          onClick={(e) => {
            handleCalculator(e.target.outerText);
          }}
        >
          8
        </div>
        <div
          className="numbers"
          onClick={(e) => {
            handleCalculator(e.target.outerText);
          }}
        >
          9
        </div>
        <div className="operators">X</div>
        <div
          className="numbers"
          onClick={(e) => {
            handleCalculator(e.target.outerText);
          }}
        >
          4
        </div>
        <div
          className="numbers"
          onClick={(e) => {
            handleCalculator(e.target.outerText);
          }}
        >
          5
        </div>
        <div
          className="numbers"
          onClick={(e) => {
            handleCalculator(e.target.outerText);
          }}
        >
          6
        </div>
        <div className="operators">-</div>
        <div
          className="numbers"
          onClick={(e) => {
            handleCalculator(e.target.outerText);
          }}
        >
          1
        </div>
        <div
          className="numbers"
          onClick={(e) => {
            handleCalculator(e.target.outerText);
          }}
        >
          2
        </div>
        <div
          className="numbers"
          onClick={(e) => {
            handleCalculator(e.target.outerText);
          }}
        >
          3
        </div>
        <div className="operators" onClick={() => handleAddition(result)}>
          +
        </div>
        <div
          className="numbers zero"
          onClick={(e) => {
            handleCalculator(e.target.outerText);
          }}
        >
          0
        </div>
        {/* <div className="numbers">00</div> */}
        <div
          className="numbers"
          onClick={(e) => {
            handleCalculator(e.target.outerText);
          }}
        >
          .
        </div>
        <div className="operators">=</div>
      </div>
    </div>
  );
};

export default App;
