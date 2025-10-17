import React, { useState } from "react";

const tiers = [
  { id: 'starter', name: 'Starter', monthly: 599, desc: 'Good for personal projects' },
  { id: 'growth', name: 'Growth', monthly: 1499, desc: 'Small teams & marketing' },
  { id: 'scale', name: 'Scale', monthly: 3499, desc: 'Growing product teams' },
];

export default function PricingToggle() {
  const [billing, setBilling] = useState('monthly');

  const price = (tier) => billing === 'monthly' ? `₹${tier.monthly}` : `₹${Math.round(tier.monthly * 0.8)}`;

  return (
    <section id="pricing" className="mt-12">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold">Simple, transparent pricing</h3>
        <p className="text-gray-600 mt-2">Monthly and annual billing with a discount on annual.</p>

        <div className="mt-4 inline-flex items-center gap-3 bg-gray-100 p-1 rounded-full">
          <button
            onClick={() => setBilling('monthly')}
            aria-pressed={billing === 'monthly'}
            className={`px-3 py-1 rounded-full text-sm ${billing === 'monthly' ? 'bg-white shadow' : ''}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling('annual')}
            aria-pressed={billing === 'annual'}
            className={`px-3 py-1 rounded-full text-sm ${billing === 'annual' ? 'bg-white shadow' : ''}`}
          >
            Annual (save 20%)
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {tiers.map(t => (
            <div key={t.id} className="p-4 rounded-lg border bg-white shadow-sm flex flex-col">
              <div className="text-sm font-medium">{t.name}</div>
              <div className="mt-3 text-2xl font-semibold">{price(t)}</div>
              <div className="mt-2 text-sm text-gray-600">{t.desc}</div>
              <div className="mt-4">
                <a href="#try" className="inline-block w-full text-center px-3 py-2 rounded-md bg-primary text-white">Choose</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
