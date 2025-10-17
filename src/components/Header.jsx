import React, { useState } from "react";

function MenuSvg({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function CloseSvg({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-[--max-width] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <a href="/" className="text-xl font-semibold text-primary">NovaTrack</a>
            <nav className="hidden md:flex gap-4 text-sm text-gray-600" aria-label="Main navigation">
              <a className="hover:text-primary" href="#features">Features</a>
              <a className="hover:text-primary" href="#pricing">Pricing</a>
              <a className="hover:text-primary" href="#testimonials">Customers</a>
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a className="text-sm" href="/signin">Sign in</a>
            <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm hover:bg-primaryDark" href="#try">
              Start free
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <CloseSvg/> : <MenuSvg/>}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-4 py-3 flex flex-col gap-2">
            <a href="#features" className="py-2">Features</a>
            <a href="#pricing" className="py-2">Pricing</a>
            <a href="#testimonials" className="py-2">Customers</a>
            <a href="#try" className="py-2 inline-flex items-center justify-center bg-primary text-white rounded-md">Start free</a>
          </div>
        </div>
      )}
    </header>
  );
}
