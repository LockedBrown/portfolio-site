import { useParams, Link } from "react-router-dom";
import { useTheme } from "./ThemeContext"; // Use the shared theme context
import { useData } from "./Data"; // Import the useData hook from Data.tsx
import "./ProjectDetails.css";
import ImageCarousel from "./ImageCarousel";

const ProjectDetails = () => {
  const { project } = useParams();

  const { projects } = useData();

  const projectData = projects[project as keyof typeof projects];

  const { isDarkMode } = useTheme(); // Access isDarkMode and toggleTheme from context

  // If no project data is found, show a not found message
  if (!projectData) {
    return (
      <div className={`not-found-container ${isDarkMode ? "dark" : "light"}`}>
        <h1 className="not-found-title">Project Not Found</h1>
        <p className="not-found-message">
          Sorry, we couldn't find the project you're looking for.
        </p>
        <Link to="/projects" className="back-to-home-link">
          Go Back to Project List
        </Link>
      </div>
    );
  }

  // Return the project details with the image carousel and other data
  return (
    <div className={`details-container ${isDarkMode ? "dark" : "light"}`}>
      <ImageCarousel images={projectData.images} />
      <h1 className="project-title">{projectData.title}</h1>
      <p className="project-description">{projectData.deep_description}</p>
      <p className="project-technologies">{projectData.tech}</p>
      <Link to="/projects" className="back-to-home-link">
        Go Back to Project List
      </Link>
    </div>
  );
};

export default ProjectDetails;
