import React from "react";
import { useTheme } from "./ThemeContext";
import "./AboutMe.css";
import { useData } from "./Data";

const AboutMe: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { projects } = useData();

  return (
    <div className={`body-container ${isDarkMode ? "dark" : "light"}`}>
      <div className="about-page-container">
        {/* Banner Section */}
        <div className="about-section-banner">
          <div className="about-section-banner-text">
            <h1 className="about-section-name highlight">Billy Brown</h1>
            <p className="about-section-title">
              Cybersecurity & IT Professional | Cardiff, Wales
            </p>
            <div className="title-bar"></div>

            <p className="about-section-description">
              {" "}
              I'm a First Class Honours Cybersecurity graduate with experience
              in IT support, networking, and programming.{" "}
              <span className="highlight">
                Focused, disciplined, and ready to bring my skills to real-world
                projects.
              </span>{" "}
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <section className="skills-section">
          <h2 className="skills-section-title">My Skills</h2>
          <div className="skills-grid">
            {/* Skill Cards */}
            {[
              { src: "/images/Logos/python.png", name: "Python" },
              { src: "/images/Logos/javascript.png", name: "JavaScript" },
              { src: "/images/Logos/C-sharp.png", name: "C-Sharp" },
              { src: "/images/Logos/react.png", name: "React" },
              { src: "/images/Logos/html&css.png", name: "HTML & CSS" },
              { src: "/images/Logos/linux.png", name: "Linux" },
              { src: "/images/Logos/github.png", name: "Git" },
              { src: "/images/Logos/unity.png", name: "Unity" },
              { src: "/images/Logos/sql.png", name: "SQL" },
              { src: "/images/Logos/metasploit.png", name: "Metasploit" },
              { src: "/images/Logos/wireshark.png", name: "Wireshark" },
              { src: "/images/Logos/virtualbox.png", name: "VirtualBox" },
            ].map((skill, index) => (
              <div className="skill-card" key={index}>
                <img
                  src={skill.src}
                  alt={`${skill.name} Logo`}
                  className="skill-logo"
                />
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="experience-section">
          <h2 className="experience-section-title">Experience</h2>
          <div className="experience-grid">
            {/* University of West London */}
            <div className="experience-card">
              <div className="experience-pin">📍</div>
              <h3 className="company-name">University of West London</h3>
              <p className="role highlight">BSc (Hons) Cyber Security</p>
              <p className="duration">2021 - 2024</p>
              <p className="description">
                Expanded my knowledge of computer science theory, while working
                on projects such as a cybersecurity learning game, deploying
                honeypots, and collaborating on a web store, etc..
              </p>

              {/* Technologies Section */}
              <div className="technologies">
                <div className="tech-tag">Programming</div>
                <div className="tech-tag">Unity</div>
                <div className="tech-tag">VirtualBox</div>
                <div className="tech-tag">Wireshark</div>
              </div>
            </div>

            {/* Cardiff & Vale College */}
            <div className="experience-card">
              <div className="experience-pin">📍</div>
              <h3 className="company-name">Cardiff & Vale College</h3>
              <p className="role highlight">Level 2-3 I.T Student</p>
              <p className="duration">2018 - 2021</p>
              <p className="description">
                I built a strong IT foundation by working on projects in web,
                game, and app development, along with technical documentation.
              </p>

              {/* Technologies Section */}
              <div className="technologies">
                <div className="tech-tag">Fundamentals</div>
                <div className="tech-tag">Office</div>
                <div className="tech-tag">C-Family</div>
              </div>
            </div>

            {/* Crystal I.T */}
            <div className="experience-card">
              <div className="experience-pin">📍</div>
              <h3 className="company-name">Crystal I.T</h3>
              <p className="role highlight">Volunteer</p>
              <p className="duration">2017 - 2018 - 6 Months</p>
              <p className="description">
                Helping with troubleshooting hardware, assisting with
                networking, and basic graphic design.
              </p>

              {/* Technologies Section */}
              <div className="technologies">
                <div className="tech-tag">Networking</div>
                <div className="tech-tag">Hardware</div>
                <div className="tech-tag">Graphic Design</div>
              </div>
            </div>

            {/* British Heart */}
            <div className="experience-card">
              <div className="experience-pin">📍</div>
              <h3 className="company-name">British Heart Foundation</h3>
              <p className="role highlight">Volunteer</p>
              <p className="duration">2018 - 2018 - 4 Months</p>
              <p className="description">
                Customer Service, basic store operations, item tagging.
              </p>

              {/* Technologies Section */}
              <div className="technologies">
                <div className="tech-tag">Customer Service</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="about-page-projects-section">
          <h2 className="about-page-projects-section-title">My Projects</h2>
          <div className="about-page-projects-grid">
            {Object.keys(projects).map((key) => {
              const project = projects[key];
              return (
                <a
                  href={`/${project.link}`}
                  className="about-page-projects-card"
                  key={key}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="about-page-projects-image-container">
                    <img
                      src={project.main_image}
                      alt={`${project.title} Thumbnail`}
                      className="about-page-projects-image"
                    />
                  </div>
                  <div className="about-page-projects-details">
                    <h3 className="about-page-projects-title">
                      {project.title}
                    </h3>
                    <p className="about-page-projects-description">
                      {project.basic_description}
                    </p>
                    <div className="about-page-projects-tech">
                      {project.tech.split(", ").map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Contact Me Section */}
        <section className="contact-section">
          <h2 className="contact-title">Get In Touch</h2>
          <div className="title-bar"></div>
          <p className="contact-description">
            If you'd like to reach out, whether for a project or to connect,
            feel free to drop me a message.
          </p>
          <div className="contact-details">
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
                  <span>X</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
