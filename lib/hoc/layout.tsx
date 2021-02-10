import type {FC} from "preact/compat"

import getName from "lib/helper/component/getName"

/**
 * Applies given Layout to the Target component
 */
const withLayout = (Layout: any, layoutProps?: Object) => (Target: any) => {
  const WithLayout: FC = props => (
    <Layout {...layoutProps}>
      <Target {...props} />
    </Layout>
  )

  WithLayout.displayName = `With${getName(Layout)}(${getName(Target)})`

  return WithLayout
}

export default withLayout
