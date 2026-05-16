import { useFadeUp } from "../hooks/useFadeUp";

const categories = [
  {
    icon: "⌨️",
    name: "Languages",
    tags: ["Python", "C", "C++", "Assembly", "MATLAB", "Verilog"],
  },
  {
    icon: "🔌",
    name: "Embedded Systems",
    tags: ["I2C", "UART", "GPIO", "Serial Comm", "Microcontroller Programming"],
  },
  {
    icon: "⚡",
    name: "Circuit Design",
    tags: ["Analog Design", "MOSFET/BJT Amplifiers", "Power Supplies", "Digital Logic", "Signal Analysis"],
  },
  {
    icon: "🛠️",
    name: "Tools & Software",
    tags: ["LTspice", "MATLAB", "Keil uVision", "Quartus", "Autodesk Inventor"],
  },
  {
    icon: "🔬",
    name: "Lab Equipment",
    tags: ["Oscilloscope", "Digilent Analog Discovery 2", "Signal Generators"],
  },
  {
    icon: "🧠",
    name: "Concepts",
    tags: ["Signal Processing", "Motor Control", "Real-Time Systems", "DAC/ADC Design", "Logic Synthesis"],
  },
];

export default function Skills() {
  const ref = useFadeUp();

  return (
    <>
      <hr className="divider" />
      <section id="skills" className="section">
        <p className="section__label">02 — Technical Skills</p>
        <h2 className="section__title">What I Work With</h2>
        <div ref={ref} className="skills__grid fade-up">
          {categories.map((cat) => (
            <div key={cat.name} className="skill-cat">
              <div className="skill-cat__icon">{cat.icon}</div>
              <div className="skill-cat__name">{cat.name}</div>
              <div className="skill-tags">
                {cat.tags.map((t) => (
                  <span key={t} className="skill-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
