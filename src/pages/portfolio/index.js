import React from "react"
import Layout from "../../components/layout"
import Intro from '../../components/intro'
import Portfolio from '../../components/portfolio'
import About from '../../components/about'
import Contact from '../../components/contact'
import { Helmet } from 'react-helmet'
import './index.scss'

const PortfolioPage = () => {

    return (
        <Layout>
            <Helmet title="Nguyễn Hữu Nghĩa | Portfolio" defer={false} />
            <div className="main">
                <Intro />
                <Portfolio />
                <About />
                <Contact />
            </div>
        </Layout >

    )
}

export default PortfolioPage
