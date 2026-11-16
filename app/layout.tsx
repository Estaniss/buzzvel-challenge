import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luma. | Practical learning for curious people",
  description:
    "Build practical skills with focused courses taught by people who do the work every day.",
  applicationName: "Luma Learning",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
