import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { graphql, useStaticQuery, Link } from 'gatsby'
import './index.scss'

const Intro = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    fullName
                    longInformation
                }
            }
        }
    `)

    return (
        <div className="intro" id="intro">
            <div className="content-intro">
                <h1 className="title">I'M {data.site.siteMetadata.fullName}.</h1>
                <p>
                    {data.site.siteMetadata.longInformation}
                    <Link to='/blog'>@nguyenhuunghia</Link>
                </p>
                <div style={{ marginTop: "4rem" }}>
                    <AnchorLink className="btn btn-primary" href='#about' style={{ marginRight: "1rem" }}> About </AnchorLink>
                    <AnchorLink className="btn btn-primary-inverse" href='#contact'> Contact </AnchorLink>
                </div>
            </div>
        </div>
    )
}

export default Intro
