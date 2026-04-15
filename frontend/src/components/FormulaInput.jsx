import { useState } from "react";
import {
  calculateSum,
  calculateAverage,
  calculateMin,
  calculateMax,
} from "../utils/Calculations";

const FormulaInput = ({ tableData, selectedColumn }) => {
  const [formula, setFormula] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    let res = 0;

    switch (formula.toUpperCase()) {
      case "=SUM":
        res = calculateSum(tableData, selectedColumn);
        break;
      case "=AVG":
        res = calculateAverage(tableData, selectedColumn);
        break;
      case "=MIN":
        res = calculateMin(tableData, selectedColumn);
        break;
      case "=MAX":
        res = calculateMax(tableData, selectedColumn);
        break;
      default:
        alert("Invalid Formula ❌");
        return;
    }

    setResult(res);
  };

  if (!tableData.length) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Enter Formula</h3>

      <input
        type="text"
        placeholder="=SUM"
        value={formula}
        onChange={(e) => setFormula(e.target.value)}
      />

      <button onClick={handleCalculate}>Calculate</button>

      {result !== null && <h4>Result: {result}</h4>}
    </div>
  );
};

export default FormulaInput;