import React, { FunctionComponent } from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import 'twin.macro'

const Layout: FunctionComponent = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <main role="main" tw="flex-1">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
