import {
  calculateSum,
  calculateAverage,
  calculateMin,
  calculateMax,
} from "../utils/Calculations";

const Summary = ({ tableData, selectedColumn }) => {
  if (!tableData.length) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>📊 Column {selectedColumn + 1} Stats</h2>

      <p>Sum: {calculateSum(tableData, selectedColumn)}</p>
      <p>Average: {calculateAverage(tableData, selectedColumn)}</p>
      <p>Min: {calculateMin(tableData, selectedColumn)}</p>
      <p>Max: {calculateMax(tableData, selectedColumn)}</p>
    </div>
  );
};

export default Summary;