import Image from "next/image";
import type { ReactNode } from "react";
import { categories } from "@/data/content";
import { ContactForm } from "@/components/contact-form";

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Eyebrow>LEARN AT YOUR OWN PACE</Eyebrow>
          <h1>
            Build skills that
            <br className="desktop-break" /> actually move you
            <br className="desktop-break" /> forward.
          </h1>
          <p className="hero-description">
            Practical courses taught by people who do the work every day. Learn
            design, technology, business and more, one focused lesson at a time.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#courses">
              Explore courses
            </a>
            <a className="button button-outline" href="#how-it-works">
              See how it works
            </a>
          </div>
          <div className="trust-row">
            <div className="avatar-stack">
              <Image
                src="/images/avatar-alex.jpg"
                alt="Learner avatar"
                width={28}
                height={28}
              />
              <Image
                src="/images/avatar-maya.jpg"
                alt="Learner avatar"
                width={28}
                height={28}
              />
              <Image
                src="/images/avatar-teacher.jpg"
                alt="Learner avatar"
                width={28}
                height={28}
              />
            </div>
            <span>
              Trusted by <strong>24,000+</strong> learners
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-orbit" />
          <div className="hero-photo">
            <Image
              src="/images/hero-student.jpg"
              alt="Student learning at a desk with a laptop"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 48vw"
            />
          </div>
          <div className="floating-course">
            <span className="mini-badge">120+</span>
            <span>expert-led courses</span>
          </div>
          <div className="rating-pill">
            <span className="stars">★★★★★</span>
            <span>4.9 avg rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Categories() {
  return (
    <section className="categories section-pad" id="categories">
      <div className="container">
        <div className="section-intro">
          <Eyebrow>FIND YOUR NEXT SKILL</Eyebrow>
          <h2>
            Learn something worth
            <br className="desktop-break" /> knowing.
          </h2>
          <p>
            Short, practical courses designed around skills you can put to work
            immediately.
          </p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <article className="category-card" key={category.number}>
              <span className="number-tag">{category.number}</span>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <a href="#courses">
                Explore <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedCourse() {
  return (
    <section className="featured" id="courses">
      <div className="container featured-grid">
        <div className="featured-image">
          <Image
            src="/images/featured-course.jpg"
            alt="Designers collaborating around product design sketches and materials"
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
          />
          <span className="featured-label">FEATURED COURSE</span>
        </div>
        <div className="featured-copy">
          <Eyebrow>MOST POPULAR THIS MONTH</Eyebrow>
          <h2>
            Designing products
            <br className="desktop-break" /> people understand.
          </h2>
          <p>
            Learn how to turn complex workflows into simple, intentional product
            experiences through research, structure and thoughtful interaction
            design.
          </p>
          <p className="instructor">with Maya Chen · Senior Product Designer</p>
          <div className="course-tags">
            <span>8 lessons</span>
            <span>2h 40min</span>
            <span>Intermediate</span>
          </div>
          <div className="featured-actions">
            <a className="button button-yellow" href="#contact">
              View course
            </a>
            <a className="text-link" href="#categories">
              Browse all courses <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    number: "STEP 01",
    title: "Choose your focus",
    text: "Find courses based on the skill you want to build, not endless content categories.",
    tone: "blue",
  },
  {
    number: "STEP 02",
    title: "Learn from experience",
    text: "Follow concise lessons created by professionals who use these skills.",
    tone: "coral",
  },
  {
    number: "STEP 03",
    title: "Put it into practice",
    text: "Every course includes practical exercises designed to turn knowledge into action.",
    tone: "yellow",
  },
];
export function HowItWorks() {
  return (
    <section className="how section-pad" id="how-it-works">
      <div className="container">
        <div className="center-intro">
          <Eyebrow>HOW LUMA WORKS</Eyebrow>
          <h2>Less browsing. More learning.</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step" key={step.number}>
              <span className={`step-shape ${step.tone}`} aria-hidden="true" />
              <Eyebrow>{step.number}</Eyebrow>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonial() {
  return (
    <section className="testimonial section-pad">
      <div className="container testimonial-grid">
        <blockquote>
          <span className="quote-mark">“</span>
          <p>
            The lessons are short enough to fit into my week, but detailed
            enough that I actually leave with something I can use.
          </p>
          <footer>
            <Image
              src="/images/avatar-alex.jpg"
              alt="Alex Morgan"
              width={44}
              height={44}
            />
            <span>
              <strong>Alex Morgan</strong>
              <small>Product Manager</small>
            </span>
          </footer>
        </blockquote>
        <div className="stats">
          <div>
            <strong>24K+</strong>
            <span>active learners</span>
          </div>
          <div>
            <strong>120+</strong>
            <span>expert-led courses</span>
          </div>
          <div>
            <strong>92%</strong>
            <span>come back for more</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function People() {
  return (
    <section className="people section-pad" id="people">
      <div className="container people-grid">
        <div className="people-copy">
          <Eyebrow>THE PEOPLE</Eyebrow>
          <h2>
            Meet international
            <br className="desktop-break" /> students &amp; teachers
          </h2>
          <p>
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
            senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
            facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
            urna, faucibus lorem faucibus.
          </p>
          <a className="button button-outline" href="#contact">
            Explore teachers and students
          </a>
        </div>
        <div
          className="people-collage"
          aria-label="A collage showing Luma students and teachers"
        >
          <div className="collage-orbit" aria-hidden="true" />

          <div className="collage-photo photo-one">
            <Image
              src="/images/student-outdoor.jpg"
              alt="Student taking part in an online lesson"
              fill
              sizes="(max-width: 767px) 20vw, 110px"
            />
          </div>

          <div className="collage-photo photo-two">
            <Image
              src="/images/student-study.jpg"
              alt="Student reading and writing in a library"
              fill
              sizes="(max-width: 767px) 20vw, 110px"
            />
          </div>

          <div className="collage-photo photo-three">
            <Image
              src="/images/graduate.jpg"
              alt="Graduate celebrating with a diploma"
              fill
              sizes="(max-width: 767px) 20vw, 110px"
            />
          </div>

          <div className="collage-photo photo-four">
            <Image
              src="/images/student-yellow.jpg"
              alt="Student carrying books outside"
              fill
              sizes="(max-width: 767px) 20vw, 110px"
            />
          </div>

          <div className="collage-photo photo-five">
            <Image
              src="/images/group-learning.jpg"
              alt="Group of students learning together"
              fill
              sizes="(max-width: 767px) 20vw, 110px"
            />
          </div>

          <div className="collage-photo photo-six">
            <Image
              src="/images/student-window.jpg"
              alt="Two students collaborating beside a window"
              fill
              sizes="(max-width: 767px) 20vw, 110px"
            />
          </div>

          <div className="collage-photo photo-seven">
            <Image
              src="/images/online-learning.jpg"
              alt="Student attending an online class"
              fill
              sizes="(max-width: 767px) 20vw, 110px"
            />
          </div>

          <div className="collage-photo photo-eight">
            <Image
              src="/images/student-hijab.jpg"
              alt="Student holding books and a notebook"
              fill
              sizes="(max-width: 767px) 20vw, 110px"
            />
          </div>

          <div className="collage-photo photo-nine">
            <Image
              src="/images/student-desk.jpg"
              alt="Student studying at a desk"
              fill
              sizes="(max-width: 767px) 20vm, 128px"
            />
          </div>

          <div className="collage-photo photo-ten">
            <Image
              src="/images/teacher-online.jpg"
              alt="Student following a lesson on a computer"
              fill
              sizes="(max-width: 767px) 20vw, 110px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="contact section-pad" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <Eyebrow>CONTACT</Eyebrow>
          <h2>Get in touch</h2>
          <p>
            Have a question? We’re here to help. Whether you’re looking for the
            right course, learning with your team or interested in teaching with
            Luma, we’d love to hear from you.
          </p>
          <div className="contact-details">
            <div className="detail-item">
              <span className="detail-icon" aria-hidden="true">
                ✉
              </span>
              <span>
                <strong>Email</strong>
                <a href="mailto:contact@luma.com">contact@luma.com</a>
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-icon" aria-hidden="true">
                ◷
              </span>
              <span>
                <strong>Response Time</strong>
                <small>Up to 24 hours on business days</small>
              </span>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="final-cta">
      <div className="cta-decoration decor-circle" />
      <div className="cta-decoration decor-square" />
      <div className="cta-decoration decor-sun" />
      <div className="container cta-content">
        <div className="cta-avatars">
          <Image src="/images/avatar-alex.jpg" alt="" width={32} height={32} />
          <Image src="/images/avatar-maya.jpg" alt="" width={32} height={32} />
          <Image
            src="/images/avatar-teacher.jpg"
            alt=""
            width={32}
            height={32}
          />
          <Image
            src="/images/avatar-teacher.jpg"
            alt=""
            width={32}
            height={32}
          />
        </div>
        <h2>What will you learn next?</h2>
        <p>Start with one course. Build from there.</p>
        <div className="cta-actions">
          <a className="button button-primary" href="#courses">
            Explore all courses
          </a>
          <a className="button button-light" href="#contact">
            Join Luma
          </a>
        </div>
      </div>
    </section>
  );
}
