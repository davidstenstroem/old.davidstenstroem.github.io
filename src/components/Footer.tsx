import React, { FunctionComponent } from 'react'
import 'twin.macro'

const Footer: FunctionComponent = (): JSX.Element => {
  return (
    <footer tw="font-mono bg-gray-200">
      <div tw="container mx-auto px-6 pt-10 pb-6">
        <div tw="flex flex-wrap">
          <div tw="w-full text-center">
            <p>© David Stenstrøm {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
