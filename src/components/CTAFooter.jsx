import React from "react";

export default function CTAFooter() {
  return (
    <section className="mt-12 mb-12 bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-xl font-semibold">Ready to try NovaTrack?</h4>
          <p className="text-gray-600">Start a free trial where no credit card required.</p>
        </div>
        <div>
          <a href="#try" className="px-4 py-2 rounded-lg bg-primary text-white inline-block shadow hover:bg-primaryDark focus:ring-2 focus:ring-primary">Start free trial</a>
        </div>
      </div>
    </section>
  );
}
