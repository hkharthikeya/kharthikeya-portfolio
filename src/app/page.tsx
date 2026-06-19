export default function Home() {
  return (
    <div className="container" style={{ position: 'relative' }}>
      
      {/* Decorative Background Elements */}
      <div className="decorative-wrapper animate-float" style={{ top: '5%', right: '10%' }}>
        <div className="shape-circle"></div>
      </div>
      <div className="decorative-wrapper animate-float delay-2" style={{ top: '15%', left: '-5%' }}>
        <div className="shape-star">✶</div>
      </div>
      <div className="decorative-wrapper animate-float delay-4" style={{ top: '40%', right: '-2%' }}>
        <div className="shape-star" style={{ color: 'var(--accent-pink)' }}>✺</div>
      </div>

      {/* Hero Section */}
      <section className="hero-section" style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="hero-title animate-slide-up">BHIMAVARAPU HRUTHWIK KHARTHIKEYA</h1>
        <p className="hero-subtitle animate-slide-up delay-1">Electronics & IoT Developer</p>

        <div className="neo-box bg-white animate-slide-up delay-2" style={{ maxWidth: '800px', fontSize: '1.1rem' }}>
          Curious electronics student with strong interest in exploring practical technology systems and solving real-world problems through engineering solutions. Experienced in building projects across IoT systems, embedded platforms, and web-based tools while actively participating in national hackathons and innovation competitions. Demonstrates strong time management by balancing academic work, project development, and a part-time role in media production. Currently working on Trinetra, an initiative focused on accessible security solutions for IoT environments.
        </div>

        <div className="contact-links animate-slide-up delay-3">
          <a href="mailto:bhruthwik536@gmail.com" className="neo-btn neo-btn-cyan">Email Me</a>
          <a href="#" className="neo-btn neo-btn-magenta">GitHub</a>
          <a href="#" className="neo-btn neo-btn-lime">LinkedIn</a>
          <div className="neo-btn bg-white" style={{ cursor: 'default' }}>+91 9110544685</div>
          <div className="neo-btn bg-white" style={{ cursor: 'default' }}>Hyderabad, India</div>
        </div>
      </section>

      {/* Dynamic Marquee */}
      <div className="marquee-container animate-slide-up delay-4">
        <div className="marquee-content">
          <span className="marquee-item">IoT Solutions</span>
          <span className="marquee-item">Embedded Systems</span>
          <span className="marquee-item">Web Development</span>
          <span className="marquee-item">Hardware Prototyping</span>
          <span className="marquee-item">IoT Solutions</span>
          <span className="marquee-item">Embedded Systems</span>
          <span className="marquee-item">Web Development</span>
          <span className="marquee-item">Hardware Prototyping</span>
        </div>
      </div>

      {/* What I Do / Core Focus */}
      <section className="animate-slide-up delay-1" style={{ marginBottom: '6rem' }}>
        <h2 style={{ display: 'inline-block', backgroundColor: 'var(--accent-cyan)', padding: '0.5rem 1rem', border: 'var(--border-width) solid var(--border-color)', boxShadow: '4px 4px 0px var(--shadow-color)' }}>
          Core Focus
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div className="neo-box bg-white" style={{ borderTop: '8px solid var(--accent-lime)' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Hardware Interfacing</h3>
            <p>Designing seamless interactions between physical components and digital logic using microcontrollers like ESP32 and Arduino.</p>
          </div>
          <div className="neo-box bg-white" style={{ borderTop: '8px solid var(--accent-pink)' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Autonomous Systems</h3>
            <p>Building intelligent, self-guided drones and vehicles leveraging GPS, telemetry, and real-time computer vision.</p>
          </div>
          <div className="neo-box bg-white" style={{ borderTop: '8px solid var(--accent-yellow)' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>IoT Connectivity</h3>
            <p>Connecting edge devices to cloud infrastructure (like Firebase) for real-time monitoring, alerts, and remote control.</p>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="animate-slide-up delay-2" style={{ marginBottom: '6rem' }}>
        <h2 style={{ display: 'inline-block', backgroundColor: 'var(--accent-pink)', padding: '0.5rem 1rem', border: 'var(--border-width) solid var(--border-color)', boxShadow: '4px 4px 0px var(--shadow-color)' }}>
          Technical Skills
        </h2>
        <div className="skills-grid" style={{ marginTop: '2rem' }}>
          <div className="neo-box bg-cyan">
            <h3>Programming</h3>
            <div className="skill-tag">C</div>
            <div className="skill-tag">C++</div>
            <div className="skill-tag">Python</div>
          </div>
          <div className="neo-box bg-magenta" style={{ color: 'white' }}>
            <h3>Web Technologies</h3>
            <div className="skill-tag" style={{ color: 'black' }}>HTML (Basic)</div>
          </div>
          <div className="neo-box bg-lime">
            <h3>IoT & Embedded</h3>
            <div className="skill-tag">ESP32</div>
            <div className="skill-tag">Arduino</div>
            <div className="skill-tag">Raspberry Pi</div>
            <div className="skill-tag">Pixhawk</div>
          </div>
          <div className="neo-box bg-yellow">
            <h3>Cloud & Infra</h3>
            <div className="skill-tag">Docker</div>
            <div className="skill-tag">Firebase</div>
          </div>
          <div className="neo-box bg-orange">
            <h3>Tools & Docs</h3>
            <div className="skill-tag">Git</div>
            <div className="skill-tag">VS Code</div>
            <div className="skill-tag">KiCad</div>
            <div className="skill-tag">LaTeX</div>
          </div>
          <div className="neo-box bg-pink">
            <h3>Other Tools</h3>
            <div className="skill-tag">AutoCAD (Basic)</div>
            <div className="skill-tag">DaVinci Resolve</div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="animate-slide-up delay-2" style={{ marginBottom: '6rem' }}>
        <h2 style={{ display: 'inline-block', backgroundColor: 'var(--accent-lime)', padding: '0.5rem 1rem', border: 'var(--border-width) solid var(--border-color)', boxShadow: '4px 4px 0px var(--shadow-color)' }}>
          Projects
        </h2>
        <div className="projects-list" style={{ marginTop: '2rem' }}>

          <div className="neo-box bg-white project-card">
            <h3>Niyantra – Zone-Based Vehicle Speed Limiting System</h3>
            <ul>
              <li style={{ marginLeft: '1.5rem', marginBottom: '0.5rem' }}>Developed an ESP32-based vehicle speed control system using PWM and L298N for safe zone speed limiting.</li>
              <li style={{ marginLeft: '1.5rem' }}>Integrated Bluetooth control with adaptive speed regulation for smart transportation safety.</li>
            </ul>
          </div>

          <div className="neo-box bg-white project-card">
            <h3>Trinetra – Autonomous Surveillance & Monitoring Drone System</h3>
            <ul>
              <li style={{ marginLeft: '1.5rem', marginBottom: '0.5rem' }}>Built a Pixhawk-based quadcopter with GPS autonomous navigation.</li>
              <li style={{ marginLeft: '1.5rem' }}>Integrated camera and telemetry for live monitoring and stable flight.</li>
            </ul>
          </div>

          <div className="neo-box bg-white project-card">
            <h3>Suspicious Human Detection & Tracking System</h3>
            <ul>
              <li style={{ marginLeft: '1.5rem', marginBottom: '0.5rem' }}>Developed a YOLO-based computer vision system for real-time human detection and tracking.</li>
              <li style={{ marginLeft: '1.5rem' }}>Implemented alerts for abnormal behavior using Python and OpenCV for live surveillance monitoring.</li>
            </ul>
          </div>

          <div className="neo-box bg-white project-card">
            <h3>Smart Garbage Monitoring & Collection Optimization System</h3>
            <ul>
              <li style={{ marginLeft: '1.5rem', marginBottom: '0.5rem' }}>Developed an IoT-based waste management system using ESP32 and ultrasonic sensor for real-time bin monitoring.</li>
              <li style={{ marginLeft: '1.5rem' }}>Implemented alerts and optimized garbage collection using data-driven scheduling.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Experience / Timeline */}
      <section className="animate-slide-up delay-3" style={{ marginBottom: '6rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

        <div>
          <h2 style={{ display: 'inline-block', backgroundColor: 'var(--accent-cyan)', padding: '0.5rem 1rem', border: 'var(--border-width) solid var(--border-color)', boxShadow: '4px 4px 0px var(--shadow-color)', marginBottom: '2rem' }}>
            Education
          </h2>
          <div className="timeline-item">
            <span className="timeline-date">2024–2028</span>
            <h4 style={{ marginBottom: '0.2rem' }}>CMR College of Engineering and Technology</h4>
            <p>B.Tech – Electronics and Communication Engineering</p>
            <strong>CGPA: 8.55 / 10</strong>
          </div>
          <div className="timeline-item">
            <span className="timeline-date">2022–2024</span>
            <h4 style={{ marginBottom: '0.2rem' }}>SASI Junior College</h4>
            <p>Intermediate – 911 / 1000</p>
          </div>
          <div className="timeline-item">
            <span className="timeline-date">2022</span>
            <h4 style={{ marginBottom: '0.2rem' }}>St. Ann's Educational Institutions</h4>
            <p>SSC – CGPA: 72.83 / 10</p>
          </div>
        </div>

        <div>
          <h2 style={{ display: 'inline-block', backgroundColor: 'var(--accent-yellow)', padding: '0.5rem 1rem', border: 'var(--border-width) solid var(--border-color)', boxShadow: '4px 4px 0px var(--shadow-color)', marginBottom: '2rem' }}>
            Achievements
          </h2>
          <div className="neo-box bg-white">
            <ul style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><strong>4th Place</strong> – Gist 2K26 National Hackathon, Sreenidhi Institute of Science and Technology (SNIST)</li>
              <li><strong>5th Place</strong> – Forge Inspira, Indian Institute(s) of Technology (IIT)</li>
              <li>Participated in more than 10 hackathons and technical competitions.</li>
            </ul>
          </div>

          <h2 style={{ display: 'inline-block', backgroundColor: 'var(--accent-magenta)', padding: '0.5rem 1rem', border: 'var(--border-width) solid var(--border-color)', boxShadow: '4px 4px 0px var(--shadow-color)', marginBottom: '2rem', marginTop: '1rem', color: 'white' }}>
            Leadership
          </h2>
          <div className="timeline-item" style={{ borderColor: 'var(--accent-cyan)' }}>
            <span className="timeline-date bg-yellow">2026</span>
            <h4 style={{ marginBottom: '0.2rem' }}>Coordinator – Circutronix 2026 & Azura 2026</h4>
            <p>CMR College of Engineering and Technology</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>Assisted multiple teams with circuit design and architecture decisions, debugging, and technical problem solving during the events ensuring they progressed smoothly and on time.</p>
          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="footer-box">
        <h3 style={{ color: 'var(--accent-yellow)' }}>Declaration</h3>
        <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
          I hereby declare that all the information provided above is true and correct to the best of my knowledge and belief. No material fact has been concealed, and I take full responsibility for the accuracy of the details provided herein.
        </p>
        <div style={{ marginTop: '2rem', fontWeight: 'bold' }}>
          April 25, 2026 • Hyderabad, India
        </div>
      </footer>
    </div>
  );
}

