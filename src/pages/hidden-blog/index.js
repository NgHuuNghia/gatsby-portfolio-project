import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../../components/blogs/layout'
import './index.scss'

const Blog = ({ data }) => {
    return (
        <Layout>
            <Helmet title="Nguyễn Hữu Nghĩa | Blog's" defer={false} />
            <div className='main-blog' style={{ display: 'flex' }}>
                <div className='list-post' style={{ width: '70vw' }}>
                    {
                        data.allMarkdownRemark.edges.map(({ node }, index) => {
                            return (
                                <div key={index} className='post-in-blog' style={{ border: '1px solid black', padding: '2rem', margin: '2rem' }}>
                                    <div className='post-title'>
                                        <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
                                    </div>
                                    <div className='sort-content'>
                                        <div dangerouslySetInnerHTML={{ __html: node.html }} />
                                    </div>
                                    <span style={{ color: `#BBB` }}>{node.frontmatter.date}</span>

                                </div>
                            )
                        })
                    }
                </div>
                <div className='right-bar' style={{ width: '30vw' }}>
                    das
                </div>
            </div>
        </Layout>
    )
}

export const blogQuery = graphql`
    query IndexQuery{
        allMarkdownRemark (
            filter:{
                fileAbsolutePath: {regex: "\/posts/"}
                frontmatter: {published: {eq: true}}
            }
            sort: {order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    html
                    id
                    frontmatter {
                        path
                        title
                        date
                    }
                }
            }
        }
    }
`

export default Blog;

