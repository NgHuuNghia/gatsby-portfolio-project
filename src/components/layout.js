import React from 'react'
import Sidebar from './sidebar'
import '../styles/index.scss'

const Layout = ({ children }) => {
    return (
        <div className='root'>
            <Sidebar />
            {children}
        </div>
    )
}

export default Layout