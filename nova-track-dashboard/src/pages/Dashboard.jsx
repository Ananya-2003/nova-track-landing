import { kpis } from "../data/mock";
import KpiCard from "../components/KpiCard";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-blue-700">
            NovaTrack Live Snapshot
          </h1>
          <span className="text-sm text-gray-500">Demo Dashboard</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* KPI cards section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard title="Visitors" value={kpis.visitors} delta="+5%" />
          <KpiCard title="Signups" value={kpis.signups} delta="-2%" />
          <KpiCard title="Conversion" value={`${kpis.conversion}%`} delta="+0.5%" />
          <KpiCard title="Revenue" value={`₹${kpis.revenue}`} delta="+8%" />
        </section>
      </main>
    </div>
  );
}
