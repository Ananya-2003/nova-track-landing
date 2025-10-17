# NovaTrack – Marketing Landing Page

This is a responsive single-page landing site built with React + Vite and Tailwind CSS.  
It introduces the NovaTrack product and highlights key features, pricing, and a contact section.

## Setup Instructions
1. Open terminal inside the *landing* folder  
2. Run `npm install` to install dependencies  
3. Start the dev server with `npm run dev`  
4. Open the local URL (usually http://localhost:5173)

---

## Project Architecture
- *Vite* – build tool for fast React development  
- *Tailwind CSS* – utility-first styling system  
- *Component-based structure*
  - `HeroSection.jsx` – top banner  
  - `Features.jsx` – key product benefits  
  - `Pricing.jsx` – plan cards  
  - `Footer.jsx` – contact info and links

Routing isn’t required; all sections are on one page.

---

## Design Overview
- *Primary Color:* `#0C53D8` (brand blue)  
- *Accent Color:* `#083FB6`  
- *Background:* `#F8FAFC`  
- *Font:* Inter / system-ui  
- *Spacing:* Uses Tailwind’s 4/8/16 px scale  
- *Component Style:* Rounded corners (8 px), subtle shadows, clean whitespace  

---

## Build for Production
```bash
npm run build

