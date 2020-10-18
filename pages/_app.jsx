import {Fragment} from "react"

import "style/globals.css"

import Title from "component/Title"

/**
 * @typedef {import("next/app").AppProps} AppProps
 */

/** @type {React.FC<AppProps>} */
const MyApp = ({Component, pageProps}) => (
  <Fragment>
    <Title title="Nick's Website" />

    <Component {...pageProps} />
  </Fragment>
)

export default MyApp
