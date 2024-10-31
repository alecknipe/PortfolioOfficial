import React from 'react';
import Navigation from './Navigation';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => (
  <header>
    <h1>Alec Knipe</h1>
    <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
  </header>
);

export default Header;
