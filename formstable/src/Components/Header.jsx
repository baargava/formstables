import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-primary text-white">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold">Forms</div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6">
                    <NavLink to={'/forms'}>
                        Forms
                    </NavLink>
                    <NavLink to={'/tables'}>
                        Tables
                    </NavLink>

                </ul>

                {/* Hamburger Icon */}
                <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </div>

                {/* Mobile Navigation */}
                <ul
                    className={`${isOpen ? 'block' : 'hidden'
                        } absolute top-16 left-0 w-full bg-primary text-white md:hidden text-center`}
                >
                    <NavLink to={'/forms'}>
                        Forms
                    </NavLink>
                    <NavLink to={'/tables'}>
                        Tables
                    </NavLink>


                </ul>
            </nav>
        </header>
    );
};

export default Header;
