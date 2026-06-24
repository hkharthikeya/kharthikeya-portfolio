import { FaGithub, FaLinkedin, FaMicrochip, FaRobot, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn, MdWifi, MdOutlineSpeed } from 'react-icons/md';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container" style={{ position: 'relative' }}>
      
      
      {/* Hero Section */}
      <section className="hero-section hero-layout" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-content">
          <h1 className="hero-title animate-slide-up">BHIMAVARAPU HRUTHWIK KHARTHIKEYA</h1>
          <p className="hero-subtitle animate-slide-up delay-1">Electronics & IoT Developer</p>
  
          <div className="animate-slide-up delay-2" style={{ marginTop: '2rem', marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '800px', backgroundColor: 'var(--bg-color)', padding: '1rem', borderLeft: '8px solid var(--accent-magenta)' }}>
              A highly motivated Electronics & Communication Engineering student pushing the boundaries of hardware design, autonomous systems, and embedded logic. Passionate about turning complex circuitry into functional reality.
            </p>
          </div>
  
          <div className="contact-links animate-slide-up delay-3">
            <a href="mailto:bhruthwik536@gmail.com" className="neo-btn neo-btn-cyan" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MdEmail size={20} /> Email Me
            </a>
            <a href="https://github.com/hkharthikeya" target="_blank" rel="noreferrer" className="neo-btn neo-btn-magenta" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaGithub size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/hkharthikeya" target="_blank" rel="noreferrer" className="neo-btn neo-btn-lime" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaLinkedin size={20} /> LinkedIn
            </a>
            <a href="https://www.instagram.com/hkharthikeya" target="_blank" rel="noreferrer" className="neo-btn neo-btn-pink" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaInstagram size={20} /> Instagram
            </a>
            <div className="neo-btn bg-white" style={{ cursor: 'default', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MdPhone size={20} /> +91 9110544685
            </div>
            <div className="neo-btn bg-white" style={{ cursor: 'default', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MdLocationOn size={20} /> Hyderabad, India
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <img 
          src="/portfolio/hero_image.jpeg" 
          alt="Bhimavarapu Hruthwik Kharthikeya" 
          className="hero-image-placeholder bg-white animate-slide-up delay-4" 
          style={{ padding: 0, width: '100%', maxWidth: '400px', height: 'auto', objectFit: 'contain', flexShrink: 0 }} 
        />
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
        <div className="responsive-grid">
          <div className="neo-box bg-white" style={{ borderTop: '8px solid var(--accent-lime)' }}>
            <FaMicrochip size={40} style={{ marginBottom: '1rem', color: 'var(--accent-lime)' }} />
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Hardware Interfacing</h3>
            <p>Designing seamless interactions between physical components and digital logic using microcontrollers like ESP32 and Arduino.</p>
          </div>
          <div className="neo-box bg-white" style={{ borderTop: '8px solid var(--accent-pink)' }}>
            <FaRobot size={40} style={{ marginBottom: '1rem', color: 'var(--accent-pink)' }} />
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Autonomous Systems</h3>
            <p>Building intelligent, self-guided drones and vehicles leveraging GPS, telemetry, and real-time computer vision.</p>
          </div>
          <div className="neo-box bg-white" style={{ borderTop: '8px solid var(--accent-yellow)' }}>
            <MdWifi size={40} style={{ marginBottom: '1rem', color: 'var(--accent-yellow)' }} />
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
      <section className="animate-slide-up delay-3 responsive-grid-large" style={{ marginBottom: '6rem' }}>

        <div>
          <h2 style={{ display: 'inline-block', backgroundColor: 'var(--accent-cyan)', padding: '0.5rem 1rem', border: 'var(--border-width) solid var(--border-color)', boxShadow: '4px 4px 0px var(--shadow-color)', marginBottom: '2rem' }}>
            Education
          </h2>
          <div className="timeline-item" style={{ borderColor: 'var(--accent-magenta)' }}>
            <span className="timeline-date bg-magenta">2024–2028</span>
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
            Experience & Achievements
          </h2>
          <div className="timeline-item" style={{ borderColor: 'var(--accent-lime)' }}>
            <span className="timeline-date bg-lime">Mar 2026 - Present</span>
            <h4 style={{ marginBottom: '0.2rem' }}>Intern (Department of Robotics)</h4>
            <p>MCEME • Tirumalgiri, Telangana, India (On-site)</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>Exploring and developing practical solutions in robotics engineering and embedded hardware systems.</p>
          </div>
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

      {/* Hardware & Project Gallery */}
      <section className="animate-slide-up delay-4" style={{ marginBottom: '6rem' }}>
        <h2 style={{ display: 'inline-block', backgroundColor: 'var(--accent-lime)', padding: '0.5rem 1rem', border: 'var(--border-width) solid var(--border-color)', boxShadow: '4px 4px 0px var(--shadow-color)', marginBottom: '2rem' }}>
          Hardware & Project Gallery
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((num) => (
            <div key={num} className="neo-box bg-white gallery-item" style={{ padding: '0', overflow: 'hidden', borderTop: '8px solid var(--accent-magenta)', position: 'relative', height: '350px', borderRadius: '15px' }}>
              <Image 
                src={`/portfolio/image_${num}.webp`} 
                alt={`Portfolio Image ${num}`} 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-box" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Let's Connect</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="mailto:bhruthwik536@gmail.com" className="neo-btn bg-white" style={{ padding: '0.5rem 1rem', fontSize: '1rem', color: 'black', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MdEmail size={18} /> Email
            </a>
            <a href="https://github.com/hkharthikeya" target="_blank" rel="noreferrer" className="neo-btn bg-white" style={{ padding: '0.5rem 1rem', fontSize: '1rem', color: 'black', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaGithub size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/hkharthikeya" target="_blank" rel="noreferrer" className="neo-btn bg-white" style={{ padding: '0.5rem 1rem', fontSize: '1rem', color: 'black', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaLinkedin size={18} /> LinkedIn
            </a>
            <a href="https://www.instagram.com/hkharthikeya" target="_blank" rel="noreferrer" className="neo-btn bg-white" style={{ padding: '0.5rem 1rem', fontSize: '1rem', color: 'black', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaInstagram size={18} /> Instagram
            </a>
          </div>
          <div style={{ marginTop: '1rem', opacity: 0.7, fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Bhimavarapu Hruthwik Kharthikeya. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

