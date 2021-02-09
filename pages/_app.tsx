import {FC} from "preact/compat"

import "style/globals.css"

import type {AppProps} from "next/app"

import Title from "component/Title"
import PageError from "component/Error/PageError"

const Application: FC<AppProps> = ({Component, pageProps}) => {
  const {error, ...props} = pageProps

  return (
    <>
      <Title title="Nick K." />

      <PageError error={error}>
        <Component {...props} />
      </PageError>
    </>
  )
}

export default Application
