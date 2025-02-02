import React from "react";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  // Function for smooth scrolling to Prizes section
  const scrollToPrizes = () => {
    const prizeSection = document.getElementById("prizes");
    if (prizeSection) {
      prizeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const combinedData = [
    {
      title: "Working Model",
      description:
        "Explore innovative physical prototypes showcasing cutting-edge solutions.",
      prize: "1st Prize: Rs. 10,000/-",
      prize2: "2nd Prize: Rs. 5,000/-",
    },
    {
      title: "Software Competition",
      description:
        "Compete to develop software solutions to real-world challenges.",
      prize: "1st Prize: Rs. 8,000/-",
      prize2: "2nd Prize: Rs. 4,000/-",
    },
    {
      title: "Paper Presentation",
      description:
        "Showcase your research and ideas with well-crafted technical papers.",
      prize: "1st Prize: Rs. 7,000/-",
      prize2: "2nd Prize: Rs. 3,500/-",
    },
  ];

  return (
    <div className="projects-section" id="prizes">
      <div className="projects-content">
        <h2 className="section-title-project">Project Submission Categories</h2>
        <div className="project-cards">
          {combinedData.map((item, index) => (
            <div className="project-card" key={index} onClick={scrollToPrizes}>
              <div className="card-inner">
                <div className="card-front">
                  <h3>{item.title}</h3>
                  <p>{item.prize}</p>
                  <p>{item.prize2}</p>
                </div>
                <div className="card-back">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
