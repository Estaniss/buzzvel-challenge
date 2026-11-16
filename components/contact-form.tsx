"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setError("");
    setSubmitted(true);
    form.reset();
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <h3>Contact us</h3>
        <p>Fill out the fields and we will get in touch.</p>
      </div>
      {submitted && (
        <p className="form-feedback success" role="status">
          Thanks for reaching out! We’ll be in touch soon.
        </p>
      )}
      {error && (
        <p className="form-feedback error" role="alert">
          {error}
        </p>
      )}
      <label htmlFor="full-name">Full Name</label>
      <input
        id="full-name"
        name="name"
        placeholder="Your name"
        autoComplete="name"
        required
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="you@example.com"
        autoComplete="email"
        required
      />
      <label htmlFor="message">Your question</label>
      <textarea
        id="message"
        name="message"
        placeholder="Tell us how we can help..."
        rows={4}
        required
      />
      <button className="button button-primary submit-button" type="submit">
        Send message
      </button>
    </form>
  );
}
