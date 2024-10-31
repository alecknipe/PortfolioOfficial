import React from 'react';


interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const sections = ['About', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <li
            key={section}
            onClick={() => setActiveSection(section)}
            style={{ fontWeight: activeSection === section ? 'bold' : 'normal' }}
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
