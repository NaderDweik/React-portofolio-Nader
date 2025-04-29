import React, { useState, useEffect } from "react";
import "./main.css";
import projectsData from "../../projects"; // Import the projects array
const Main = () => {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    if (activeCategory === "all") {
      setProjects(projectsData);
    } else {
      setProjects(
        projectsData.filter((project) => project.category === activeCategory)
      );
    }
  }, [activeCategory]);

  return (
    <main className="flex">
      <section className="flex left-section">
        <button
          className={activeCategory === "all" ? "active" : ""}
          onClick={() => setActiveCategory("all")}
        >
          All Projects
        </button>
        <button
          className={activeCategory === "HTML & CSS" ? "active" : ""}
          onClick={() => setActiveCategory("HTML & CSS")}
        >
          HTML & CSS
        </button>
        <button
          className={activeCategory === "JavaScript" ? "active" : ""}
          onClick={() => setActiveCategory("JavaScript")}
        >
          JavaScript
        </button>
        <button
          className={activeCategory === "React & MUI" ? "active" : ""}
          onClick={() => setActiveCategory("React & MUI")}
        >
          React & MUI
        </button>
        <button
          className={activeCategory === "Node & Express" ? "active" : ""}
          onClick={() => setActiveCategory("Node & Express")}
        >
          Node & Express
        </button>
      </section>

      <section className="flex right-section">
        {projects.map((project) => (
          <article key={project.id} className="card">
            <img width={266} src={project.img} alt={project.title} />
            <div style={{ width: "266px" }} className="box">
              <h1 className="title">{project.title}</h1>
              <p className="sub-title">{project.description}</p>
              <div className="flex icons">
                <div style={{ gap: "11px" }} className="flex">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-github"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Main;