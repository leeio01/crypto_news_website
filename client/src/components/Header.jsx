import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    // Toggle class on html
    document.documentElement.classList.toggle('dark', newMode);

    // Update mobile search bar color
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
      themeMeta.setAttribute('content', newMode ? '#111827' : '#ffffff');
    }
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);

    // Sync mobile search bar color on load/refresh
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
      themeMeta.setAttribute('content', darkMode ? '#111827' : '#ffffff');
    }
  }, [darkMode]);

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow-md">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-indigo-600 dark:text-white"
      >
        🚀 CryptoNews
      </Link>

      {/* Nav Links */}
      <nav className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
        <Link to="/" className="hover:text-indigo-500">Home</Link>
        <a href="#about" className="hover:text-indigo-500">About</a>
        <a href="#news" className="hover:text-indigo-500">News</a>
        <a href="#contact" className="hover:text-indigo-500">Contact</a>
      </nav>

      {/* Toggle + Avatar */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
        <img
          src="/character.png"
          alt="Character"
          className="w-10 h-10 rounded-full border dark:border-white"
        />
      </div>
    </header>
  );
}
