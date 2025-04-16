interface RiskMatrixProps {
  likelihood: number;
  severity: number;
}

export default function RiskMatrix({ likelihood, severity }: RiskMatrixProps) {
  // Matrix data: rows represent likelihood (5 to 1), columns represent severity (1 to 5)
  const matrixData = [
    [5, 10, 15, 20, 25], // Likelihood 5
    [4, 8, 12, 16, 20],  // Likelihood 4
    [3, 6, 9, 12, 15],   // Likelihood 3
    [2, 4, 6, 8, 10],    // Likelihood 2
    [1, 2, 3, 4, 5]      // Likelihood 1
  ];

  // Get cell color based on risk score
  const getCellColor = (score: number) => {
    if (score >= 1 && score <= 4) return "bg-green-300"; // Low
    if (score >= 5 && score <= 12) return "bg-orange-400"; // Moderate
    if (score >= 13 && score <= 19) return "bg-red-500 text-white"; // High
    if (score >= 20 && score <= 25) return "bg-red-700 text-white"; // Critical
    return "bg-gray-100";
  };

  // Check if this cell is the currently selected one
  const isSelectedCell = (rowIndex: number, colIndex: number) => {
    // Convert from UI indexes to matrix indexes
    // rowIndex is for likelihood 5-1, we need to convert to 0-4
    // colIndex is for severity 1-5, we need to convert to 0-4
    const matrixRow = 5 - likelihood;
    const matrixCol = severity - 1;
    
    return rowIndex === matrixRow && colIndex === matrixCol;
  };

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-center">
        <thead>
          <tr>
            <th className="p-2 border border-gray-300"></th>
            <th className="p-2 border border-gray-300" colSpan={5}>Impact Severity</th>
          </tr>
          <tr>
            <th className="p-2 border border-gray-300">Likelihood</th>
            {[1, 2, 3, 4, 5].map((value) => (
              <th key={`severity-${value}`} className="p-2 border border-gray-300">{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {matrixData.map((row, rowIndex) => (
            <tr key={`likelihood-${5 - rowIndex}`}>
              <td className="p-2 border border-gray-300 font-medium">{5 - rowIndex}</td>
              {row.map((cell, colIndex) => (
                <td 
                  key={`cell-${rowIndex}-${colIndex}`} 
                  className={`p-2 border border-gray-300 ${getCellColor(cell)} ${
                    isSelectedCell(rowIndex, colIndex) 
                      ? "ring-4 ring-blue-500 z-10 relative" 
                      : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
