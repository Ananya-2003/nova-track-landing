import React from "react";

export default function Hero() {
  return (
    <section className="pt-10 pb-10">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
          Analytics that’s simple  and actually helpful.
        </h1>
        <p className="mt-4 text-gray-600">
          NovaTrack gives small teams clear visitor insights, clean reports and fast setup no analytics engineering required.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a id="try" href="#pricing" className="inline-block px-5 py-3 rounded-lg bg-primary text-white font-medium shadow hover:bg-primaryDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            Start free trial
          </a>
          <a href="#features" className="text-sm text-gray-700 hover:underline">See features</a>
        </div>

        <div className="mt-8">
          <svg width="360" height="160" viewBox="0 0 360 160" role="img" aria-hidden="true" className="mx-auto">
            <rect width="360" height="160" rx="12" fill="#F3F9FF" />
            <circle cx="60" cy="80" r="18" fill="#0C53D8" />
            <rect x="100" y="50" width="200" height="20" rx="6" fill="#E6F0FF"/>
            <rect x="100" y="80" width="160" height="14" rx="6" fill="#cfe3ff"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
