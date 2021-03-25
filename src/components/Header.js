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
      <nav>
        <ul>
          <li>
            <a
              className="button"
              href="https://portfolio-asi309.s3.amazonaws.com/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <Theme isChecked={themePref === 'dark'} toggleTheme={themeHandler} />
    </header>
  );
};

export default Header;
