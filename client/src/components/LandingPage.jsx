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
        maxWidth: '100vw',
        minHeight: '100vh',
        background,
        color: textColor,
        overflowX: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: isMobile ? 'space-between' : 'flex-start',
          padding: isMobile ? '10px 20px' : '30px 70px',
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

            {/* Dark/Light Toggle Desktop */}
            <div
              onClick={toggleTheme}
              style={{
                marginLeft: 30,
                width: 60,
                height: 30,
                background: isDarkMode ? 'white' : 'black',
                borderRadius: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: isDarkMode ? 'flex-end' : 'flex-start',
                padding: 4,
                cursor: 'pointer',
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
          </div>
        )}

        {/* Hamburger Button */}
        {isMobile && (
          <div
            onClick={toggleMenu}
            style={{
              cursor: 'pointer',
              zIndex: 100,
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
            right: 0,
            width: '100%',
            height: '100vh',
            background,
            zIndex: 99,
            paddingTop: 60,
            paddingBottom: 30,
            paddingHorizontal: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 30,
          }}
        >
          {/* Close button at top right */}
          <div
            onClick={toggleMenu}
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              cursor: 'pointer',
            }}
          >
            <FiX size={28} color={textColor} />
          </div>

          <div style={{ fontSize: 24, cursor: 'pointer' }}>Home</div>
          <div style={{ fontSize: 24, cursor: 'pointer' }}>Categories</div>
          <div style={{ fontSize: 24, cursor: 'pointer' }}>About</div>

          {/* Dark/Light Toggle inside Mobile Menu */}
          <div
            onClick={toggleTheme}
            style={{
              marginTop: 30,
              width: 60,
              height: 30,
              background: isDarkMode ? 'white' : 'black',
              borderRadius: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: isDarkMode ? 'flex-end' : 'flex-start',
              padding: 4,
              cursor: 'pointer',
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
          position: 'relative',
          zIndex: 1,
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
