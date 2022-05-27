import React, { useEffect, useState } from 'react'

const  getStorageTheme = () => {
    let theme = 'light-theme';

    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    }
    return theme;
  };


const Toggle = () => {
    const [theme, setTheme] = useState(getStorageTheme())

    const toggleTheme = () => {
        if (theme === "light-theme") {
            setTheme("dark-theme");
        }
        else {
            setTheme("light-theme");
        }
    };

    useEffect(() => {
        document.documentElement.className = theme;
        // document.documentElement --> Returns the <html> element
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <nav>
            <div className='nav-center'>
                <h1>Code Fraternity <br /> Dark and Light Mode Project </h1>
                <button className='btn' onClick={toggleTheme}>
                    toggle
                </button>
            </div>
        </nav>
    )
}

export default Toggle
