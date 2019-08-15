import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-secondary'>
            <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                    <Link to="/" className='nav-link'>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/about" className='nav-link'>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/post" className='nav-link'>
                        Post
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/register" className='nav-link'>
                        Registration
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/login" className='nav-link'>
                        Login
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/users" className='nav-link'>
                        Users
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/user" className='nav-link'>
                        User
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/logout" className='nav-link'>
                        Logout
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;