import React, { useEffect, useState } from 'react';
import {
  getThemeFromLocalStorage,
  setThemeInLocalStorage,
} from '@/utils/theme';

export default function ThemeBtn() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const localStorageTheme = getThemeFromLocalStorage();
    if (localStorageTheme) {
      setThemeInLocalStorage(localStorageTheme);
      setTheme(localStorageTheme);
    } else {
      setThemeInLocalStorage('light');
      setTheme('light');
    }
  }, []);

  function darkThemeHandler() {
    setTheme('dark');
    setThemeInLocalStorage('dark');
  }

  function lightThemeHandler() {
    setTheme('light');
    setThemeInLocalStorage('light');
  }

  return (
    <div>
      {theme === 'dark' ? (
        <button type="button" onClick={lightThemeHandler}>
          Light
        </button>
      ) : (
        <button type="button" onClick={darkThemeHandler}>
          Dark
        </button>
      )}
    </div>
  );
}
