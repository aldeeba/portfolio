import { useState } from "react";
import { useFadeUp } from "../hooks/useFadeUp";

const projects = [
  {
    title: "3D Time-of-Flight Scanning System",
    desc: "Microcontroller-based 3D scanning system using a ToF sensor and stepper motor. Implemented I2C communication and UART data streaming to MATLAB for real-time point-cloud visualization with full 360° scanning.",
    tech: ["Embedded C", "MATLAB", "I2C", "UART", "Stepper Motor"],
    images: [
      { src: "/src/assets/2dxprojectCircuit.jpg", caption: "Hardware — TI LaunchPad with ToF sensor & stepper motor" },
      { src: "/src/assets/Tof_Scan1.png", caption: "MATLAB output — corridor scan point cloud" },
      { src: "/src/assets/TofScan2.png", caption: "MATLAB output — room scan point cloud" },
      { src: "/src/assets/PictureofScannedRoom.jpg", caption: "Physical environment that was scanned" },
    ],
  },
  {
    title: "DC Power Supply Design",
    desc: "Regulated DC power supply delivering 3V ±0.1V at 10mA. Implemented rectifier, filter, and regulation stages to minimize ripple. Validated performance via simulation and oscilloscope measurements.",
    tech: ["LTspice", "Analog Design", "Oscilloscope"],
    images: [
      { src: "/src/assets/DC_PowerSupply_LTSPICE.png", caption: "LTspice schematic — full-wave rectifier & filter" },
      { src: "/src/assets/DCPOWER_Supply_Physical_Circuit.jpg", caption: "Physical breadboard implementation" },
    ],
  },
  {
    title: "3-bit Digital-to-Analog Converter",
    desc: "Designed and built a 3-bit DAC with 5V full-scale output. Performed rigorous analysis of gain error, offset error, and differential non-linearity across the full input range.",
    tech: ["Digital Logic", "Analog Design", "Error Analysis"],
    images: [
      { src: "/src/assets/3bitDig2AnalogLT.png", caption: "LTspice schematic — R-2R ladder DAC" },
      { src: "/src/assets/3bitDig2AnalongWiring.jpg", caption: "Physical wiring on breadboard" },
    ],
  },
  {
    title: "MOSFET XOR Logic Gate",
    desc: "Designed and implemented a transistor-level XOR gate using CMOS logic. Measured propagation delay, rise/fall times, and voltage levels to verify correct switching behaviour.",
    tech: ["CMOS", "Logic Design", "Timing Analysis"],
    images: [
      { src: "/src/assets/XOR_LTSpice.png", caption: "LTspice CMOS XOR gate schematic" },
      { src: "/src/assets/XOR_Physical_Circuit.jpg", caption: "Physical CMOS circuit implementation" },
    ],
  },
  {
    title: "Single-Transistor Amplifier",
    desc: "Designed and built a BJT amplifier with less than 10% attenuation and strong linearity. Performed biasing, gain calculations, and full frequency response analysis.",
    tech: ["BJT", "Analog Design", "Frequency Analysis"],
    images: [
      { src: "/src/assets/SingleTransistorAmpLtSPICE.png", caption: "LTspice BJT amplifier schematic" },
      { src: "/src/assets/SingleTransistorAmpPhysical.jpg", caption: "Physical amplifier circuit on breadboard" },
    ],
  },
  {
    title: "Smart AI Grocery List App",
    desc: "AI-powered grocery assistant featuring voice-based interaction. Leverages natural language processing to help users manage shopping lists through spoken commands.",
    tech: ["Python", "AI/NLP", "Voice Interface"],
    images: [],
  },
];

function ProjectImages({ images }) {
  const [active, setActive] = useState(0);
  if (!images.length) return null;

  return (
    <div className="project__gallery">
      <div className="project__gallery-main">
        <img
          src={images[active].src}
          alt={images[active].caption}
          className="project__gallery-img"
        />
        <p className="project__gallery-caption">{images[active].caption}</p>
      </div>
      {images.length > 1 && (
        <div className="project__gallery-thumbs">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`project__thumb ${i === active ? "project__thumb--active" : ""}`}
            >
              <img src={img.src} alt={img.caption} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const ref = useFadeUp();

  return (
    <>
      <hr className="divider" />
      <section id="projects" className="section">
        <p className="section__label">03 — Projects</p>
        <h2 className="section__title">Things I've Built</h2>
        <div ref={ref} className="projects__list fade-up">
          {projects.map((p, i) => (
            <div key={p.title} className="project-card project-card--with-images">
              <div className="project__info">
                <p className="project__num">Project {String(i + 1).padStart(2, "0")}</p>
                <h3 className="project__title">{p.title}</h3>
                <p className="project__desc">{p.desc}</p>
                <div className="project__tech-list">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
              <ProjectImages images={p.images} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
