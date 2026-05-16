import { useState } from "react";
import { useFadeUp } from "../hooks/useFadeUp";

export default function Contact() {
  const ref = useFadeUp();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    const mailto = `mailto:aldeeba@mcmaster.ca?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <>
      <hr className="divider" />
      <section id="contact" className="section">
        <p className="section__label">05 — Contact</p>
        <h2 className="section__title">Let's Talk</h2>
        <div ref={ref} className="contact__inner fade-up">
          <div>
            <p className="contact__text">
              I'm always open to new opportunities, collaborations, or just a good
              conversation about engineering. Reach out — I'd love to connect.
            </p>
            <div className="contact__links">
              <a href="mailto:aldeeba@mcmaster.ca" className="contact__link">
                <span className="contact__link-icon">✉</span>
                aldeeba@mcmaster.ca
              </a>
              <a href="tel:5199927261" className="contact__link">
                <span className="contact__link-icon">📞</span>
                519-992-7261
              </a>
              <a
                href="https://linkedin.com/in/abdelrhman-aldeeb-123812360"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
              >
                <span className="contact__link-icon">in</span>
                linkedin.com/in/abdelrhman-aldeeb
              </a>
            </div>
          </div>
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="What's on your mind?"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn--primary" style={{ alignSelf: "flex-start" }}>
              {sent ? "Opening Mail App →" : "Send Message →"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
