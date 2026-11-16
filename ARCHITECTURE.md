# Architecture Notes

The page is composed as a single App Router route. `app/page.tsx` coordinates the page sections; `components/sections.tsx` contains presentational sections; interactive behavior is isolated in `Header` and `ContactForm` client components. Shared static content and TypeScript contracts live in `data/` and `types/`.

There is no API, authentication, persistence, CMS or analytics integration. The contact form performs native browser validation and reports a local success state only. Navigation uses in-page anchors. These boundaries keep the solution aligned with the challenge's mock-data requirement.
