// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeContext";
import ProjectList from "./components/ProjectList";
import ProjectDetails from "./components/ProjectDetails";
import AboutMe from "./components/AboutMe";
import { DataProvider } from "./components/Data"; // Import DataProvider
import "./global.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <DataProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/:project" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </DataProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
