import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import OrderNow from '../OrderNow/OrderNow';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <OrderNow></OrderNow>
            <About></About>
        </div>
    );
};

export default Home;