import React, { useEffect, useState } from 'react';

const LandscapePrompt = () => {
  const [isLandscape, setIsLandscape] = useState(
    window.matchMedia('(orientation: landscape)').matches
  );

  const handleOrientationChange = () => {
    setIsLandscape(window.matchMedia('(orientation: landscape)').matches);
  };

  useEffect(() => {
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return (
    <div
      style={{
        display: isLandscape ? 'none' : 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        zIndex: 999,
      }}
    >
      <p>For Better experience please turn your mobile phone to landscape mode.</p>
    </div>
  );
};

export default LandscapePrompt;
