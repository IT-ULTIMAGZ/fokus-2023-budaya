import React, { useState } from 'react';
import './backButton.css'; // Import the CSS file with keyframes
import { useEffect } from 'react';

const BackButton = (props) => {
    const [randomAnimation, setRandomAnimation] = useState('');

    const animations = {
        spin: 'spin', // Directly apply non-keyframe animations
        scale: 'scale', // Directly apply non-keyframe animations
        shake: 'shake', // Directly apply non-keyframe animations
    };

  const getRandomAnimation = () => {
    const animationKeys = Object.keys(animations);
    const randomIndex = Math.floor(Math.random() * 3);
    
    return animationKeys[randomIndex];
  };

  const handleMouseOver = () => {
    const animationName = getRandomAnimation();
    setRandomAnimation(animationName);
  };
  useEffect(() => {
    setTimeout(() => {
      handleMouseOver();
    }, 10000);
  }, []);

  return (
    <div style={{ position: 'fixed',zIndex:'100',...props.style }}>
      <a href="/">
        <img
          src="./images/Back Button.svg"
          alt="back-button"
          style={{
            width: 'calc(72/1920*100vw)',
            animation: `${randomAnimation} 0.5s linear`, // Apply the animation dynamically
          }}
          onLoad={handleMouseOver}
          onMouseOver={handleMouseOver}
          onMouseOut={() => setRandomAnimation('')}
        />
      </a>
    </div>
  );
};

export default BackButton;
