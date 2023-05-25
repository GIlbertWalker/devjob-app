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
            <label className="switch__label" htmlFor="darkModeToggle">
              Dark Mode
            </label>
            <input
              type="checkbox"
              id="darkModeToggle"
              className="switch__toggle"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
