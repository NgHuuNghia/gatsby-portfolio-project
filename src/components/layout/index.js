import React from 'react'
import Sidebar from '../sidebar'
import { FaArrowUp } from 'react-icons/fa'
import './index.scss'

const Layout = ({ children }) => {
    return (
        <div className='root'>
            <Sidebar />
            {children}
            <div className='scrollToTop' onClick={() => { window.scroll(0, 0) }}>
                <span>
                    <FaArrowUp />
                </span>
            </div>
        </div>
    )
}

export default Layout