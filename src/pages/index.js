import React from "react"
import Layout from "../components/layout"
import port1 from "../images/portfolio/gb-blog-template.png"
import { graphql, useStaticQuery } from 'gatsby'

const IndexPage = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    fullName
                    longInformation
                }
            }
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            nameProject
                            description
                            languageCode
                            linkProject
                            websiteSource
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <div className="main">
                <div className="intro" id="intro">
                    <div className="content-intro">
                        <h1 className="title">I'M {data.site.siteMetadata.fullName}.</h1>
                        <p>
                            {data.site.siteMetadata.longInformation}
                        </p>
                        <div style={{ marginTop: "4rem" }}>
                            <button
                                className="btn btn-primary"
                                style={{ marginRight: "1rem" }}
                            >
                                About
                            </button>
                            <button className="btn btn-primary-inverse"> Contact </button>
                        </div>
                    </div>
                </div>
                <div id="portfolio" className="portfolio">
                    <div className="section-title-block">
                        <h1 className="section-title">
                            <strong>PORTFOLIO</strong>
                        </h1>
                        <p style={{ color: "#757575" }}>Check out my lastest work below.</p>
                    </div>
                    <div className="card-portfolio">
                        {
                            data.allMarkdownRemark.edges.map((edge, index) => {
                                return (
                                    <div key={index} className="cell">
                                        <a
                                            href={edge.node.frontmatter.linkProject}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src={port1}
                                                width="99%"
                                                height="auto"
                                                alt={edge.node.frontmatter.nameProject}
                                            />
                                        </a>
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
                                        <p style={{ color: '#757575', marginBottom: '2rem', textAlign: 'center' }}>{edge.node.frontmatter.description}</p>
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
                        <button
                            className="btn btn-primary"
                        >
                            See more
                        </button>
                    </div>
                </div>
                <div id="about">
                    <h1>ABOUT</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          molestiae? Delectus quo dolore accusamus placeat ad suscipit enim.
          Asperiores minus quaerat neque et harum dolore non mollitia quas
          nostrum labore. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Blanditiis, molestiae? Delectus quo dolore accusamus placeat ad
          suscipit enim. Asperiores minus quaerat neque et harum dolore non
          mollitia quas nostrum labore. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Blanditiis, molestiae? Delectus quo dolore accusamus
          placeat ad suscipit enim. Asperiores minus quaerat neque et harum
          dolore non mollitia quas nostrum labore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Blanditiis, molestiae? Delectus quo
          dolore accusamus placeat ad suscipit enim. Asperiores minus quaerat
          neque et harum dolore non mollitia quas nostrum labore. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae?
          Delectus quo dolore accusamus placeat ad suscipit enim. Asperiores
          minus quaerat neque et harum dolore non mollitia quas nostrum labore.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          molestiae? Delectus quo dolore accusamus placeat ad suscipit enim.
          Asperiores minus quaerat neque et harum dolore non mollitia quas
          nostrum labore.
        </div>
                <div id="contact">
                    <h1>CONTACT</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          molestiae? Delectus quo dolore accusamus placeat ad suscipit enim.
          Asperiores minus quaerat neque et harum dolore non mollitia quas
          nostrum labore. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Blanditiis, molestiae? Delectus quo dolore accusamus placeat ad
          suscipit enim. Asperiores minus quaerat neque et harum dolore non
          mollitia quas nostrum labore. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Blanditiis, molestiae? Delectus quo dolore accusamus
          placeat ad suscipit enim. Asperiores minus quaerat neque et harum
          dolore non mollitia quas nostrum labore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Blanditiis, molestiae? Delectus quo
          dolore accusamus placeat ad suscipit enim. Asperiores minus quaerat
          neque et harum dolore non mollitia quas nostrum labore. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae?
          Delectus quo dolore accusamus placeat ad suscipit enim. Asperiores
          minus quaerat neque et harum dolore non mollitia quas nostrum labore.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          molestiae? Delectus quo dolore accusamus placeat ad suscipit enim.
          Asperiores minus quaerat neque et harum dolore non mollitia quas
          nostrum labore.
        </div>
            </div>
        </Layout >
    )
}

export default IndexPage
