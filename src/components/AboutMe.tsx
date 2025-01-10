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
          alt="John Doe"
          className="about-me-banner-image"
        />
        <div className="about-me-banner-text">
          <h1 className="about-me-name highlight">Billy Brown</h1>
          <p className="about-me-title">
            Cybersecurity & IT Professional | Game Developer
          </p>
          <Link to={"/Contact"} className="about-me-contact-button">
            Contact Me
          </Link>
        </div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <h2 className="about-title">About</h2>
        <p className="about-description">
          As a Cybersecurity graduate with a strong foundation in IT support,
          networking, and programming, I have developed a passion for creating
          secure and efficient solutions. I thrive on tackling complex
          challenges and continuously learning to stay ahead in the rapidly
          evolving tech landscape. I am{" "}
          <span className="highlight">
            adaptable, detail-oriented, and a collaborative problem-solver
          </span>
          . Beyond my professional life, I've committed to improving my health
          and fitness, having successfully transformed my lifestyle over 2024.
          This journey has taught me discipline, perseverance, and the
          importance of a balanced life. Excited to apply my academic knowledge
          and skills to real-world projects, I am eager to contribute to a team
          of driven professionals and grow within the industry.
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
              At the University of West London, I gained hands-on experience in
              Cyber Security through various projects. My final dissertation
              involved developing a cybersecurity learning game, and I also
              worked with a team to create an ISO 27001 compliance application
              for a business, producing a comprehensive 35,000-word document
              detailing security requirements and procedures.
            </p>
          </div>
          <div className="work-experience-card">
            <div className="work-experience-pin">📍</div>
            <h3 className="company-name">Crystal I.T</h3>
            <p className="role highlight">Volunteer</p>
            <p className="duration">2017 - 2018</p>
            <p className="description">
              While volunteering at Crystal I.T, I shadowed the graphic designer
              and assisted with various IT tasks in a small company environment,
              such as networking, graphic design, and I.T support. This
              experience gave me exposure to a wide range of tasks, from
              troubleshooting hardware issues to working on visual design
              elements, while further developing my technical and communication
              skills.
            </p>
          </div>
          <div className="work-experience-card">
            <div className="work-experience-pin">📍</div>
            <h3 className="company-name">Cardiff & Vale College</h3>
            <p className="role highlight">Level 2-3 I.T Student</p>
            <p className="duration">2019 - 2021</p>
            <p className="description">
              As part of my Foundation for Information Technology course, I
              learned the fundamentals of various IT disciplines to help me
              discover my preferred area of expertise. This included project
              planning and design, as well as gaining experience in web, game,
              and app development. I also focused on technical documentation
              writing, creating spreadsheets and databases, and managing
              reports. This course helped me build a strong foundational
              understanding of IT, giving me a broad skill set that I could
              apply to more specialized fields in my further studies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
