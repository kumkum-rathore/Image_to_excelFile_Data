import { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import DataTable from "./components/DataTable";
import Summary from "./components/Summary";
import FormulaInput from "./components/FormulaInput";
import ExportButton from "./components/ExportButton";

// function App() {
//   const [tableData, setTableData] = useState([]);
//   const [selectedColumn, setSelectedColumn] = useState(1);

//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <h1>Image to Excel Converter</h1>

//       <ImageUpload setTableData={setTableData} />

//       {tableData.length > 0 && (
//   <div style={{ margin: "20px" }}>
//     <label>Select Column for SUM: </label>

//     <select
//       value={selectedColumn}
//       onChange={(e) => setSelectedColumn(Number(e.target.value))}
//     >
//       {tableData[0]?.map((col, index) => (
//         <option key={index} value={index}>
//           Column {index + 1} ({col})
//         </option>
//       ))}
//     </select>
//   </div>
// )}

//       <DataTable
//         tableData={tableData}
//         setTableData={setTableData}
//       />

// <Summary tableData={tableData} selectedColumn={selectedColumn} /> 
// <FormulaInput
//   tableData={tableData}
//   selectedColumn={selectedColumn}
// />

// <ExportButton tableData={tableData} />

//    </div>
//   );
// }

// export default App;

function App() {
  const [tableData, setTableData] = useState([]);
  const [selectedColumn, setSelectedColumn] = useState(1);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        📊 Image to Excel Converter
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl">

        <ImageUpload setTableData={setTableData} />

        {tableData.length > 0 && (
          <div className="mt-4">
            <label className="font-medium">Select Column:</label>

            <select
              className="border p-2 ml-2 rounded"
              value={selectedColumn}
              onChange={(e) => setSelectedColumn(Number(e.target.value))}
            >
              {tableData[0]?.map((col, index) => (
                <option key={index} value={index}>
                  {col}
                </option>
              ))}
            </select>
          </div>
        )}

        <DataTable
          tableData={tableData}
          setTableData={setTableData}
        />

        <Summary
          tableData={tableData}
          selectedColumn={selectedColumn}
        />

        <FormulaInput
          tableData={tableData}
          selectedColumn={selectedColumn}
        />

        <ExportButton tableData={tableData} />

      </div>
    </div>
  );
}

export default App;