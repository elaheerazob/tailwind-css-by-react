import React, { useState } from 'react';
import Link from '../Links/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open,setOpen] =useState(false);
    const routes =[
        {id : 1,name : 'Home',link :'/Home'},
        {id : 2,name : 'Product',link :'/product'},
        {id : 3,name : 'Order',link :'/Order'},
        {id : 4,name : 'About',link :'/about'},
        {id : 5,name : 'Login',link :'/login'}
    ]
    return (
        <nav className='bg-green-200'>
            <div onClick={() => setOpen(!open)} className='h-6 w-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center bg-green-200 w-full duration-700 ease-in absolute ${open ? 'top-6' :'top-[-120px]' }`}>
               {
                   routes.map(route => <Link
                     key={route.id}
                     route={route}
                   ></Link>)
               }
            </ul>
        </nav>
    );
};

export default Navbar;