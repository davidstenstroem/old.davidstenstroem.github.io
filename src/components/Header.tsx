import React, { FunctionComponent } from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import { HeaderQuery } from '@generated/index'
import GithubIcon from '@components/GithubIcon'
import LinkedInIcon from '@components/LinkedInIcon'
import 'twin.macro'

const Header: FunctionComponent = (): JSX.Element => {
  return (
    <StaticQuery
      query={graphql`
        query Header {
          site {
            siteMetadata {
              social {
                github
                linkedIn
              }
            }
          }
        }
      `}
    >
      {(data: HeaderQuery) => (
        <header tw="font-mono" className="font-mono">
          <div tw="container mx-auto px-2 py-2 flex justify-between items-center">
            <Link to="/">&lt;DavidStenstrøm/&gt;</Link>
            <div tw="flex-1"></div>
            <Link to="/cv" tw="mr-4">
              CV
            </Link>
            <Link to={data.site?.siteMetadata?.social?.github ?? '/'} tw="mr-4">
              <GithubIcon />
            </Link>
            <Link to={data.site?.siteMetadata?.social?.linkedIn ?? '/'}>
              <LinkedInIcon />
            </Link>
          </div>
        </header>
      )}
    </StaticQuery>
  )
}

export default Header
