import React from 'react'
import { FaDownload } from 'react-icons/fa'
import './index.scss'

const About = () => {
    return (
        <div id="about">
            <div className="section-title-block">
                <h1 className="section-title">
                    <strong>ABOUT</strong>
                </h1>
                <p style={{ color: "#757575" }}>A little bit about me.</p>
            </div>
            <div className='sumary' style={{ marginLeft: '2rem' }}>
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
    );
}

export default About