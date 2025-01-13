import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the project type
type Project = {
  title: string; // Title of Project
  basic_description: string; // Used for ProjectList - only brief
  deep_description: string; // Used for ProjectDetails - in-depth
  learned: string; // What I learnt
  do_different: string; // What I would do different
  tech: string; // Techology used
  main_image: string; // Used for ProjectList Image - Front Image
  images: string[]; // Used for Image Carousel in ProjectDetails
  link: string; // link to project !! has to match project name
};

// Define the context type
interface DataContextType {
  projects: { [key: string]: Project };
  setProjects: React.Dispatch<React.SetStateAction<{ [key: string]: Project }>>;
}

// Define the DataProvider props to include children
interface DataProviderProps {
  children: ReactNode;
}

// Create the context with default values (empty project data initially)
const DataContext = createContext<DataContextType | undefined>(undefined);

// Create a provider component to wrap the app and give access to the data context
export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  // Sample project data
  const [projects, setProjects] = useState<{ [key: string]: Project }>({
    "cybersecurity-game": {
      title: "Cyber Security Learning Game",
      basic_description:
        "A gamified learning tool designed to upskill Welsh lower-level teachers in basic cybersecurity concepts.",

      deep_description:
        "A gamified learning tool designed to upskill Welsh lower-level teachers in basic cybersecurity concepts following the introduction of the new Welsh Curriculum. The game covers essential topics such as password management, phishing awareness, and data protection in a fun and interactive way",
      tech: "Unity, C#, GIMP",
      learned:
        "During this project I learnt: How to search for existing resources & find gaps, how to gather user feedback and implement it",
      do_different:
        "Didn't have access to up-to-date data and had to make estimations, I would contact Teachers for feedback to get a better idea of the situation and which would have a produced a better outcome",
      main_image: "/images/CyberGame/CyberGame1.PNG",
      images: [
        "/images/CyberGame/Cybersecurity Basics.mp4",
        "/images/CyberGame/CyberGame1.PNG",
        "/images/CyberGame/CyberGame2.PNG",
        "/images/CyberGame/CyberGame3.PNG",
        "/images/CyberGame/CyberGame4.PNG",
        "/images/CyberGame/CyberGame5.PNG",
        "/images/CyberGame/CyberGame6.PNG",
        "/images/CyberGame/CyberGame7.PNG",
        "/images/CyberGame/CyberGame8.PNG",
      ],
      link: "cybersecurity-game",
    },
    hammurabi: {
      title: "Hammurabi - C# Form Game",
      basic_description:
        "One of my early programming projects, in this project I learned how to make reusuble methods & functions in order to declutter my program.",
      deep_description:
        "Created in Visual Studio using C#, It was my first programming project, it recreates the web game Hammurabi / Story, It's a basic concept, how long can you last? Feed your people, buy & sell land, while fighting starvation and new coming city members.",
      main_image: "/images/Hammurabi/Hammurabi1.JPG",
      learned:
        "One of my early programming projects, in this project I learned how to make reusuble methods & functions in order to declutter my program.",
      do_different:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem nulla ab eum totam ut odio magni voluptatum atque asperiores tempora!",
      tech: "Visual Studio, C#",
      images: [
        "/images/Hammurabi/Hammurabi1.JPG",
        "/images/Hammurabi/Hammurabi2.JPG",
        "/images/Hammurabi/Hammurabi3.JPG",
      ],
      link: "hammurabi",
    },
    "meteor-invaders": {
      title: "Meteor Invaders - C# Form Game",
      basic_description:
        "A basic Invaders game, a second project of mine, where I learned classes, and use them with methods and functions to make a playable character, and a shop to change the players stats.",
      deep_description:
        "This platform allows users to create, manage, and collaborate on projects in real-time, featuring task tracking and document sharing.",
      main_image: "/images/Meteor-Invaders/meteor-invaders1.JPG",
      learned:
        "One of my early programming projects, in this project I learned how to make reusuble methods & functions in order to declutter my program.",
      do_different:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem nulla ab eum totam ut odio magni voluptatum atque asperiores tempora!",
      tech: "Visual Studio, C#",
      images: [
        "/images/Meteor-Invaders/meteor_invaders.mp4",
        "/images/Meteor-Invaders/meteor-invaders1.JPG",
        "/images/Meteor-Invaders/meteor-invaders2.JPG",
      ],
      link: "meteor-invaders",
    },
  });

  return (
    <DataContext.Provider value={{ projects, setProjects }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to access the project data from anywhere
export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
