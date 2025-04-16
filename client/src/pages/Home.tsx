import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import RiskCalculator from "@/components/RiskCalculator";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row">
        <Sidebar />
        <RiskCalculator />
      </main>
    </div>
  );
}
