import github from "lib/graphql/github"

/**
 * @typedef {Object} Viewer
 *
 * @prop {string} name
 * @prop {string} login
 * @prop {string} email
 * @prop {string} avatarUrl
 * @prop {boolean} isHireable
 * @prop {string} location
 */

/**
 * @typedef {Object} HomePageProps
 *
 * @prop {any[]} [errors]
 * @prop {{viewer: Viewer}} [data]
 */

/** @type {import("next").GetStaticProps<HomePageProps>} */
export const getStaticProps = async () => {
  /** @type {HomePageProps} */
  const result = await github({
    query: /* GraphQL */ `
      query {
        viewer {
          name
          login
          email
          avatarUrl(size: 150)
          isHireable
          location
        }
      }
    `
  })

  return {
    props: result,
    revalidate: 60
  }
}

export {default} from "component/Home"
