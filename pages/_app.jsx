import {Fragment} from "preact/compat"

import "style/globals.css"

import Title from "component/Title"
import PageError from "component/Error/PageError"

/**
 * @typedef {import("next/app").AppProps} AppProps
 */

/** @type {React.FC<AppProps>} */
const Application = ({Component, pageProps}) => {
  const {error, ...props} = pageProps

  return (
    <Fragment>
      <Title title="Nick K." />

      <PageError error={error}>
        <Component {...props} />
      </PageError>
    </Fragment>
  )
}

export default Application
