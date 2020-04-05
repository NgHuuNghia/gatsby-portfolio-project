import React from 'react'
import Footer from '../components/footer'
import Sidebar from './sidebar'
import '../styles/index.scss'

const Layout = ({ children }) => {
    return (
        <div className='root'>
            <Sidebar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout