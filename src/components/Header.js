import React, { useContext } from 'react';

import { UserContext } from '../user-context';
import Theme from './Theme';

const Header = () => {
  const { themePref, setThemePref, lightStyle, darkStyle } = useContext(
    UserContext
  );

  const themeHandler = () => {
    if (themePref === 'dark') {
      setThemePref('light');
    } else {
      setThemePref('dark');
    }
  };
  return (
    <header style={themePref === 'dark' ? darkStyle : lightStyle}>
      <strong className="branding">Asidipta Chaudhuri</strong>
      <Theme isChecked={themePref === 'dark'} toggleTheme={themeHandler} />
    </header>
  );
};

export default Header;
