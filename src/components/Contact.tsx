import { useTheme } from "./ThemeContext"; // Assuming you have a context for theme management
import "./Contact.css";

const Contact = () => {
  const { isDarkMode } = useTheme(); // Assuming isDarkMode is provided by your theme context

  return (
    <div className={`contact-container ${isDarkMode ? "dark" : "light"}`}>
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>If you’d like to reach out, feel free to get in touch!</p>
      </div>

      {/* Email Section */}
      <div className="email-section">
        <h2>Email</h2>
        <a className="email highlight" href="mailto:lockedbrown@gmail.com">
          lockedbrown@gmail.com
        </a>
      </div>

      {/* Social Media Section */}
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

        {/* Add more social media items here as needed */}
      </div>
    </div>
  );
};

export default Contact;
