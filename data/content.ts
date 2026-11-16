import type { CourseCategory, FooterColumn } from "@/types";

export const categories: CourseCategory[] = [
  { number: "01", title: "Product Design", description: "Turn complex problems into clear, useful experiences." },
  { number: "02", title: "Technology", description: "Build a stronger understanding of the tools shaping digital products." },
  { number: "03", title: "Business", description: "Develop practical skills for better decisions and stronger teams." },
  { number: "04", title: "Creative", description: "Explore new ways to communicate, create and tell stories." },
];

export const footerColumns: FooterColumn[] = [
  { title: "EXPLORE", links: [{ label: "Courses", href: "#courses" }, { label: "Categories", href: "#categories" }, { label: "Instructors", href: "#people" }, { label: "For Teams", href: "#contact" }] },
  { title: "COMPANY", links: [{ label: "About", href: "#about" }, { label: "Careers", href: "#contact" }, { label: "Journal", href: "#about" }] },
  { title: "SUPPORT", links: [{ label: "Help Center", href: "#contact" }, { label: "Contact", href: "#contact" }, { label: "Terms", href: "#footer" }, { label: "Privacy", href: "#footer" }] },
];
