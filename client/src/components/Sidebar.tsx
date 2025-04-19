export default function Sidebar() {
  const tools = [
    {
      title: "DPIA",
      description: "Create Data Protection Impact Assessments for your high risk processing activities."
    },
    {
      title: "Risk Management",
      description: "Helpful tool for managing user risk."
    },
    {
      title: "PIA",
      description: "Measure the Privacy Impact Assessment for new projects and systems handling personal data."
    }
  ];

  return (
    <aside className="md:w-1/4 mb-8 md:mb-0 md:pr-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Other Tools and Calculators</h2>
        <ul className="space-y-3">
          {tools.map((tool, index) => (
            <li key={index} className="flex items-start">
              <span className="text-[#007BFF] mr-2">•</span>
              <div>
                <span className="font-medium">{tool.title}:</span> {tool.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
