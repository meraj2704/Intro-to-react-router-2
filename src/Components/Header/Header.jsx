import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='no-underline mr-4'>
            <Link className='no-underline mr-4' to="/">Home</Link>
            <Link className='no-underline mr-4' to="/about">about</Link>
            <Link className='no-underline mr-4' to="/contact">Contact</Link>
            <Link className='no-underline mr-4' to= "/friends">Friends</Link>
        </nav>
    );
};

export default Header;