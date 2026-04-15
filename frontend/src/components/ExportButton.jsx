import * as XLSX from "xlsx";

const ExportButton = ({ tableData }) => {
  const handleExport = () => {
    if (!tableData.length) {
      alert("No data to export ❌");
      return;
    }

    // Convert array to worksheet
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);

    // Create workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Download file
    XLSX.writeFile(workbook, "data.xlsx");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={handleExport}>Download Excel</button>
    </div>
  );
};

export default ExportButton;