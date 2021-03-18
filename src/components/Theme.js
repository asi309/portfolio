import React from 'react';

const Theme = ({ isChecked, toggleTheme }) => {
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
