import React from "react";
import { useTheme } from "./ThemeContext";
import "./AboutMe.css";
import { Link } from "react-router-dom";

const AboutMe: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`about-me-container ${isDarkMode ? "dark" : "light"}`}>
      {/* Banner Section */}
      <div className="about-me-banner">
        <img
          src="/images/Me.jpg"
          alt="Picture of me, Billy Brown"
          className="about-me-banner-image"
        />
        <div className="about-me-banner-text">
          <h1 className="about-me-name highlight">Billy Brown</h1>
          <p className="about-me-title">Cybersecurity & IT Professional</p>
          <Link to={"/Contact"} className="about-me-contact-button">
            Contact Me
          </Link>
        </div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <h2 className="about-title">About</h2>
        <p className="about-description">
          I’m a Cybersecurity graduate with a solid background in IT support,
          networking, and programming. I enjoy solving problems and applying
          what I’ve learned to practical challenges. I am{" "}
          <span className="highlight">
            adaptable, detail-oriented, and focused on getting results
          </span>
          . In 2024, I improved my health and fitness, which strengthened my
          discipline and focus. I’m ready to bring my skills to real-world
          projects and contribute to a team working on meaningful solutions.
        </p>
      </section>

      {/* Skills Section */}
      <section className="about-me-skills">
        <h2 className="about-me-section-title">My Skills</h2>
        <div className="skills-grid">
          {/* Skill Cards */}
          <div className="skill-card">
            <img
              src="/images/Logos/python.png"
              alt="Python Logo"
              className="skill-logo"
            />
            <p className="skill-name">Python</p>
          </div>
          <div className="skill-card">
            <img
              src="/images/Logos/javascript.png"
              alt="JavaScript Logo"
              className="skill-logo"
            />
            <p className="skill-name">JavaScript</p>
          </div>
          <div className="skill-card">
            <img
              src="/images/Logos/C-sharp.png"
              alt="JavaScript Logo"
              className="skill-logo"
            />
            <p className="skill-name">C-Sharp</p>
          </div>
          <div className="skill-card">
            <img
              src="/images/Logos/react.png"
              alt="React Logo"
              className="skill-logo"
            />
            <p className="skill-name">React</p>
          </div>
          <div className="skill-card">
            <img
              src="/images/Logos/html&css.png"
              alt="HTML & CSS Logo"
              className="skill-logo"
            />
            <p className="skill-name">HTML & CSS</p>
          </div>
          <div className="skill-card">
            <img
              src="/images/Logos/linux.png"
              alt="Ubuntu Logo"
              className="skill-logo"
            />
            <p className="skill-name">Linux</p>
          </div>
          <div className="skill-card">
            <img
              src="/images/Logos/github.png"
              alt="Git Logo"
              className="skill-logo"
            />
            <p className="skill-name">Git</p>
          </div>
          <div className="skill-card">
            <img
              src="/images/Logos/unity.png"
              alt="Unity Logo"
              className="skill-logo"
            />
            <p className="skill-name">Unity</p>
          </div>
          <div className="skill-card">
            <img
              src="/images/Logos/sql.png"
              alt="SQL Logo"
              className="skill-logo"
            />
            <p className="skill-name">SQL</p>
          </div>

          <div className="skill-card">
            <img
              src="/images/Logos/metasploit.png"
              alt="Metasploit Logo"
              className="skill-logo"
            />
            <p className="skill-name">Metasploit</p>
          </div>
          <div className="skill-card">
            <img
              src="/images/Logos/wireshark.png"
              alt="Wireshark Logo"
              className="skill-logo"
            />
            <p className="skill-name">Wireshark</p>
          </div>

          <div className="skill-card">
            <img
              src="/images/Logos/virtualbox.png"
              alt="Nmap Logo"
              className="skill-logo"
            />
            <p className="skill-name">VirtualBox</p>
          </div>
        </div>
      </section>
      {/* Work Experience Section */}
      <section className="work-experience-section">
        <h2 className="work-experience-section-title">Work Experience</h2>
        <div className="work-experience-grid">
          <div className="work-experience-card">
            <div className="work-experience-pin">📍</div>
            <h3 className="company-name">University of West London</h3>
            <p className="role highlight">BSc (Hons) Cyber Security</p>
            <p className="duration">2021 - 2024</p>
            <p className="description">
              I developed hands-on cybersecurity skills through projects like
              creating a cybersecurity learning game and working on an ISO 27001
              compliance application for a business. This included producing a
              detailed document outlining security requirements and procedures.
            </p>
          </div>
          <div className="work-experience-card">
            <div className="work-experience-pin">📍</div>
            <h3 className="company-name">Crystal I.T</h3>
            <p className="role highlight">Volunteer</p>
            <p className="duration">2017 - 2018</p>
            <p className="description">
              I supported IT tasks like troubleshooting hardware, assisting with
              networking, and contributing to graphic design. This experience
              helped me develop technical skills and adapt to different
              responsibilities in a small team environment.
            </p>
          </div>
          <div className="work-experience-card">
            <div className="work-experience-pin">📍</div>
            <h3 className="company-name">Cardiff & Vale College</h3>
            <p className="role highlight">Level 2-3 I.T Student</p>
            <p className="duration">2019 - 2021</p>
            <p className="description">
              I built a strong IT foundation by working on projects in web,
              game, and app development, along with technical documentation,
              spreadsheets, and databases. This gave me versatile skills that I
              applied to more specialized fields in my later studies.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section className="contact-me-section">
        <h2 className="contact-me-title">Get In Touch</h2>
        <p className="contact-me-description">
          If you'd like to reach out, whether for a project or to connect, feel
          free to drop me a message.
        </p>
        <div className="contact-me-details">
          <h3>
            Email:{" "}
            <a className="highlight" href="mailto:lockedbrown@gmail.com">
              lockedbrown@gmail.com
            </a>
          </h3>
          <div className="social-media-section">
            <div className="social-media-item">
              <a
                href="https://www.linkedin.com/in/billybrown14/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-link"
              >
                <img
                  src="/images/Logos/linkedin.png"
                  alt="LinkedIn"
                  className="social-media-logo"
                />
                <span>LinkedIn</span>
              </a>
            </div>
            <div className="social-media-item">
              <a
                href="https://github.com/LockedBrown"
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-link"
              >
                <img
                  src="/images/Logos/github.png"
                  alt="GitHub"
                  className="social-media-logo"
                />
                <span>GitHub</span>
              </a>
            </div>
            <div className="social-media-item">
              <a
                href="https://x.com/LockedBrown"
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-link"
              >
                <img
                  src="/images/Logos/X.png"
                  alt="Twitter"
                  className="social-media-logo"
                />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
