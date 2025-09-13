import { useEffect } from 'react';

import assets from "../assets/assets";

function ToggleTheme({ theme, setTheme }) {

    useEffect(() => {
        if (theme == 'dark') {
            document.documentElement.classList.add('dark')
        }
        else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem("agency-theme", theme)
    }, [theme]);

    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        setTheme(theme || (prefersDarkMode ? 'dark' : 'light'));
    }, []);

    return (
        <>
            <button className='cursor-pointer'>
                {theme == 'dark' ? (
                    <img src={assets.sun_icon} alt='Dark theme icon' className='size-8.5 p-1.5 border border-gray-500 rounded-full'
                        onClick={() => setTheme('light')}
                    />
                ) : (
                    <img src={assets.moon_icon} alt='Light theme icon' className='size-8.5 p-1.5 border border-gray-500 rounded-full'
                        onClick={() => setTheme('dark')}
                    />
                )}
            </button>
        </>
    )
}

export default ToggleTheme;