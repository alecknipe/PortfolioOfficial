import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    { title: 'Project 1', liveLink: '#', repoLink: '#' },
    // Add more projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <a href="https://www.myplantspace.com">My Plant Space</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
