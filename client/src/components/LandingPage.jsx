import React, { useState, useEffect } from 'react';
import circleLogo from '../assets/circle.png';
import nft1 from '../assets/nft1.png';
import nft2 from '../assets/nft2.png';
import nft3 from '../assets/nft3.png';
import nft4 from '../assets/nft4.png';
import nft5 from '../assets/nft5.png';
import nft6 from '../assets/nft6.png';
import moonIcon from '../assets/moon.svg';
import elpseIcon from '../assets/elpse.svg';
import { FiMenu, FiX } from 'react-icons/fi';

const monkeyImages = [nft1, nft2, nft3, nft4, nft5, nft6];

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [monkeyIndex, setMonkeyIndex] = useState(0);
  const [fade, setFade] = useState(true);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setMonkeyIndex(prev => (prev + 1) % monkeyImages.length);
        setFade(true);
      }, 400); // match transition duration
    }, 5000);
    return () => clearInterval(interval);
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
        }}
      >
        <img
          src={circleLogo}
          alt="Logo"
          onClick={() => (window.location.href = '/')}
          style={{ width: isMobile ? 40 : 60, cursor: 'pointer' }}
        />

        {!isMobile && (
          <div style={{ display: 'flex', gap: 50, marginLeft: 'auto', alignItems: 'center' }}>
            <div onClick={() => (window.location.href = '/')} style={{ fontSize: 24, cursor: 'pointer' }}>
              Home
            </div>
            <div style={{ fontSize: 24, cursor: 'pointer' }}>Categories</div>
            <div style={{ fontSize: 24, cursor: 'pointer' }}>About</div>

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

        {isMobile && !isMenuOpen && (
          <div onClick={toggleMenu} style={{ cursor: 'pointer', zIndex: 100 }}>
            <FiMenu size={28} color={textColor} />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 30,
          }}
        >
          <div onClick={toggleMenu} style={{ position: 'absolute', top: 20, right: 20, cursor: 'pointer' }}>
            <FiX size={28} color={textColor} />
          </div>

          <div
            onClick={() => {
              toggleMenu();
              window.location.href = '/';
            }}
            style={{ fontSize: 24, color: textColor, cursor: 'pointer' }}
          >
            Home
          </div>
          <div style={{ fontSize: 24, cursor: 'pointer' }}>Categories</div>
          <div style={{ fontSize: 24, cursor: 'pointer' }}>About</div>

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
        }}
      >
        <img
          src={monkeyImages[monkeyIndex]}
          alt={`Monkey ${monkeyIndex + 1}`}
          style={{
            width: isMobile ? 220 : 500,
            height: isMobile ? 220 : 500,
            objectFit: 'contain',
            opacity: fade ? 1 : 0,
            transition: 'opacity 0.4s ease-in-out',
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

      {/* Slider Dots */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 10,
          marginBottom: 40,
        }}
      >
        {monkeyImages.map((_, idx) => (
          <div
            key={idx}
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: monkeyIndex === idx ? textColor : '#999',
              transition: 'background 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
