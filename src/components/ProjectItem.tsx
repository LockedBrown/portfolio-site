interface ProjectItemProps {
  title: string;
  background: string;
  onClick: () => void;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, onClick }) => {
  return (
    <div
      className="project-item"
      style={{
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default ProjectItem;
