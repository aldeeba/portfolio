import { useFadeUp } from "../hooks/useFadeUp";

const stats = [
  { num: "3.8", label: "GPA" },
  { num: "6+", label: "Projects Built" },
  { num: "2029", label: "Graduating" },
  { num: "2+", label: "Years Experience" },
];

export default function About() {
  const ref = useFadeUp();

  return (
    <>
      <hr className="divider" />
      <section id="about" className="section">
        <p className="section__label">01 — About</p>
        <h2 className="section__title">Who I Am</h2>
        <div ref={ref} className="about__grid fade-up">
          <div className="about__left">
            <div className="about__pfp-wrap">
              <img
                src="/src/assets/Portfoliopfp.jpg"
                alt="Abdelrhman Aldeeb"
                className="about__pfp"
              />
            </div>
            <div className="about__text">
              <p>
                I'm a <strong>Computer Engineering student at McMaster University</strong>,
                currently in my first year with a GPA of 3.8. I thrive at the crossover
                between hardware and software designing circuits, programming microcontrollers,
                and building intelligent software systems.
              </p>
              <p>
                My hands-on project experience spans <strong>embedded C, MATLAB, LTspice, and Python</strong>,
                covering everything from 3D sensing hardware to AI-powered applications.
              </p>
              <p>
                Outside engineering, I bring leadership instincts from coaching soccer,
                running orientation programs, and mentoring younger students skills that
                make me a stronger collaborator on any technical team.
              </p>
              <div style={{ marginTop: 32 }}>
                <a
                  href="mailto:aldeeba@mcmaster.ca"
                  className="btn btn--primary"
                  style={{ display: "inline-flex" }}
                >
                  Contact Me →
                </a>
              </div>
            </div>
          </div>
          <div className="about__stats">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <div className="stat__num">{s.num}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
