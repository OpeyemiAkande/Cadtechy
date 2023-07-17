import { useState, useRef } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const display = useRef(0);
  const operator = useRef("");

  const handleCalculator = (char) => {
    // console.log("click");
    if (result === "0") {
      setResult(char);
    } else if (char === "C") {
      setResult("0");
      display.current = "0";
      setFirstOperand(null);
    } else {
      setResult(result + char);
    }
  };

  const operateOnOperands = () => {
    if (operator.current === "+") {
      setFirstOperand(+result + +firstOperand);
      display.current = +result + +firstOperand;
    } else if (operator.current === "-") {
      setFirstOperand(+firstOperand - +result);
      display.current = +firstOperand - +result;
    } else if (operator.current === "/") {
      setFirstOperand(parseFloat(+firstOperand) / parseFloat(+result));
      display.current = parseFloat(+firstOperand) / parseFloat(+result);
    } else if (operator.current === "X") {
      setFirstOperand(+firstOperand * +result);
      display.current = +firstOperand * +result;
    } else if (operator.current === "%") {
      setFirstOperand(+firstOperand % +result);
      display.current = +firstOperand % +result;
    }

    setResult("");
  };

  const handleOperation = (result, operation) => {
    if (!firstOperand) {
      setFirstOperand(result);
      display.current = result;
      operator.current = operation;
      setResult("");
    } else if (result === "") {
      operator.current = operation;
    } else {
      operateOnOperands();
      operator.current = operation;
    }
  };

  const handleEquals = () => {
    operateOnOperands();
  };

  const handleNegation = () => setResult(-1 * result);

  return (
    <div className="calculator">
      <div className="display">
        <div className="display-content">
          {result !== "" && result !== "C" ? result : display.current}
        </div>
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
        <div className="modifying-operator" onClick={handleNegation}>
          +/-
        </div>
        <div
          className="modifying-operator"
          onClick={(e) => handleOperation(result, e.target.outerText)}
        >
          %
        </div>
        <div
          className="operators"
          onClick={(e) => handleOperation(result, e.target.outerText)}
        >
          /
        </div>
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
        <div
          className="operators"
          onClick={(e) => handleOperation(result, e.target.outerText)}
        >
          X
        </div>
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
        <div
          className="operators"
          onClick={(e) => handleOperation(result, e.target.outerText)}
        >
          -
        </div>
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
        <div
          className="operators"
          onClick={(e) => handleOperation(result, e.target.outerText)}
        >
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
        <div className="operators" onClick={handleEquals}>
          =
        </div>
      </div>
    </div>
  );
};

export default App;
