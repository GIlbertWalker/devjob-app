import React, { useState, useRef } from 'react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const switchRef = useRef(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  };

  const handleSwitchClick = () => {
    toggleDarkMode();
  };

  return (
    <header className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className='container'>
        <div className="header__container">
          <h1>devjobs</h1>
          <div
            className="switch"
            ref={switchRef}
            onClick={handleSwitchClick}
          >
            <img
              src="/assets/desktop/icon-sun.svg"
              alt="Sun Logo"
              className={`switch__logo ${isDarkMode ? 'hidden' : ''}`}
            />
            <input
              type="range"
              id="darkModeToggle"
              className="switch__slider"
              min="0"
              max="1"
              step="1"
              value={isDarkMode ? "1" : "0"}
              onChange={() => {}}
            />
            <img
              src="/assets/desktop/icon-moon.svg"
              alt="Moon Logo"
              className={`switch__logo ${isDarkMode ? '' : 'hidden'}`}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
