import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="absolute left-[1170px] top-[56px] w-36 h-12 bg-black rounded-[20px] flex items-center px-2"
    >
      <div
        className={`w-10 h-10 bg-white rounded-full transition-transform duration-300 ${
          isDark ? 'translate-x-[60px]' : 'translate-x-0'
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
