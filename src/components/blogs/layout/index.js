import React from 'react'
import Header from '../header'
import './index.scss'

const Layout = ({ children }) => {
    return (
        <div className='root'>
            <Header />
            {children}
        </div>
    )
}

export default Layout