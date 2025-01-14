import { useState } from 'react';
import { Link, NavLink } from 'react-router';

import logo from '/src/assets/shared/desktop/logo.svg';
import hamburger from '/src/assets/shared/tablet/icon-hamburger.svg';
import cart from '/src/assets/shared/desktop/icon-cart.svg';

export const Nav = () => {

    const [mobile, setMobile] = useState(false);

    const toggleMobileNav = () => {
        setMobile(prevMobile => !prevMobile);
    }

    return (
        <header className='fixed bg-bgDark w-full sm:px-8 lg:px-40 mx-auto'>
            <nav className='flex justify-center items-center w-full border-b border-prodAccent/10'>
                <div className='hidden lg:flex items-center w-full py-6'>
                    <div className='flex-1 flex justify-start'>
                        <img src={logo} alt='audiophile logo' />
                    </div>
                    <ul className='flex justify-center gap-x-8 flex-1'>
                        <li className='nav-links'><Link to="/">home</Link></li>
                        <li className='nav-links'><NavLink to='/headphones' className={({isActive}) => (isActive ? "active" : "nav-links")}>headphones</NavLink></li>
                        <li className='nav-links'><NavLink to='/speakers' className={({isActive}) => (isActive ? "active" : "nav-links")}>speakers</NavLink></li>
                        <li className='nav-links'><NavLink to='/earphones' className={({isActive}) => (isActive ? "active" : "nav-links")}>earphones</NavLink></li>
                    </ul>
                    <div className='flex-1 flex justify-end'>
                        <img src={cart} alt='shopping cart' />
                    </div>
                </div>
                <div className='relative lg:hidden flex justify-between items-center w-full py-6 px-8 sm:px-0 border-b border-prodAccent/10'>
                    <div className='flex items-center justify-start'>
                        <img src={hamburger} onClick={toggleMobileNav} alt='navigation menu'/>
                    </div>
                    <div className='flex-1 flex justify-center sm:justify-start'>
                        <img src={logo} alt='audiophile logo' className='sm:ml-8' />
                    </div>
                    <div className='flex items-center justify-end'>
                        <img src={cart} alt='shopping cart'/>
                    </div>
                    <div className={`absolute top-16 left-0 sm:-left-10 z-50 w-42 sm:w-52 rounded-br-md h-max bg-bgDark transform ${
                            mobile ? 'translate-x-0' : '-translate-x-96'
                        } transition-transform duration-300 ease-in-out`}>
                        <ul className='flex flex-col justify-center items-center gap-y-3 p-6'>
                            <li className='mobile-links'><Link to='/' onClick={() => setMobile(false)}>home</Link></li>
                            <li className='mobile-links'><Link to='/headphones' onClick={() => setMobile(false)}>headphones</Link></li>
                            <li className='mobile-links'><Link to='/speakers' onClick={() => setMobile(false)}>speakers</Link></li>
                            <li className='mobile-links'><Link to='/earphones' onClick={() => setMobile(false)}>earphones</Link></li>
                            <li className='mobile-links'><Link to='/cart' onClick={() => setMobile(false)}><img src={cart} alt='shopping cart'/></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
