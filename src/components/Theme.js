import React from 'react';

import './Theme.css';

const Theme = ({ theme, isChecked, toggleTheme }) => {
  return (
    <div id="toggler">
      <label className="theme-changer">
        <input type="checkbox" checked={isChecked} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Theme;
