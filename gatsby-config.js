require('dotenv').config({ path: `${__dirname}/.env` })

module.exports = {
  siteMetadata: {
    title: 'David Stenstrøm',
    description: 'Fullstack JavaScript Developer',
    author: {
      name: 'David Stenstrøm',
      url: 'https://davidstenstroem.github.io',
      email: 'david@stenstroem.dk',
    },
    social: {
      github: 'https://github.com/davidstenstroem',
      linkedIn: 'https://linkedin.com/in/david-stenstroem',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data',
      },
    },
    'gatsby-transformer-yaml',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion',
    'gatsby-plugin-postcss',
  ],
}
