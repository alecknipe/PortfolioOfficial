import React from 'react';

const Resume: React.FC = () => (
  <section>
    <h2>Resume</h2>
    <a href="/resume.pdf" download>Download Resume</a>
    <ul>
      <li>JavaScript</li>
      <li>React</li>
      <li>HTML</li>
      <li>CSS</li>
      {/* Add more proficiencies here */}
    </ul>
  </section>
);

export default Resume;
