import React from 'react'
import avatar from '../images/avatar/tui2.jpg'
import '../styles/sidebar.scss'
import { FaGithub, FaGitlab, FaLinkedin, FaFreeCodeCamp, FaCodepen, FaLink } from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className='sidebar' >
            <div className='profile'>
                <img className='avatar' src={avatar} alt="profile's" />
            </div>
            <h1 className='name'> leo nguyen</h1>
            <h5 className='information'> Software Engineer & Web Developer</h5>
            <nav className='nav-sidebar'>
                <a className='block' href='#intro'>Intro</a>
                <a className='block' href='#porfolio'>Porfolio</a>
                <a className='block' href='#about'>About</a>
                <a className='block' href='#contact'>Contact</a>
            </nav>
            <div className='social-network'>
                <a className='social-icon' href='https://codepen.io/nguyenhuunghia' target='_blank'><FaCodepen /></a>
                <a className='social-icon' href='https://www.freecodecamp.org/fcc719ec5f2-d224-45b7-bc29-6cf2b1f9ca39' target='_blank'><FaFreeCodeCamp /></a>
                <a className='social-icon' href='https://www.facebook.com/nguyenhuunghia.152' target='_blank'><FaGithub /></a>
                <a className='social-icon' href='https://gitlab.com/nguyenhuunghia' target='_blank'><FaGitlab /></a>
                <a className='social-icon' href='https://www.linkedin.com/in/nghianguyenhuu98' target='_blank'><FaLinkedin /></a>
            </div>
        </div>
    )
}

export default Sidebar