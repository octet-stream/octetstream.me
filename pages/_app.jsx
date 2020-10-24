import {Fragment} from "preact/compat"

import "style/globals.css"

import Title from "component/Title"
import PageError from "component/Error/PageError"

/**
 * @typedef {import("next/app").AppProps} AppProps
 */

/** @type {React.FC<AppProps>} */
const Application = ({Component, pageProps}) => {
  const {error, ...renderProps} = pageProps

  return (
    <Fragment>
      <Title title="Nick's Website" />

      <PageError error={error}>
        <Component {...renderProps} />
      </PageError>
    </Fragment>
  )
}

export default Application
