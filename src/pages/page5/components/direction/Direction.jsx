import './direction.css';
const Direction = () => {
    const closeOverlay = () => {
        document.querySelector('.directionOverlay').style.display = 'none';
    }
    return (
        
        <div className='directionOverlay'>
            <button onClick={closeOverlay}>Close</button>
            <hr />
            <img src='./images/tengok-ragam-real/arrowRight.png'/>
            <p>Please scroll to the right</p>
        </div>
    );
}

export default Direction;