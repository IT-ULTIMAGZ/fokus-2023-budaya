// LandscapePrompt.js
import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const LandscapePrompt = () => {
  const [isLandscape, setIsLandscape] = useState(
    window.matchMedia('(orientation: landscape)').matches
  );
  console.log(isLandscape);

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
    <Modal show={!isLandscape} backdrop="static" centered style={{position:'fixed',top:'0',left:'0',width: '100%',height: '100%',background: 'rgba(0, 0, 0, 1)',}}>
      <Modal.Header>
        <Modal.Title>Turn Your Device to Landscape</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>For a better experience, please turn your mobile phone to landscape mode.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => window.location.reload()}>
          Refresh
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LandscapePrompt;
