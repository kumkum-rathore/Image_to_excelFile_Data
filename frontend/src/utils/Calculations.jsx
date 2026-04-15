export const calculateSum = (tableData, colIndex) => {
  let sum = 0;

  tableData.forEach((row) => {
    const value = Number(row[colIndex]);
    if (!isNaN(value)) sum += value;
  });

  return sum;
};

export const calculateAverage = (tableData, colIndex) => {
  let sum = 0;
  let count = 0;

  tableData.forEach((row) => {
    const value = Number(row[colIndex]);
    if (!isNaN(value)) {
      sum += value;
      count++;
    }
  });

  return count === 0 ? 0 : sum / count;
};

export const calculateMin = (tableData, colIndex) => {
  let values = tableData
    .map((row) => Number(row[colIndex]))
    .filter((v) => !isNaN(v));

  return values.length ? Math.min(...values) : 0;
};

export const calculateMax = (tableData, colIndex) => {
  let values = tableData
    .map((row) => Number(row[colIndex]))
    .filter((v) => !isNaN(v));

  return values.length ? Math.max(...values) : 0;
};