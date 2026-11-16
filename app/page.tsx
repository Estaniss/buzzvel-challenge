import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Categories,
  Contact,
  FeaturedCourse,
  FinalCta,
  Hero,
  HowItWorks,
  People,
  Testimonial,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedCourse />
        <HowItWorks />
        <Testimonial />
        <People />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
