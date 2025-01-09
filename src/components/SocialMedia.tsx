import React from "react";
import "./SocialMedia.css";

const SocialMedia: React.FC = () => {
  return (
    <div className="social-media-container">
      <a
        href="https://www.linkedin.com/in/billybrown14/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <img
          src="/images/Logos/linkedin.png"
          alt="LinkedIn"
          className="social-logo"
        />
      </a>
      <a
        href="https://github.com/LockedBrown"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <img
          src="/images/Logos/github.png"
          alt="GitHub"
          className="social-logo"
        />
      </a>
      <a
        href="https://x.com/LockedBrown"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <img src="/images/Logos/X.png" alt="Twitter" className="social-logo" />
      </a>
    </div>
  );
};

export default SocialMedia;
