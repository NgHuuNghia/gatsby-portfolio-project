import React, { useState } from 'react'
import LazyImage from '../../lazyImage'
import portfolios from '../../../data/portfolios'
import './index.scss'

const Portfolio = ({ data }) => {

    const [nImage, setNImage] = useState(6)

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
                    portfolios.slice(0, nImage).map((portfolio, index) => {
                        return (
                            <div key={index} className="cell">
                                <div >
                                    <a
                                        href={portfolio.linkProject}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <LazyImage
                                            placeHolder={portfolio.nameProject}
                                            src={require(`../../../images/portfolios/${portfolio.img}`)}
                                            width={`100%`}
                                            height={`auto`}
                                            effect={"opacity"}
                                            alt={portfolio.nameProject}
                                        />
                                    </a>
                                </div>
                                <h2 style={{ textAlign: 'center', margin: '2rem 2rem' }}>
                                    <strong>
                                        <a
                                            href={portfolio.linkProject}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {portfolio.nameProject}
                                        </a>
                                    </strong>
                                </h2>
                                <p style={{ color: '#757575', marginBottom: '6rem', textAlign: 'center' }}>{portfolio.description}</p>
                                <div className='cell-footer'>
                                    <div className="language-code">
                                        <small>{portfolio.languageCode}</small>
                                    </div>
                                    <div className='source-link'>
                                        <a href={portfolio.linkSourceCode} target="_blank" rel="noopener noreferrer"><small>{portfolio.websiteSource}</small></a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                {
                    nImage < portfolios.length ? (
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