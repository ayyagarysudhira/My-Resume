import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import profileImg from '../assets/profile.jpg';
import { personalInfo } from '../data/content';

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src={profileImg} alt={personalInfo.name} className='profile-pic' />
        <div className='logo-text'>
          <span className='name-text'>{personalInfo.name}</span>
          <span className='subtitle-text'>{personalInfo.title}</span>
        </div>
      </div>

      <div className='links'>
        <Link className={pathname === '/' ? 'active' : ''} to='/'>
          Home
        </Link>
        <Link className={pathname === '/skills' ? 'active' : ''} to='/skills'>
          Skills
        </Link>
        <Link className={pathname === '/experience' ? 'active' : ''} to='/experience'>
          Experience
        </Link>
        <Link className={pathname === '/projects' ? 'active' : ''} to='/projects'>
          Projects
        </Link>
        <Link className={pathname === '/contact' ? 'active' : ''} to='/contact'>
          Contact
        </Link>
      </div>
    </nav>
  );
}