import React from 'react';

import Theme from './Theme';

import './Header.css'

const Header = ({ theme, isChecked, toggleTheme }) => {
  return (
    <header>
      <h1>Asidipta's Portfolio</h1>
      <Theme theme={theme} isChecked={isChecked} toggleTheme={toggleTheme} />
    </header>
  );
};

export default Header;
