import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeatureGrid from "../components/FeatureGrid";
import ProofRow from "../components/ProofRow";
import PricingToggle from "../components/PricingToggle";
import CTAFooter from "../components/CTAFooter"; 

// export default function Landing() {
//   return (
//     <>
//       <a className="sr-only focus:not-sr-only" href="#main">Skip to content</a>
//       <Header />
//       <main id="main" className="max-w-[--max-width] mx-auto px-4 sm:px-6 lg:px-8">
//         <Hero />
//         <FeatureGrid />
//         <ProofRow />
//         <PricingToggle />
//         <CTAFooter />
//       </main>
//       <footer className="mt-12 py-8 text-center text-sm text-gray-500">
//         © {new Date().getFullYear()} NovaTrack Analytics Built with care.
//       </footer>
//     </>
//   );
// }


export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">NovaTrack</h1>
        <div className="space-x-6 text-gray-700 font-medium hidden md:flex">
          <a href="#features" className="hover:text-blue-600 transition">Features</a>
          <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Start Free Trial
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Analytics that’s simple and actually helpful.
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          NovaTrack gives small teams clear visitor insights, clean reports, and fast setup — no analytics engineering required.
        </p>
        <div className="mt-8 space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Start free trial
          </button>
          <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
            See features
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <h3 className="text-3xl font-semibold text-center text-gray-900 mb-10">
          What NovaTrack helps you do
        </h3>
        <div className="grid md:grid-cols-3 gap-8 px-10">
          {[
            { title: 'Real-time Visitors', desc: 'See who’s on your site now with simple filters.' },
            { title: 'Easy Funnels', desc: 'Build conversion funnels without coding.' },
            { title: 'UTM Tracking', desc: 'Automatically collect UTM info for every signup.' },
            { title: 'Lightweight SDK', desc: 'Tiny script that doesn’t slow your pages.' },
            { title: 'Exportable Reports', desc: 'CSV & PDF exports for stakeholders.' },
            { title: 'Team Collaboration', desc: 'Share dashboards easily with your team.' },
          ].map((f, i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">{f.title}</h4>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50 text-center">
        <h3 className="text-3xl font-semibold text-gray-900 mb-6">Simple, transparent pricing</h3>
        <p className="text-gray-600 mb-10">Monthly and annual billing with a discount on annual plans.</p>
        <div className="grid md:grid-cols-3 gap-8 px-10 max-w-6xl mx-auto">
          {[
            { plan: 'Starter', price: '₹599', desc: 'Good for personal projects.' },
            { plan: 'Growth', price: '₹1499', desc: 'For small teams & marketing.' },
            { plan: 'Scale', price: '₹3499', desc: 'For growing product teams.' },
          ].map((p, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-2xl font-bold text-blue-600 mb-2">{p.plan}</h4>
              <p className="text-gray-800 text-lg mb-4">{p.price}/month</p>
              <p className="text-gray-600 mb-6">{p.desc}</p>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Choose
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 border-t">
        <p>© {new Date().getFullYear()} NovaTrack. All rights reserved.</p>
      </footer>
    </div>
  );
}
