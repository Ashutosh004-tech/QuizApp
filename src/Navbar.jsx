import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load saved theme
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') setIsDarkMode(true);
  }, []);

  // Apply theme to <body>
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">ashutosh</div>
        <button className="theme-toggle" onClick={() => setIsDarkMode(prev => !prev)}>
          {isDarkMode ? 'Light' : 'Dark'}
        </button>
      </nav>
    </>
  );
}

export default App;
