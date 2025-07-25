import React, { useState, useEffect } from 'react';
import circleLogo from '../assets/circle.png';
import monkeyImage from '../assets/monkey.png';
import moonIcon from '../assets/moon.svg';
import elpseIcon from '../assets/elpse.svg';
import { FiMenu, FiX } from 'react-icons/fi';

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => setIsDarkMode(prev => !prev);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

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
        position: 'relative',
        padding: isMobile ? 20 : 0,
        overflowX: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: isMobile ? 'space-between' : 'flex-start',
          padding: isMobile ? '10px 0' : '30px 70px',
          gap: '20px',
          position: 'relative',
        }}
      >
        {/* Left Logo */}
        <img src={circleLogo} alt="Logo" style={{ width: isMobile ? 40 : 60 }} />

        {/* Desktop Nav */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: 50, marginLeft: 'auto', alignItems: 'center' }}>
            <div style={{ fontSize: 24, cursor: 'pointer' }}>Home</div>
            <div style={{ fontSize: 24, cursor: 'pointer' }}>Categories</div>
            <div style={{ fontSize: 24, cursor: 'pointer' }}>About</div>
          </div>
        )}

        {/* Dark/Light Toggle (always visible) */}
        <div
          onClick={toggleTheme}
          style={{
            position: isMobile ? 'absolute' : 'absolute',
            left: isMobile ? '50%' : 'auto',
            right: isMobile ? 'auto' : 80,
            transform: isMobile ? 'translateX(-50%)' : 'none',
            top: 10,
            width: 60,
            height: 30,
            background: isDarkMode ? 'white' : 'black',
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: isDarkMode ? 'flex-end' : 'flex-start',
            padding: 4,
            cursor: 'pointer',
            WebkitTapHighlightColor: 'transparent',
            zIndex: 5,
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
              justifyContent: 'center',
            }}
          >
            <img
              src={isDarkMode ? elpseIcon : moonIcon}
              alt="toggle-icon"
              style={{ width: 14, height: 14 }}
            />
          </div>
        </div>

        {/* Hamburger Menu */}
        {isMobile && (
          <div
            onClick={toggleMenu}
            style={{
              position: 'absolute',
              right: 0,
              top: 10,
              padding: 10,
              zIndex: 6,
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {isMenuOpen ? <FiX size={28} color={textColor} /> : <FiMenu size={28} color={textColor} />}
          </div>
        )}
      </div>

      {/* Mobile Fullscreen Overlay Menu */}
      {isMobile && isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background,
            zIndex: 4,
            padding: 40,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 30,
          }}
        >
          <div style={{ fontSize: 24, cursor: 'pointer' }}>Home</div>
          <div style={{ fontSize: 24, cursor: 'pointer' }}>Categories</div>
          <div style={{ fontSize: 24, cursor: 'pointer' }}>About</div>
        </div>
      )}

      {/* Main Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isMobile ? '60px 0' : '60px',
          gap: 50,
        }}
      >
        <img
          src={monkeyImage}
          alt="Monkey"
          style={{
            width: isMobile ? 220 : 500,
            height: isMobile ? 220 : 500,
            objectFit: 'contain',
          }}
        />
        <div
          style={{
            fontFamily: 'Poppins',
            fontSize: isMobile ? 32 : 60,
            fontWeight: 400,
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          COMING SOON
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
