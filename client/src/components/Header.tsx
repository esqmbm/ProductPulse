export default function Header() {
  return (
    <header className="bg-[#001A33] text-white">
      <div className="container mx-auto px-4 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Safety Risk Assessment Matrix Calculator</h1>
          <div className="flex items-center">
            <a href="#" className="text-[#FF7F66] hover:underline">Workplace Safety</a>
            <span className="mx-2">|</span>
            <span>Frontline Blog</span>
          </div>
        </div>
        
        {/* Featured Tool Card */}
        <div className="md:w-1/2 max-w-md">
          <div className="bg-[#FF7F66] rounded-lg p-6 text-white">
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 pr-0 sm:pr-4 mb-4 sm:mb-0">
                <div className="bg-white rounded-lg p-2 shadow-md">
                  <svg className="w-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="40" fill="#f0f0f0" />
                    <text x="100" y="25" fontSize="14" fill="#333" textAnchor="middle">Safety Risk Matrix</text>
                    
                    <g transform="translate(0, 40)">
                      <rect width="40" height="30" fill="#ffffff" stroke="#ccc" />
                      <text x="20" y="20" fontSize="12" fill="#333" textAnchor="middle">L/S</text>
                      
                      {[1, 2, 3, 4, 5].map((col, i) => (
                        <g key={`col-${col}`} transform={`translate(${40 + i * 32}, 0)`}>
                          <rect width="32" height="30" fill="#ffffff" stroke="#ccc" />
                          <text x="16" y="20" fontSize="12" fill="#333" textAnchor="middle">{col}</text>
                        </g>
                      ))}
                      
                      {[5, 4, 3, 2, 1].map((row, i) => (
                        <g key={`row-${row}`} transform={`translate(0, ${30 + i * 26})`}>
                          <rect width="40" height="26" fill="#ffffff" stroke="#ccc" />
                          <text x="20" y="18" fontSize="12" fill="#333" textAnchor="middle">{row}</text>
                          
                          {[...Array(5)].map((_, j) => {
                            const value = row * (j + 1);
                            let color = "#4ade80"; // green
                            if (value > 4 && value <= 12) color = "#f97316"; // orange
                            else if (value > 12 && value <= 19) color = "#ef4444"; // red
                            else if (value > 19) color = "#b91c1c"; // dark red
                            
                            return (
                              <rect 
                                key={`cell-${i}-${j}`}
                                x={40 + j * 32} 
                                width="32" 
                                height="26" 
                                fill={color} 
                                stroke="#ccc"
                              />
                            );
                          })}
                        </g>
                      ))}
                    </g>
                  </svg>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <h2 className="text-xl font-semibold mb-2">Safety risk assessment matrix calculator</h2>
                <p className="text-sm mb-4">Input your data points and we'll do the rest.</p>
                <a 
                  href="#calculator" 
                  className="bg-[#007BFF] text-white text-center py-2 px-4 rounded-md block hover:bg-blue-600 transition duration-200"
                >
                  Assess your risk level
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
