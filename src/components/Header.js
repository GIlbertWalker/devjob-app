import React, { useState } from 'react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  };

  return (
    <header className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className='container'>

        <div className="header__container">
        
          <h1>devjobs</h1>

          <div className="switch">
            <input
              type="range"
              id="darkModeToggle"
              className="switch__slider"
              min="0"
              max="1"
              step="1"
              value={isDarkMode ? "1" : "0"}
              onChange={toggleDarkMode}
            />
          </div>

        </div>

      </div>
    </header>
  );
};

export default Header;


