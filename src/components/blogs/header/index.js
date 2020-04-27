import React from 'react'
import { Link } from 'gatsby'
import { FaFacebookF, FaGithub, FaGitlab, FaLinkedin, FaCube } from 'react-icons/fa'
import './index.scss'

const Header = () => {
    return (
        <div className='header' style={{ textAlign: 'center' }}>
            <div style={{ marginTop: '1rem' }}>
                <Link style={{ color: '#333332' }} to='/'>
                    <FaCube style={{ fontSize: '4rem' }} />
                    <h1>NGUYENHUUNGHIA</h1>
                </Link>
            </div>
            <div className='long-information' style={{ color: '#9F9292' }}>
                Software Engineer, Web Developer, JavaScript Lover & Blogger
        </div>
            <div className='social-network-blog' style={{ padding: '2rem' }}>
                <a className='icon-social-network-blog' href='https://www.facebook.com/nguyenhuunghia.152' target='_blank'><FaFacebookF /></a>
                <a className='icon-social-network-blog' href='https://github.com/NgHuuNghia' target='_blank'><FaGithub /></a>
                <a className='icon-social-network-blog' href='https://gitlab.com/nguyenhuunghia' target='_blank'><FaGitlab /></a>
                <a className='icon-social-network-blog' href='https://www.linkedin.com/in/nghianguyenhuu98' target='_blank'><FaLinkedin /></a>
            </div>
        </div>
    );
}

export default Header;