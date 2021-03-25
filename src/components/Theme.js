import React from 'react';
import Toggle from 'react-toggle';

import ToggleChecked from '../assets/ToggleChecked';
import ToggleUnchecked from '../assets/ToggleUnchecked';

import 'react-toggle/style.css';

const Theme = ({ isChecked, toggleTheme }) => {
  return (
    <Toggle
      className="theme-changer"
      defaultChecked={isChecked}
      icons={{ checked: <ToggleChecked />, unchecked: <ToggleUnchecked /> }}
      onChange={toggleTheme}
    />
  );
};

export default Theme;
