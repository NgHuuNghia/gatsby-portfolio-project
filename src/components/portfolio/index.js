import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import LazyImage from '../../components/lazyImage'
import './index.scss'

const Portfolio = () => {

    const [nImage, setNImage] = useState(6)

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            nameProject
                            description
                            languageCode
                            linkProject
                            websiteSource
                            img
                        }
                        html
                        excerpt
                    }
                }
            }
        }
    `)


    return (
        <div id="portfolio" className="portfolio">
            <div className="section-title-block">
                <h1 className="section-title">
                    <strong>PORTFOLIO</strong>
                </h1>
                <p style={{ color: "#757575" }}>Check out my lastest work below.</p>
            </div>
            <div className="card-portfolio">
                {
                    data.allMarkdownRemark.edges.slice(0, nImage).map((edge, index) => {
                        return (
                            <div key={index} className="cell">
                                <div >
                                    <a
                                        href={edge.node.frontmatter.linkProject}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <LazyImage
                                            placeHolder={edge.node.frontmatter.nameProject}
                                            src={require(`../../images/portfolios/${edge.node.frontmatter.img}`)}
                                            width={`100%`}
                                            height={`auto`}
                                            effect={"opacity"}
                                            alt={edge.node.frontmatter.nameProject}
                                        />
                                    </a>
                                </div>
                                <h2 style={{ textAlign: 'center', margin: '2rem 2rem' }}>
                                    <strong>
                                        <a
                                            href={edge.node.frontmatter.linkProject}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {edge.node.frontmatter.nameProject}
                                        </a>
                                    </strong>
                                </h2>
                                <p style={{ color: '#757575', marginBottom: '6rem', textAlign: 'center' }}>{edge.node.frontmatter.description}</p>
                                <div className='cell-footer'>
                                    <div className="language-code">
                                        <small>{edge.node.frontmatter.languageCode}</small>
                                    </div>
                                    <div className='source-link'>
                                        <a href={edge.node.frontmatter.linkSourceCode} target="_blank" rel="noopener noreferrer"><small>{edge.node.frontmatter.websiteSource}</small></a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                {
                    nImage < data.allMarkdownRemark.edges.length ? (
                        <button
                            className="btn btn-primary"
                            onClick={() => { setNImage(nImage + 6) }}
                        >
                            See more
                        </button>) : (null)
                }
            </div>
        </div>
    )
}

export default Portfolio