import React from 'react';
import './Bangla.css';
import Navigation from '../Navigation/Navigation';
import BanglaMenu from './BanglaMenu';

const Bangla = () => {
    return (
        <>
        <Navigation></Navigation>
        <div className="bangla">
            <div className="bangla-banner-text">
            <h1 className="text-center text-white d-block">Bengali Chart</h1>
            </div>
            <BanglaMenu></BanglaMenu>
            </div>
    </>
    );
};

export default Bangla;