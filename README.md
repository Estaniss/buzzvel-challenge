# Luma Learning Landing Page

A responsive implementation of the Buzzvel November 2026 Front-End coding challenge, built with Next.js App Router, TypeScript and Tailwind CSS v4. The page uses local image assets and mock content; no backend or CMS is required.

## Requirements

- Node.js 20.9 or later
- npm 10 or later

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the page.

## Production build

```bash
npm run build
npm start
```

## Project structure

```text
app/
  globals.css        Global styles, responsive layout and design tokens
  layout.tsx         Root layout and page metadata
  page.tsx           Landing page composition
components/
  contact-form.tsx   Accessible client-side contact form
  footer.tsx         Site footer
  header.tsx         Responsive navigation and mobile menu
  sections.tsx       Page sections and reusable presentation elements
data/
  content.ts         Static category and footer content
public/images/       Supplied challenge photography
 types/
  index.ts           Shared TypeScript interfaces
```

## Technical decisions

- Used Next.js App Router and React Server Components by default. Client Components are limited to the responsive navigation state and contact form feedback.
- Used Tailwind CSS v4 as the configured utility layer, with carefully scoped CSS for the detailed layout and responsive behavior visible in the supplied Figma exports.
- Kept page content in typed static data and separated the navigation, form and footer into focused components.
- Used `next/image` for local photography, meaningful alternative text, image sizing hints and priority loading for the hero image.
- Added semantic landmarks, accessible form labels, visible keyboard focus, responsive menu controls and a `prefers-reduced-motion` fallback.
- The contact form validates required fields in the browser and displays a local success state. It does not send data to a server because the challenge does not require a backend.

## AI usage and verification

AI assistance was used to speed up CSS/Tailwind styling, help structure more complex UI components (such as the responsive image mosaic), and assist in drafting the ARCHITECTURE.md and README.md documentation. All generated code and documentation were reviewed, refactored for clean architecture, and manually tested against the Figma designs across mobile and desktop viewports to ensure visual accuracy.
