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

const query = /* GraphQL */ `
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

/** @type {import("next").GetStaticProps<HomePageProps>} */
export const getStaticProps = async () => {
  /** @type {HomePageProps} */
  const result = await github({query})

  return {
    props: result,
    revalidate: 60
  }
}

export {default} from "component/Home"
