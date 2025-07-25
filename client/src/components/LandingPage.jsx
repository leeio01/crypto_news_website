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
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        background,
        overflow: 'hidden',
        padding: isMobile ? 20 : 0,
      }}
    >
      {/* NAVIGATION */}
      {!isMobile && (
        <>
          <div style={{
            width: 146, height: 59, left: 545, top: 51, position: 'absolute',
            color: textColor, fontSize: 45, fontFamily: 'Outfit', fontWeight: 400
          }}>Home</div>

          <div style={{
            width: 146, height: 59, left: 993, top: 51, position: 'absolute',
            color: textColor, fontSize: 45, fontFamily: 'Outfit', fontWeight: 400
          }}>About</div>

          <div style={{
            width: 272, height: 59, left: 721, top: 51, position: 'absolute',
            color: textColor, fontSize: 45, fontFamily: 'Outfit', fontWeight: 400
          }}>Categories</div>
        </>
      )}

      {/* LOGO TEXT */}
      <div style={{
        width: 146,
        height: 59,
        left: isMobile ? 20 : 91,
        top: isMobile ? 20 : 106,
        position: 'absolute',
        color: textColor,
        fontSize: isMobile ? 16 : 20,
        fontFamily: 'Outfit',
        fontWeight: 400
      }}>Circle</div>

      {/* CHARACTER IMAGE */}
      <img
        src={monkeyImage}
        alt="Monkey"
        style={{
          width: isMobile ? 250 : 627,
          height: isMobile ? 250 : 627,
          left: isMobile ? '50%' : 0,
          transform: isMobile ? 'translateX(-50%)' : 'none',
          top: isMobile ? 180 : 254,
          position: 'absolute'
        }}
      />

      {/* CIRCLE LOGO */}
      <img
        src={circleLogo}
        alt="Circle Logo"
        style={{
          width: isMobile ? 60 : 105,
          height: isMobile ? 60 : 105,
          left: isMobile ? 20 : 70,
          top: isMobile ? 20 : 30,
          position: 'absolute'
        }}
      />

      {/* COMING SOON */}
      <div style={{
        width: isMobile ? '100%' : 512,
        textAlign: isMobile ? 'center' : 'left',
        height: 116,
        left: isMobile ? 0 : 696,
        top: isMobile ? 450 : 456,
        position: 'absolute',
        color: textColor,
        fontSize: isMobile ? 28 : 60,
        fontFamily: 'Poppins',
        fontWeight: 400
      }}>COMING SOON</div>

      {/* THEME TOGGLE */}
      <div
        onClick={toggleTheme}
        style={{
          cursor: 'pointer',
          width: 100,
          height: 40,
          left: isMobile ? '80%' : 1170,
          top: isMobile ? 25 : 56,
          position: 'absolute',
          background: isDarkMode ? 'white' : 'black',
          borderRadius: 20,
          display: 'flex',
          alignItems: 'center',
          padding: '0 5px',
          justifyContent: isDarkMode ? 'flex-end' : 'flex-start',
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
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
            style={{ width: 18, height: 18 }}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
