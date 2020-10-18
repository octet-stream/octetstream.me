import "style/globals.css"

/**
 * @typedef {import("next/app").AppProps} AppProps
 */

/** @type {React.FC<AppProps>} */
const MyApp = ({Component, pageProps}) => (
  <Component {...pageProps} />
)

export default MyApp
