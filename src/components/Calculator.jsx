import React from "react";
import classes from "./Calculator.module.css";
import { useState } from "react";

function Calculator() {
  const [currentNum, setCurrentNum] = useState("");
  const [result, setResult] = useState("");

  const ops = ["*", "/", "+", "-"];

  const insertDecimal = () => {
    if (!/\./.test(currentNum)) {
      setCurrentNum(currentNum + ".");
    }
  };
  const clear = () => {
    if (currentNum === "") {
      return;
    }
    setCurrentNum("");
    setResult("");
  };

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && ops.includes(currentNum.slice(-1))) ||
      (ops.includes(value) && currentNum === "")
    ) {
      return;
    }
    if (currentNum.length > 14) {
      return setCurrentNum("Limit exceeded"), setResult("Limit exceeded");
    }
    if (value === "CE") {
      clear();
    }
    if (value === ".") {
      insertDecimal();
    }
    try {
      setCurrentNum(currentNum + value);
      if (!ops.includes(value)) {
        setResult(Number.parseFloat(eval(currentNum + value)).toString());
        setCurrentNum(currentNum + value);
      }
    } catch (error) {
      setCurrentNum("");
      setResult("");
    }
  };

  const calculated = () => {
    if (currentNum === "") {
      return;
    }
    try {
      setCurrentNum(Number.parseFloat(eval(currentNum)).toFixed(4).toString());
    } catch (error) {
      alert(error.message);
      setCurrentNum("NaN");
      setResult("NaN");
    }
  };

  const negativeNum = (value) => {
    if (currentNum === "") {
      return;
    }

    setCurrentNum(eval(currentNum * value).toString());
    setResult(eval(currentNum * value).toString());
  };

  return (
    <main className={classes["calculator-container"]}>
      <div className={classes.grid}>
        <div className={classes.display1}>{currentNum || "0"}</div>
        <div className={classes.display2}>{result || "0"}</div>
        <div className={classes.clear}>
          <button
            onClick={() => updateCalc("CE")}
            className={classes.nonNumButton}
          >
            CE
          </button>
        </div>
        <div className={classes.division}>
          <button
            onClick={() => updateCalc("/")}
            className={classes.nonNumButton}
          >
            /
          </button>
        </div>
        <div className={classes.multiplication}>
          <button
            onClick={() => updateCalc("*")}
            className={classes.nonNumButton}
          >
            x
          </button>
        </div>
        <div className={classes.substraction}>
          <button
            onClick={() => updateCalc("-")}
            className={classes.nonNumButton}
          >
            -
          </button>
        </div>
        <div className={classes.addition}>
          <button
            onClick={() => updateCalc("+")}
            className={classes.nonNumButton}
          >
            +
          </button>
        </div>
        <div className={classes.equal}>
          <button onClick={calculated} className={classes.nonNumButton}>
            =
          </button>
        </div>
        <div className={classes.center}>
          <button onClick={() => updateCalc("7")} className={classes.numButton}>
            7
          </button>
        </div>
        <div className={classes.center}>
          <button onClick={() => updateCalc("8")} className={classes.numButton}>
            8
          </button>
        </div>
        <div className={classes.center}>
          <button onClick={() => updateCalc("9")} className={classes.numButton}>
            9
          </button>
        </div>
        <div className={classes.center}>
          <button onClick={() => updateCalc("4")} className={classes.numButton}>
            4
          </button>
        </div>
        <div className={classes.center}>
          <button onClick={() => updateCalc("5")} className={classes.numButton}>
            5
          </button>
        </div>
        <div className={classes.center}>
          <button onClick={() => updateCalc("6")} className={classes.numButton}>
            6
          </button>
        </div>
        <div className={classes.center}>
          <button onClick={() => updateCalc("1")} className={classes.numButton}>
            1
          </button>
        </div>
        <div className={classes.center}>
          <button onClick={() => updateCalc("2")} className={classes.numButton}>
            2
          </button>
        </div>
        <div className={classes.center}>
          <button onClick={() => updateCalc("3")} className={classes.numButton}>
            3
          </button>
        </div>
        <div className={classes.center}>
          <button
            onClick={() => negativeNum("-1")}
            className={classes.numButton}
          >
            +/-
          </button>
        </div>
        <div className={classes.center}>
          <button onClick={() => updateCalc("0")} className={classes.numButton}>
            0
          </button>
        </div>
        <div className={classes.center}>
          <button onClick={() => updateCalc(".")} className={classes.numButton}>
            .
          </button>
        </div>
      </div>
    </main>
  );
}

export default Calculator;
