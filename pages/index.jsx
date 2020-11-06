import withErrors from "lib/error/serializeErrorDecorator"
import github from "lib/graphql/github"

/**
 * @typedef {import("type/Viewer").default} Viewer
 */

/**
 * @typedef {Object} HomePageProps
 *
 * @prop {any[]} [errors]
 * @prop {{viewer: Viewer}} [data]
 */

/** @type {string} */
const query = /* GraphQL */ `
  query {
    viewer {
      name
      login
      email
      twitterUsername
      avatarUrl(size: 150)
      isHireable
      location
    }
  }
`

/** @type {import("next").GetStaticProps<HomePageProps>} */
export const getStaticProps = withErrors(async () => {
  /** @type {HomePageProps} */
  const result = await github({query})

  return {
    props: result,
    revalidate: 60
  }
})

export {default} from "component/Home"
