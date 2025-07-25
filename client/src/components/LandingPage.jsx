// LandingPage.jsx
import React, { useState } from 'react';
import circleLogo from '../assets/circle.png';
import monkeyImage from '../assets/monkey.png';
import moonIcon from '../assets/moon.svg';
import elpseIcon from '../assets/elpse.svg';

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  const background = isDarkMode ? 'black' : 'white';
  const textColor = isDarkMode ? 'white' : 'black';

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        background,
        overflow: 'hidden',
      }}
    >
      {/* NAVIGATION */}
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

      {/* LOGO TEXT */}
      <div style={{
        width: 146, height: 59, left: 91, top: 106, position: 'absolute',
        color: textColor, fontSize: 20, fontFamily: 'Outfit', fontWeight: 400
      }}>Circle</div>

      {/* CHARACTER IMAGE */}
      <img
        src={monkeyImage}
        alt="Monkey"
        style={{ width: 627, height: 627, left: 0, top: 254, position: 'absolute' }}
      />

      {/* CIRCLE LOGO */}
      <img
        src={circleLogo}
        alt="Circle Logo"
        style={{ width: 105, height: 105, left: 70, top: 30, position: 'absolute' }}
      />

      {/* COMING SOON */}
      <div style={{
        width: 512, height: 116, left: 696, top: 456, position: 'absolute',
        color: textColor, fontSize: 60, fontFamily: 'Poppins', fontWeight: 400
      }}>COMING SOON</div>

      {/* THEME TOGGLE */}
      <div
        onClick={toggleTheme}
        style={{
          cursor: 'pointer',
          width: 140,
          height: 50,
          left: 1170,
          top: 56,
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
            width: 40,
            height: 40,
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
            style={{ width: 20, height: 20 }}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
