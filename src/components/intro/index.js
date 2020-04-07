import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
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
                </p>
                <div style={{ marginTop: "4rem" }}>
                    <a className="btn btn-primary" href='#about' style={{ marginRight: "1rem" }}> About </a>
                    <a className="btn btn-primary-inverse" href='#contact'> Contact </a>
                </div>
            </div>
        </div>
    )
}

export default Intro

