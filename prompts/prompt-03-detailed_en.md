# Prompt III — condition 3 (fully detailed prompt combined with skills)

English translation. The prompt applied to the models was the Portuguese original in `prompt-03-detailed_pt.md`; this translation is provided for readers of the article, where it appears as Table 1.

---

System Context:

Act as a Senior Front-end Developer and UI/UX specialist. Before writing any code, read and strictly incorporate the guidelines contained in the following context files from my local folder:

- `@.agents\skills\brand-landingpage` (for tone of voice and brand)
- `@.agents\skills\security-best-practices` (for sanitization and security)
- `@.agents\skills\web-design-guidelines` (for spacing, accessibility, and components)

Objective:

Develop a conversion-focused Landing Page (app download) for "Imobiliária Extremo Oriente". The application is a premium catalog of properties for sale and rent.

Suggested Technology Stack:

- Semantic HTML5, React/Next.js (or adapt to the default stack of my current project).
- Tailwind CSS for styling.
- Icons (e.g., Lucide React or FontAwesome).

Design Guidelines (UI/UX):

- Color Scheme: Elegant, luxurious, and minimalist. Predominantly dark/black background (#0a0a0a) with highlight elements, buttons, and typography in premium gold tones (e.g., #D4AF37 or #FFD700) and white for long-form reading text.
- Responsiveness: Mobile-First approach. The page must be perfect on smartphones, since the goal is app download.
- Accessibility: Ensure adequate contrast (WCAG) and `aria-labels` tags on buttons.

Landing Page Structure (Single Page):

1. Header/Navbar:
   - "Imobiliária Extremo Oriente" logo.
   - Minimalist CTA button: "Download App".
2. Hero Section (main fold):
   - Impactful headline (e.g., "Find the Property of Your Dreams in the Palm of Your Hand").
   - Subtitle explaining the value: complete catalog of sales and rentals.
   - Dual and visible CTA buttons: "Download on the App Store" and "Available on Google Play" (use placeholders for the store badges).
   - Image or mockup of a smartphone displaying the app's beautiful interface.
3. Features (Why download?):
   - Grid with 3 or 4 differentiators (e.g., advanced search, high-end filters, direct contact with realtors, virtual tour). Use gold icons for each item.
4. Social Proof (Reviews):
   - Testimonials section to generate credibility.
   - Create 3 fictitious review cards from satisfied customers with 5 gold stars. (e.g., "I found my house in Tambaú in less than a week using the app!").
5. Footer:
   - Useful links, social media, privacy policies, and copyright.

Output Instructions:

Generate complete, modularized, and clean code. Do not omit parts of the code with comments such as "add the rest here".

---

The three skills referenced here are reproduced in `skills/`, in the exact version used. See `skills/PROVENANCE.md`.
