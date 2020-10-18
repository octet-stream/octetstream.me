import github from "lib/graphql/github"
import layout from "lib/hoc/layout"

import BasicLayout from "layout/Basic"

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
          avatarUrl(size: 200)
          isHireable
          location
        }
      }
    `
  })

  return {
    props: result
  }
}

/** @type {React.FC<HomePageProps>} */
const Home = () => <div>Home page</div>

export default Home |> layout(BasicLayout)
