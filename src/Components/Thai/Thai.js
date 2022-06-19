import React from 'react';
import './Thai.css';
import Navigation from '../Navigation/Navigation';
import ThaiMenu from './ThaiMenu';

const Thai = () => {
    return (
        <>
            <Navigation></Navigation>
            <div className="thai">
                <div className="thai-banner-text">
                <h1 className="text-center text-white d-block">Thai Chart</h1>
                </div>
                <ThaiMenu></ThaiMenu>
            </div>
        </>
    );
};

export default Thai;