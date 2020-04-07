import React from 'react'
import avatar from '../../images/avatar/tui2.jpg'
import './index.scss'
import { FaGithub, FaGitlab, FaLinkedin, FaFreeCodeCamp, FaCodepen, FaFacebookF } from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'

const Sidebar = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    englishName
                    sortInformation
                    menuNav {
                        name
                        link
                    }
                }
            }
        }
    `)

    return (
        <div className='sidebar' >
            <div className='profile'>
                <img className='avatar' src={avatar} alt="profile's" />
            </div>
            <h1 className='name'>{data.site.siteMetadata.englishName}</h1>
            <h5 className='information'>{data.site.siteMetadata.sortInformation}</h5>
            <nav className='nav-sidebar'>
                {
                    data.site.siteMetadata.menuNav.map((item, index) => {
                        return (
                            <a key={index} className='block' href={item.link}>{item.name}</a>
                        )
                    })
                }
            </nav>
            <div className='social-network'>
                <a className='social-icon' href='https://codepen.io/nguyenhuunghia' target='_blank'><FaCodepen /></a>
                <a className='social-icon' href='https://www.freecodecamp.org/fcc719ec5f2-d224-45b7-bc29-6cf2b1f9ca39' target='_blank'><FaFreeCodeCamp /></a>
                <a className='social-icon' href='https://www.facebook.com/nguyenhuunghia.152' target='_blank'><FaFacebookF /></a>
                <a className='social-icon' href='https://github.com/NgHuuNghia' target='_blank'><FaGithub /></a>
                <a className='social-icon' href='https://gitlab.com/nguyenhuunghia' target='_blank'><FaGitlab /></a>
                <a className='social-icon' href='https://www.linkedin.com/in/nghianguyenhuu98' target='_blank'><FaLinkedin /></a>
            </div>
        </div>
    )
}

export default Sidebar