import {GetStaticProps} from "next"

import withErrors from "lib/error/serializeErrorDecorator"
import github from "lib/graphql/github"

import type OperationPayload from "lib/graphql/OperationPayload"
import type ViewerPayload from "type/graphql/ViewerPayload"

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

type GetHomePageProps = GetStaticProps<OperationPayload<ViewerPayload>>

export const getStaticProps: GetHomePageProps = withErrors(
  async () => {
    const result = await github<ViewerPayload>({query})

    return {
      props: result,
      revalidate: 60
    }
  }
)

export {default} from "component/Home"
