const path = require('path')

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    const postTemplate = path.resolve('src/templates/post/index.js')

    return graphql(`
       {
            allMarkdownRemark (
                filter:{
                    fileAbsolutePath: {regex: "\/posts/"}
                    frontmatter: {published: {eq: true}}
                }
            ) {
                edges {
                    node {
                        html
                        id
                        frontmatter {
                            path
                            title
                            published
                        }
                    }
                }
            }
       }
    `)
        .then((res) => {
            if (res.errors) {
                return Promise.reject(res.errors)
            }
            res.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.frontmatter.path,
                    component: postTemplate
                })
            })

        })
}


