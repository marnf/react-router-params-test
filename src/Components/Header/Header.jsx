import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='links'>
            <ActiveLink to="/">home</ActiveLink>
            <ActiveLink to="/friends">friends</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
            <ActiveLink to='/posts'>posts</ActiveLink>
        </div>
    );
};

export default Header;