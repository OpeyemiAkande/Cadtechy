import { useState, useEffect } from "react";
import "./App.css";
const App = () => {
  // const [text, setText] = useState("Hello World");
  const [tempDisplay, setTempDisplay] = useState("0");
  const [firstOperand, setFirstOperand] = useState(0);

  const handleCalculator = (char) => {
    if (tempDisplay === "0") {
      setTempDisplay(char);
      // console.log("set tempDisplay to nothing");
    } else if (char === "C") {
      setTempDisplay("0");
    } else {
      setTempDisplay(tempDisplay + char);
    }
    // console.log(+char);
  };

  // useEffect{() => {

  // }, []}

  const handleAddition = (result) => {
    if (!firstOperand) {
      setFirstOperand(result);
      setTempDisplay("");
    } else {
      setFirstOperand(() => +firstOperand + +result);
      setTempDisplay("");
    }
    console.log(firstOperand);
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="display-content">{tempDisplay}</div>
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
        <div className="operators" onClick={() => handleAddition(tempDisplay)}>
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
