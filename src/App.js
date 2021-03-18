import React from 'react';

import { ContextWrapper } from './user-context';
import About from './components/About';
import Header from './components/Header';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './styles/base.scss';

function App() {
  // const [theme, setTheme] = useState('light');
  // const [isChecked, setIsChecked] = useState(false);

  // const toggleTheme = () => {
  //   setTheme(theme === 'light' ? 'dark' : 'light');
  //   if (!isChecked) {
  //     document
  //       .getElementById('root')
  //       .parentElement.classList.remove('light-mode');
  //     document.getElementById('root').parentElement.classList.add('dark-mode');
  //   } else {
  //     document
  //       .getElementById('root')
  //       .parentElement.classList.remove('dark-mode');
  //     document.getElementById('root').parentElement.classList.add('light-mode');
  //   }
  //   setIsChecked(!isChecked);
  //   localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  // };

  // const userPreference = JSON.parse(localStorage.getItem(theme));
  // if (userPreference) {
  //   setTheme(userPreference);
  // } else {
  //   setTheme('light');
  // }

  return (
    <ContextWrapper>
      <div className="App">
        <Header />
        <Banner />
        <About />
        <Contact />
        <Footer />
      </div>
    </ContextWrapper>
  );
}

export default App;
