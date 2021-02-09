// import {GetStaticProps} from "next"

import withErrors from "lib/error/serializeErrorDecorator"
import github from "lib/graphql/github"

import type Viewer from "type/Viewer"

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

export const getStaticProps = withErrors(async () => {
  const result = await github<Viewer>({query})

  return {
    props: result,
    revalidate: 60
  }
})

export {default} from "component/Home"
