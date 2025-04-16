import { useState } from "react";
import { useForm } from "react-hook-form";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import ResultDisplay from "./ResultDisplay";
import { calculateRiskLevel, getLikelihoodOptions, getSeverityOptions } from "@/lib/riskCalculations";

type FormValues = {
  hazardName: string;
  likelihood: string;
  severity: string;
};

export default function RiskCalculator() {
  const [result, setResult] = useState<{
    hazardName: string;
    riskScore: number;
    riskLevel: {
      text: string;
      colorClass: string;
    };
    likelihood: number;
    severity: number;
    showResult: boolean;
  }>({
    hazardName: "",
    riskScore: 0,
    riskLevel: {
      text: "",
      colorClass: "",
    },
    likelihood: 0,
    severity: 0,
    showResult: false,
  });

  const form = useForm<FormValues>({
    defaultValues: {
      hazardName: "",
      likelihood: "",
      severity: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    const likelihood = parseInt(data.likelihood);
    const severity = parseInt(data.severity);
    const riskScore = likelihood * severity;
    const riskLevel = calculateRiskLevel(riskScore);

    setResult({
      hazardName: data.hazardName,
      riskScore,
      riskLevel,
      likelihood,
      severity,
      showResult: true,
    });
  };

  const handleReset = () => {
    form.reset();
    setResult({
      ...result,
      showResult: false,
    });
  };

  return (
    <section id="calculator" className="md:w-3/4">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-4">Safety Risk Assessment Matrix Calculator</h2>
        
        <p className="mb-6">
          This web tool helps safety professionals evaluate workplace hazards by calculating a risk score from likelihood and severity ratings. It clearly indicates whether a hazard is Low, Moderate, High, or Extreme, aiding in decision-making and risk mitigation.
        </p>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="hazardName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Hazard Name:</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter hazard name" 
                      {...field} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="likelihood"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Likelihood (1-5):</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]">
                        <SelectValue placeholder="Select Likelihood" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {getLikelihoodOptions().map((option) => (
                        <SelectItem key={option.value} value={option.value.toString()}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="severity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Severity (1-5):</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF]">
                        <SelectValue placeholder="Select Severity" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {getSeverityOptions().map((option) => (
                        <SelectItem key={option.value} value={option.value.toString()}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full bg-[#007BFF] hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-md transition duration-200"
            >
              Calculate Risk
            </Button>
          </form>
        </Form>
        
        {result.showResult && (
          <ResultDisplay 
            result={result} 
            onReset={handleReset} 
          />
        )}
      </div>
    </section>
  );
}
