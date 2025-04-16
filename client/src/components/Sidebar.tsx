export default function Sidebar() {
  const tools = [
    {
      title: "TRIR",
      description: "Calculate your Total Recordable Incident Rate."
    },
    {
      title: "DART",
      description: "The DART Rate Calculator is a helpful tool for determining your workplace's Days Away, Restricted, or Transferred (DART) rate."
    },
    {
      title: "MOC ROI",
      description: "Measure the Return on Investment (ROI) associated with managing productivity impacts caused by incomplete or delayed MOC processes."
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
