module.exports = {
    siteMetadata: {
        nickName: 'LeoSì',
        englishName: 'leo nguyen',
        fullName: 'NGUYEN HUU NGHIA',
        fullNameUTF8: 'nguyễn hữu nghĩa',
        sortInformation: 'Software Engineer & Web Developer',
        longInformation: 'Software Engineer, Web Developer, JavaScript Lover & Blogger @nguyenhuunghia',
        menuNav: [
            { name: 'Intro', link: '#intro', id: 'intro' },
            { name: 'Portfolio', link: '#portfolio', id: 'portfolio' },
            { name: 'About', link: '#about', id: 'about' },
            { name: 'Contact', link: '#contact', id: 'contact' },
        ]
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-offline`
    ]
}
