export default function Hero() {
  return (
    <section id="hero" style={{ position: "relative" }}>
      <div className="hero__bg" />
      <div className="hero">
        <div>
          <p className="hero__tag">Computer Engineering Student · McMaster University</p>
          <h1 className="hero__name">
            Abdelrhman<br />
            <em>Aldeeb</em>
          </h1>
          <p className="hero__sub">
            Building at the intersection of hardware and software  from embedded systems
            and circuit design to AI-powered applications.
          </p>
          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              View Projects ↓
            </a>
            <a href="#contact" className="btn btn--outline">
              Get in Touch
            </a>
          </div>
        </div>
        <div className="hero__scroll">
          <div className="hero__scroll-line" />
          <span>Scroll</span>
        </div>
      </div>
    </section>
  );
}
