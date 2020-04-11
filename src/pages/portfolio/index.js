import React from "react"
import Layout from "../../components/portfolios/layout"
import Intro from '../../components/portfolios/intro'
import Portfolio from '../../components/portfolios/portfolio'
import About from '../../components/portfolios/about'
import Contact from '../../components/portfolios/contact'
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
