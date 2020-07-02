import React, { FunctionComponent } from 'react'
import Layout from '@components/Layout'
import Seo from '@components/Seo'
import 'twin.macro'

const IndexPage: FunctionComponent = (): JSX.Element => (
  <Layout>
    <Seo title="JavaScript Developer" />
    <div tw="font-mono container mx-auto px-2 py-6">
      <h2 tw="text-2xl block text-center pb-4">JavaScript Developer</h2>
      <div tw="px-4 pt-4">
        <p>Mit navn er David Stenstrøm. Jeg er udvikler, bor i Aarhus med mine to døtre og min hustru Astrid.</p>
        <p>
          Jeg arbejder ved{' '}
          <a tw="text-gray-600 hover:underline" href="https://salling-group.com">
            Salling Group
          </a>{' '}
          som frontend developer.
        </p>
        <p>
          Før det arbejdede jeg ved{' '}
          <a tw="text-gray-600 hover:underline" href="https://kodyl.com">
            Kodyl
          </a>{' '}
          og{' '}
          <a tw="text-gray-600 hover:underline" href="https://lindberg.com">
            Lindberg A/S.
          </a>
        </p>
        <p>Jeg har erfaring med Vue.js, React, TypeScript, GraphQL, Node.js og meget mere.</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
