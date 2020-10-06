import React, { useState } from 'react';

import Header from './components/Header';

import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [isChecked, setIsChecked] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    if (!isChecked) {
      document.getElementById('root').parentElement.classList.remove('light-mode');
      document.getElementById('root').parentElement.classList.add('dark-mode');
    } else {
      document.getElementById('root').parentElement.classList.remove('dark-mode');
      document.getElementById('root').parentElement.classList.add('light-mode');
    }
    setIsChecked(!isChecked);
    localStorage.setItem('theme', theme);
  }

  // const userPreference = JSON.parse(localStorage.getItem(theme));
  // if (userPreference) {
  //   setTheme(userPreference);
  // } else {
  //   setTheme('light');
  // }

  return (
    <div className="App">
      <Header theme={theme} isChecked={isChecked} toggleTheme={toggleTheme}/>
    </div>
  );
}

export default App;
