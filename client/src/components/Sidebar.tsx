export default function Sidebar() {
  const tools = [
    {
      title: "DPIA",
      description: "Create Data Protection Impact Assessments for your processing activities."
    },
    {
      title: "Consent Manager",
      description: "Helpful tool for managing user consent preferences and tracking cookie compliance across your sites."
    },
    {
      title: "PIA Score",
      description: "Measure the Privacy Impact Assessment score for new projects and systems handling personal data."
    }
  ];

  return (
    <aside className="md:w-1/4 mb-8 md:mb-0 md:pr-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Tools and calculators</h2>
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
