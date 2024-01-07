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
    if(!isLandscape){
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('body').style.height = '100vh';
        document.querySelector('body').style.width = '100vw';

        const sidescrollPage = document.querySelector('.sidescroll-page');

        if (sidescrollPage) {
            sidescrollPage.style.width = '100vw';
            sidescrollPage.style.height = '100vh';
            sidescrollPage.style.overflow = 'hidden';
          } 
      }
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return (
    <Modal show={!isLandscape} backdrop="static" centered style={{position:'fixed',top:'0',left:'0',width: '100vw',height: '100vh',background: 'rgba(0, 0, 0, 0.8)',}}>
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
