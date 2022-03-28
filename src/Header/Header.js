import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-3xl font-bold underline'>Welcome  My Project</h1>
        </div>
    );
};

export default Header;