import React from 'react'
import { graphql, Link } from 'gatsby'

const PostTemplate = ({ data }) => {

    const { markdownRemark: post } = data
    return (
        <div className='post' style={{ textAlign: 'center' }}>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <div>
                <Link to='/blog'>back to blog</Link>
            </div>
        </div>
    )
}

export const postQuery = graphql`
    query BlogPostByPath( $path: String!) {
        markdownRemark(
            frontmatter: { path: { eq: $path } }
        ) {
            html
            frontmatter {
                path
                title
            }
        }
    }

`

export default PostTemplate;