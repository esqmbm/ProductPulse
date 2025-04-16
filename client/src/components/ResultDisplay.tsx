import { Button } from "@/components/ui/button";
import RiskMatrix from "./RiskMatrix";
import { getRecommendations } from "@/lib/riskCalculations";

interface ResultDisplayProps {
  result: {
    hazardName: string;
    riskScore: number;
    riskLevel: {
      text: string;
      colorClass: string;
    };
    likelihood: number;
    severity: number;
  };
  onReset: () => void;
}

export default function ResultDisplay({ result, onReset }: ResultDisplayProps) {
  const handleExport = () => {
    // Create a simple CSV format
    const csvContent = `"Hazard Name","Risk Score","Risk Level"
"${result.hazardName}","${result.riskScore}","${result.riskLevel.text}"`;
    
    // Create blob and download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `risk_assessment_${result.hazardName.replace(/\s+/g, '_')}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Risk Assessment Result</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-md">
          <div className="mb-4">
            <span className="text-gray-600 font-medium">Hazard Name:</span>
            <span className="ml-2">{result.hazardName}</span>
          </div>
          <div className="mb-4">
            <span className="text-gray-600 font-medium">Risk Score:</span>
            <span className="ml-2 font-bold">{result.riskScore}</span>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Risk Level:</span>
            <span className={`ml-2 px-3 py-1 rounded-full text-white ${result.riskLevel.colorClass}`}>
              {result.riskLevel.text}
            </span>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md">
          <h4 className="font-medium mb-2">Risk Matrix</h4>
          <RiskMatrix 
            likelihood={result.likelihood}
            severity={result.severity}
          />
        </div>
      </div>
      
      <div className="mt-6">
        <h4 className="font-semibold mb-2">Recommended Actions:</h4>
        <div 
          className="p-4 border border-gray-200 rounded-md bg-gray-50"
          dangerouslySetInnerHTML={{ 
            __html: getRecommendations(result.riskScore, result.riskLevel.text) 
          }}
        />
      </div>
      
      <div className="mt-6 flex flex-col sm:flex-row justify-between">
        <Button 
          onClick={onReset} 
          variant="outline"
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md mb-3 sm:mb-0 transition duration-200"
        >
          Reset Form
        </Button>
        
        <Button 
          onClick={handleExport} 
          className="bg-[#001A33] hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-md transition duration-200"
        >
          Export Results
        </Button>
      </div>
    </div>
  );
}
