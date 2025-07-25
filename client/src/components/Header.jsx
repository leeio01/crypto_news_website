import { useState, useEffect } from 'react'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark', !darkMode)
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-indigo-600 dark:text-white">
        🚀 CryptoNews
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
        <a href="#" className="hover:text-indigo-500">Home</a>
        <a href="#" className="hover:text-indigo-500">About</a>
        <a href="#" className="hover:text-indigo-500">News</a>
        <a href="#" className="hover:text-indigo-500">Contact</a>
      </nav>

      {/* Right Side: Toggle + Avatar */}
      <div className="flex items-center space-x-4">
        {/* Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>

        {/* Avatar or Character */}
        <img
          src="/character.png"
          alt="Character"
          className="w-10 h-10 rounded-full border dark:border-white"
        />
      </div>
    </header>
  )
}
