import { useFadeUp } from "../hooks/useFadeUp";

const experiences = [
  {
    role: "Soccer Coach",
    org: "Future Star Academy · Cambridge, ON",
    date: "May 2025 – Aug. 2025",
    bullets: [
      "Developed structured training programs that measurably improved player performance and teamwork.",
      "Led and mentored a team of 20 players across weekly sessions and competitive matches.",
    ],
  },
  {
    role: "Link Crew Leader",
    org: "Saint Benedict C.S.S. · Cambridge, ON",
    date: "Aug. 2023 – Jul. 2024",
    bullets: [
      "Mentored incoming Grade 9 students through structured orientation and transition programs.",
      "Facilitated large-group activities designed to build school community and reduce transition anxiety.",
    ],
  },
  {
    role: "Teacher Assistant",
    org: "International School of Cambridge · Cambridge, ON",
    date: "Dec. 2022 – Jan. 2024",
    bullets: [
      "Provided targeted one-on-one academic support to students across multiple subject areas.",
      "Collaborated with lead teachers to adapt lesson plans for diverse learning needs.",
    ],
  },
  {
    role: "Summer Camp Counselor",
    org: "International School of Cambridge · Cambridge, ON",
    date: "Jul. 2023 – Aug. 2023",
    bullets: [
      "Led daily activities and educational programming for groups of children.",
      "Maintained a safe, inclusive, and engaging environment throughout the summer program.",
    ],
  },
];

export default function Experience() {
  const ref = useFadeUp();

  return (
    <>
      <hr className="divider" />
      <section id="experience" className="section">
        <p className="section__label">04 — Experience</p>
        <h2 className="section__title">Where I've Been</h2>
        <div ref={ref} className="exp__list fade-up">
          {experiences.map((e) => (
            <div key={e.role} className="exp-item">
              <div className="exp__header">
                <h3 className="exp__role">{e.role}</h3>
                <span className="exp__date">{e.date}</span>
              </div>
              <p className="exp__org">{e.org}</p>
              <ul className="exp__bullets">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
