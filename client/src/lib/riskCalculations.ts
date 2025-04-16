export function getLikelihoodOptions() {
  return [
    { value: 1, label: "1 - Rare" },
    { value: 2, label: "2 - Unlikely" },
    { value: 3, label: "3 - Possible" },
    { value: 4, label: "4 - Likely" },
    { value: 5, label: "5 - Almost Certain" }
  ];
}

export function getSeverityOptions() {
  return [
    { value: 1, label: "1 - Negligible" },
    { value: 2, label: "2 - Minor" },
    { value: 3, label: "3 - Moderate" },
    { value: 4, label: "4 - Major" },
    { value: 5, label: "5 - Catastrophic" }
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
      text: "Extreme", 
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
      'Document existing controls',
      'Monitor through routine procedures',
      'Consider if further risk reduction is necessary'
    ],
    'Moderate': [
      'Implement engineering controls to reduce likelihood or severity',
      'Develop standardized procedures for this hazard',
      'Schedule regular monitoring and reassessment',
      'Ensure all employees are trained on control measures'
    ],
    'High': [
      'Immediate attention required',
      'Senior management involvement necessary',
      'Dedicated resources should be allocated',
      'Detailed control plans must be implemented',
      'Regular review and validation of controls'
    ],
    'Extreme': [
      'Work must not proceed until risk is reduced',
      'Immediate executive leadership attention required',
      'Comprehensive risk mitigation plan mandatory',
      'Continuous monitoring and emergency response planning',
      'Consider complete process redesign or elimination'
    ]
  };
  
  const html = `
    <p>For a <strong>${level}</strong> risk level (score: ${score}):</p>
    <ul class="list-disc ml-5 mt-2">
      ${recommendations[level as keyof typeof recommendations].map(rec => `<li>${rec}</li>`).join('')}
    </ul>
  `;
  
  return html;
}
