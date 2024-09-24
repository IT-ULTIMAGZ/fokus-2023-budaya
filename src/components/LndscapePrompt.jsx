// LandscapePrompt.js
import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const LandscapePrompt = () => {
  const [isLandscape, setIsLandscape] = useState(()=>{if(window.outerWidth > window.outerHeight){
    return true;
  }else {
    return false;
  };})

  const handleOrientationChange = () => {
    console.log(isLandscape);
    if(window.outerWidth > window.outerHeight){
      setIsLandscape(true);
    }else {
      setIsLandscape(false);
    }
    
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
  }, []);
  window.addEventListener('orientationchange', handleOrientationChange);

  return (
    <>
      {isLandscape  ? null
      : 
      (<Modal show={true} backdrop="static" centered style={{position:'fixed',top:'0',left:'0',width: '100vw',height: '100vh',background: 'rgba(0, 0, 0, 0.8)',zIndex:'99'}}>
      <Modal.Header>
        <Modal.Title>Turn Your Device to Landscape</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Please turn your mobile phone to landscape mode.</p>
        <br/>
        <p style={{fontSize:'12px'}}>Note : Some features are unavailable on mobile platform. For the best experience, it is recommended to read from laptop or desktop device</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => window.location.reload()}>
          Refresh
        </Button>
      </Modal.Footer>
    </Modal>) 
      
      }
    </>
    
  );
};

export default LandscapePrompt;
