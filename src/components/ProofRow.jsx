import React from "react";

const logos = [
  { name: "BrightCo", src: "/logos/brightco.svg" },
  { name: "SaltLabs", src: "/logos/saltlabs.svg" },
  { name: "Manna", src: "/logos/manna.svg" },
  { name: "Hive", src: "/logos/hive.svg" },
];

const testimonials = [
  { quote: "We dropped complex analytics and moved to NovaTrack setup was 10 minutes.", author: "Rohit S., Growth" },
  { quote: "The UTM reports saved our ad budget.", author: "Priya K., Marketing" },
];

export default function ProofRow() {
  return (
    <section id="testimonials" className="mt-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {logos.map((l) => (
            <div key={l.name} className="w-28 h-12 flex items-center justify-center opacity-80">
              <img src={l.src} alt={`${l.name} logo`} className="max-h-10 object-contain" loading="lazy" />
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="p-4 border-l-4 border-primary bg-white rounded-md">
              <p className="text-gray-700">{t.quote}</p>
              <cite className="mt-2 block text-sm text-gray-500">— {t.author}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
