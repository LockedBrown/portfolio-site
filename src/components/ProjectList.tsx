import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeContext"; // Use the shared theme context
import { useData } from "./Data"; // Import the useData hook from Data.tsx
import "./ProjectList.css";

const ProjectList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const { isDarkMode } = useTheme(); // Use the context for theme management
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { projects } = useData(); // Access the projects data from the context

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      scrollUp();
    } else if (e.key === "ArrowDown") {
      scrollDown();
    }
  };

  const handleWheel = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      scrollDown();
    } else {
      scrollUp();
    }
  };

  const scrollUp = () => {
    triggerFade(() => {
      setCurrentIndex(
        (prev) =>
          (prev - 1 + Object.keys(projects).length) %
          Object.keys(projects).length
      );
    });
  };

  const scrollDown = () => {
    triggerFade(() => {
      setCurrentIndex((prev) => (prev + 1) % Object.keys(projects).length);
    });
  };

  const handleMouseHover = (index: number) => {
    setCurrentIndex(index);
  };

  const handleClick = (link: string) => {
    navigate(`/${link}`); // Navigate to the project link
  };

  const triggerFade = (callback: () => void) => {
    setIsFading(true);
    const nextImage = new Image();
    const projectKey =
      Object.keys(projects)[(currentIndex + 1) % Object.keys(projects).length];
    nextImage.src = projects[projectKey].main_image; // Preload the next image

    nextImage.onload = () => {
      setTimeout(() => {
        callback();
        setIsFading(false);
      }, 100); // Adjust the delay time as needed
    };
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className={`project-list-container ${isDarkMode ? "dark" : "light"}`}>
      <div className="project-list">
        {/* Portfolio Title */}
        {Object.keys(projects).map((key, index) => {
          const project = projects[key];
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className={`project-item ${isActive ? "active" : ""}`}
              onClick={() => handleClick(project.link)} // Navigate on click
              onMouseEnter={() => handleMouseHover(index)}
            >
              {project.title}
            </div>
          );
        })}
      </div>

      <div className="project-image">
        <img
          src={projects[Object.keys(projects)[currentIndex]].main_image}
          alt={projects[Object.keys(projects)[currentIndex]].title}
          className={`image ${isFading ? "fade" : ""}`}
        />
        <div className="project-info">
          <h2>{projects[Object.keys(projects)[currentIndex]].title}</h2>
          <p>
            {projects[Object.keys(projects)[currentIndex]].basic_description}
          </p>
          <p>
            <strong>Technology:</strong>{" "}
            {projects[Object.keys(projects)[currentIndex]].tech}
          </p>
          <Link to={`/${projects[Object.keys(projects)[currentIndex]].link}`}>
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
