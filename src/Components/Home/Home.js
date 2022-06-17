import React from 'react';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import OrderNow from '../OrderNow/OrderNow';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <OrderNow></OrderNow>
        </div>
    );
};

export default Home;