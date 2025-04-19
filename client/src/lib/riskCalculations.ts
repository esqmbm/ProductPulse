export function getLikelihoodOptions() {
  return [
    { value: 1, label: "1 - Rare" },
    { value: 2, label: "2 - Unlikely" },
    { value: 3, label: "3 - Possible" },
    { value: 4, label: "4 - Likely" },
    { value: 5, label: "5 - Very Likely" }
  ];
}

export function getSeverityOptions() {
  return [
    { value: 1, label: "1 - Minimal" },
    { value: 2, label: "2 - Limited" },
    { value: 3, label: "3 - Significant" },
    { value: 4, label: "4 - Major" },
    { value: 5, label: "5 - Severe" }
  ];
}

export function calculateRiskLevel(score: number) {
  if (score >= 1 && score <= 4) {
    return { 
      text: "Low", 
      colorClass: "bg-green-500" 
    };
  }
  
  if (score >= 5 && score <= 12) {
    return { 
      text: "Moderate", 
      colorClass: "bg-orange-500" 
    };
  }
  
  if (score >= 13 && score <= 19) {
    return { 
      text: "High", 
      colorClass: "bg-red-500" 
    };
  }
  
  if (score >= 20 && score <= 25) {
    return { 
      text: "Critical", 
      colorClass: "bg-red-700" 
    };
  }
  
  return { 
    text: "Unknown", 
    colorClass: "bg-gray-500" 
  };
}

export function getRecommendations(score: number, level: string) {
  const recommendations = {
    'Low': [
      'Document the privacy controls in place',
      'Include in routine privacy compliance reviews',
      'Monitor for regulatory changes that might affect this process',
      'Ensure appropriate privacy notices are in place'
    ],
    'Moderate': [
      'Implement additional technical safeguards',
      'Develop or update data handling procedures',
      'Conduct regular privacy impact reviews',
      'Provide specific privacy training for staff handling this data',
      'Consider data minimization opportunities'
    ],
    'High': [
      'Immediate Data Protection Officer notification required',
      'Senior management review and approval necessary',
      'Enhanced technical controls must be implemented',
      'Detailed data processing agreement reviews',
      'Consider if legitimate interest assessment is needed',
      'Implement additional encryption or anonymization'
    ],
    'Critical': [
      'Processing should not proceed until risk is substantially reduced',
      'Full Data Protection Impact Assessment (DPIA) mandatory',
      'Executive leadership attention required',
      'Consider consultation with regulatory authorities',
      'Implement strict data access controls and audit trails',
      'Comprehensive privacy-by-design approach required'
    ]
  };
  
  const html = `
    <p>For a <strong>${level}</strong> privacy risk level (score: ${score}):</p>
    <ul class="list-disc ml-5 mt-2">
      ${recommendations[level as keyof typeof recommendations].map(rec => `<li>${rec}</li>`).join('')}
    </ul>
  `;
  
  return html;
}
