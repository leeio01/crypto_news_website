import React, { useState, useEffect } from 'react';
import circleLogo from '../assets/circle.png';
import monkeyImage from '../assets/monkey.png';
import moonIcon from '../assets/moon.svg';
import elpseIcon from '../assets/elpse.svg';

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  const background = isDarkMode ? 'black' : 'white';
  const textColor = isDarkMode ? 'white' : 'black';

  useEffect(() => {
    document.body.style.backgroundColor = background;
    document.documentElement.style.backgroundColor = background;
  }, [background]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        background,
        color: textColor,
        padding: isMobile ? 20 : 0,
        overflowX: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: isMobile ? 'space-between' : 'flex-start',
        padding: isMobile ? '10px 0' : '30px 70px',
        gap: '20px',
      }}>
        <img src={circleLogo} alt="Logo" style={{ width: isMobile ? 40 : 60 }} />

        {!isMobile && (
          <div style={{ display: 'flex', gap: 50, marginLeft: 'auto' }}>
            <div style={{ fontSize: 24 }}>Home</div>
            <div style={{ fontSize: 24 }}>Categories</div>
            <div style={{ fontSize: 24 }}>About</div>
          </div>
        )}

        {/* Theme Toggle */}
        <div
          onClick={toggleTheme}
          style={{
            cursor: 'pointer',
            width: 60,
            height: 30,
            background: isDarkMode ? 'white' : 'black',
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: isDarkMode ? 'flex-end' : 'flex-start',
            padding: 4,
            marginLeft: isMobile ? 10 : 40,
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: isDarkMode ? 'black' : 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src={isDarkMode ? elpseIcon : moonIcon}
              alt="toggle-icon"
              style={{ width: 14, height: 14 }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '30px 0' : '60px',
        gap: 50
      }}>
        <img
          src={monkeyImage}
          alt="Monkey"
          style={{
            width: isMobile ? 220 : 500,
            height: isMobile ? 220 : 500,
            objectFit: 'contain',
          }}
        />

        <div style={{
          fontFamily: 'Poppins',
          fontSize: isMobile ? 32 : 60,
          fontWeight: 400,
          textAlign: isMobile ? 'center' : 'left',
        }}>
          COMING SOON
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
