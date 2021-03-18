import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const ContextWrapper = (props) => {
  const darkStyle = {
    backgroundColor: '#1f1f21',
    color: '#e5e5e5',
  };

  const lightStyle = {
    backgroundColor: '#ffffff',
    color: '#161517',
  };

  const defaultThemeHandler = () => {
    const theme = localStorage.getItem('theme');
    if (!theme) {
      localStorage.setItem('theme', 'dark');
      return 'dark';
    }
    return theme;
  };

  const [themePref, setThemePref] = useState(defaultThemeHandler());

  useEffect(() => {
    localStorage.setItem('theme', themePref);
  }, [themePref]);

  const context = {
    themePref,
    setThemePref,
    lightStyle,
    darkStyle,
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
};
