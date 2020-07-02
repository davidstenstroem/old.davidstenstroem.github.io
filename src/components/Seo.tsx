import React, { FunctionComponent, ReactElement } from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { SeoQuery } from '@generated/index'

interface Props {
  readonly title: string
  readonly description?: string
  readonly keywords?: string[]
  readonly lang?: string
}

const Seo: FunctionComponent<Props> = ({ title, description, keywords = [], lang = 'da' }): JSX.Element => (
  <StaticQuery
    query={graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
            author {
              name
            }
          }
        }
      }
    `}
    render={(data: SeoQuery): ReactElement | null => {
      const metaDescription = data.site?.siteMetadata?.description || description
      return (
        <Helmet
          htmlAttributes={{ lang }}
          title={title}
          titleTemplate={`%s | ${data.site?.siteMetadata?.title}`}
          meta={[
            {
              name: 'description',
              content: metaDescription,
            },
            {
              property: 'og:title',
              content: title,
            },
            {
              property: 'og:description',
              content: metaDescription,
            },
            {
              property: 'og:type',
              content: 'website',
            },
          ].concat(keywords.length > 0 ? { name: 'keywords', content: keywords.join(', ') } : [])}
        />
      )
    }}
  />
)

export default Seo
