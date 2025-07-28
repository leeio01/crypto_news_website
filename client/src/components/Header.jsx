import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Add this import

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow-md">
      {/* ✅ React-router Link to / */}
      <Link
        to="/"
        className="text-2xl font-bold text-indigo-600 dark:text-white"
      >
        🚀 CryptoNews
      </Link>

      <nav className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
        <Link to="/" className="hover:text-indigo-500">Home</Link>
        <a href="#about" className="hover:text-indigo-500">About</a>
        <a href="#news" className="hover:text-indigo-500">News</a>
        <a href="#contact" className="hover:text-indigo-500">Contact</a>
      </nav>

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
