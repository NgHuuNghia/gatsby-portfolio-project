import React, { useState } from "react"
import Layout from "../components/layout"
import Footer from '../components/footer'
import { graphql, useStaticQuery } from 'gatsby'
import LazyImage from '../components/lazyImage'
import { FaDownload, FaArrowUp } from 'react-icons/fa'

const IndexPage = () => {
    const [nImage, setNImage] = useState(6)

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
        <Layout>
            <div className="main">
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
                                        <div style={{ height: 345, width: 512 }}>
                                            <a
                                                href={edge.node.frontmatter.linkProject}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <LazyImage
                                                    placeHolder={edge.node.frontmatter.nameProject}
                                                    src={require(`../images/portfolios/${edge.node.frontmatter.img}`)}
                                                    width={`100%`}
                                                    height={`100%`}
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
                <div id="about">
                    <div className="section-title-block">
                        <h1 className="section-title">
                            <strong>ABOUT</strong>
                        </h1>
                        <p style={{ color: "#757575" }}>A little bit about me.</p>
                    </div>
                    <div className='sumary' style={{ marginLeft: '3rem' }}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam, repellendus laborum qui libero ut fugit iusto a dolores corporis nulla magnam! Veritatis, quos nisi! Provident libero voluptatibus numquam veniam?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam, repellendus laborum qui libero ut fugit iusto a dolores corporis nulla magnam! Veritatis, quos nisi! Provident libero voluptatibus numquam veniam?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam, repellendus laborum qui libero ut fugit iusto a dolores corporis nulla magnam! Veritatis, quos nisi! Provident libero voluptatibus numquam veniam?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam, repellendus laborum qui libero ut fugit iusto a dolores corporis nulla magnam! Veritatis, quos nisi! Provident libero voluptatibus numquam veniam?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam, repellendus laborum qui libero ut fugit iusto a dolores corporis nulla magnam! Veritatis, quos nisi! Provident libero voluptatibus numquam veniam?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam, repellendus laborum qui libero ut fugit iusto a dolores corporis nulla magnam! Veritatis, quos nisi! Provident libero voluptatibus numquam veniam?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam, repellendus laborum qui libero ut fugit iusto a dolores corporis nulla magnam! Veritatis, quos nisi! Provident libero voluptatibus numquam veniam?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam, repellendus laborum qui libero ut fugit iusto a dolores corporis nulla magnam! Veritatis, quos nisi! Provident libero voluptatibus numquam veniam?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam, repellendus laborum qui libero ut fugit iusto a dolores corporis nulla magnam! Veritatis, quos nisi! Provident libero voluptatibus numquam veniam?
                        </p>
                    </div>
                    <div className='download-cv' style={{ margin: '3rem 0', textAlign: 'center' }}>
                        <button
                            className="btn btn-primary"
                        >
                            <FaDownload style={{ marginRight: '0.5rem' }} /> MY CV
                        </button>
                    </div>

                </div>
                <div id="contact" className='contact'>
                    <div className="section-title-block-2">
                        <h1 className="section-title">
                            <strong>CONTACT</strong>
                        </h1>
                        <p style={{ color: "#757575" }}>If you would like to get in touch with me, please visit my social networks or send me a message. Thanks a lot!</p>
                    </div>
                    <div style={{ padding: '0 10rem 5rem 10rem' }}>
                        <form method="POST" action="https://formspree.io/xzbaegyw">
                            <input style={{ width: '100%', height: '2.5rem', marginTop: '1rem' }} type="text" id="yname" name="Name" placeholder="Name" required />
                            <input style={{ width: '100%', height: '2.5rem', marginTop: '1rem' }} type="email" id="yemail" name="Email" placeholder="Email" required />
                            <textarea style={{ width: '100%', height: '6rem', marginTop: '1rem' }} type="text" id="ymsg" name="Message" placeholder="Message" required></textarea>
                            <button style={{ width: '100%', marginTop: '1rem' }} className="btn btn-primary" type="submit" id="send"><strong>Send Message</strong></button>
                        </form>
                    </div>
                    <Footer />
                </div>
            </div>
            <div className='scrollToTop' onClick={() => { window.scroll(0, 0) }}>
                <span>
                    <FaArrowUp />
                </span>
            </div>
        </Layout >

    )
}

export default IndexPage
