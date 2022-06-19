import React from 'react';
import './Chinese.css';
import Navigation from '../Navigation/Navigation';
import ChineseMenu from './ChineseMenu';

const Chinese = () => {
    return (
        <>
            <Navigation></Navigation>
            <div className="chinese">
                <div className="chinese-banner-text">
                <h1 className="text-center text-white d-block">Chinese Chart</h1>
                </div>
                <ChineseMenu></ChineseMenu>
                </div>
        </>
    );
};

export default Chinese;