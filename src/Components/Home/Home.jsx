import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* here we call header component */}
            <Header></Header>
            {/* by the calling outlet we set it as fixed home. that mean at home page what we call or what we do every thing in home page */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;