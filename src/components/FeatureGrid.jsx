import React from "react";

const features = [
  { title: "Real-time visitors", desc: "See who’s on your site now with simple filters." },
  { title: "Easy funnels", desc: "Build conversion funnels without coding." },
  { title: "UTM tracking", desc: "Automatically collect UTM info for every signup." },
  { title: "Lightweight SDK", desc: "Tiny script that doesn’t slow your pages." },
  { title: "Exportable reports", desc: "CSV & PDF exports for stakeholders." },
  { title: "Role-based sharing", desc: "Share dashboards with team roles and permissions." },
];

function TickIcon() {
  return (
    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function FeatureGrid() {
  return (
    <section id="features" className="mt-10">
      <h2 className="text-2xl font-semibold text-center">What NovaTrack helps you do</h2>
      <p className="text-center mt-2 text-gray-600 max-w-2xl mx-auto">All the essentials to track growth without the setup pain.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="p-4 rounded-lg border bg-white shadow-sm">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <TickIcon />
              </div>
              <div>
                <div className="text-sm font-medium">{f.title}</div>
                <div className="mt-1 text-sm text-gray-600">{f.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
