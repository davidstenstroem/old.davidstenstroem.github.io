import React, { FunctionComponent } from 'react'
import Layout from '@components/Layout'
import Seo from '@components/Seo'

const NotFoundPage: FunctionComponent = (): JSX.Element => {
  return (
    <Layout>
      <Seo title="404: Not Found" />
      <h1>Not found</h1>
      <p>You just hit route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
