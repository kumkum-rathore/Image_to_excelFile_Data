// const DataTable = ({ tableData }) => {
//   if (tableData.length === 0) return null;

//   return (
//     <table border="1" style={{ margin: "20px auto" }}>
//       <tbody>
//         {tableData.map((row, rowIndex) => (
//           <tr key={rowIndex}>
//             {row.map((cell, colIndex) => (
//               <td key={colIndex} style={{ padding: "8px" }}>
//                 {cell}
//               </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };
// export default DataTable;


const DataTable = ({ tableData, setTableData }) => {
  if (tableData.length === 0) return null;

  // Handle cell change
  const handleChange = (rowIndex, colIndex, value) => {
    const updatedData = [...tableData];
    updatedData[rowIndex][colIndex] = value;
    setTableData(updatedData);
  };

  return (
    <table className="table-auto border-collapse w-full mt-4">
  <tbody>
    {tableData.map((row, rIndex) => (
      <tr key={rIndex}>
        {row.map((cell, cIndex) => (
          <td className="border p-2" key={cIndex}>
            <input
              className="w-full outline-none"
              value={cell}
              onChange={(e) =>
                handleChange(rIndex, cIndex, e.target.value)
              }
            />
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>
  );
};

export default DataTable;