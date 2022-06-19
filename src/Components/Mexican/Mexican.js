import React from 'react';
import './Mexican.css';
import Navigation from '../Navigation/Navigation';
import MexicanMenu from './MexicanMenu';

const Mexican = () => {
    return (
        <>
            <Navigation></Navigation>
            <div className="mexican">
                <div className="mexican-banner-text">
                <h1 className="text-center text-white d-block">Mexican Chart</h1>
                </div>
                <MexicanMenu></MexicanMenu>
                </div>
        </>
    );
};

export default Mexican;