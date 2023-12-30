import React from 'react';
import GambarCover2 from '../../assets/Asset_3.png';
import './styleCover.css';

function cover () {
    return (
        <div className='background'>
            <div className='top'>
                <img src={GambarCover2}></img>
            </div>
        </div>
    );
}

export default cover;
