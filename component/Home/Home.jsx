import layout from "lib/hoc/layout"

import BasicLayout from "layout/Basic"

import Avatar from "component/Avatar"
import Anchor from "component/Anchor"

import {container, badges} from "./home-page.module.css"

/**
 * @typedef {import("type/Viewer").default} Viewer
 */

/**
 * @typedef {Object} HomePageProps
 *
 * @prop {any[]} [errors]
 * @prop {{viewer: Viewer}} [data]
 */

/** @type {React.FC<HomePageProps>} */
const Home = ({data}) => {
  const {viewer} = data

  return (
    <div className={container}>
      <div>
        <Avatar src={viewer.avatarUrl} alt={`Avatar – @${viewer.login}`} />

        <h1>
          Hi! I am {viewer.name}
        </h1>
        <div>
          <span>I am JavaScript developer. I work primarily with </span>
          <span>Node.js, GraphQL, React, MobX and Next.js</span>
        </div>
      </div>

      <div className={badges}>
        <div>
          <Anchor href={`https://github.com/${viewer.login}`}>
            Github
          </Anchor>
        </div>
        <div>
          <Anchor href="https://twitter.com/octet_stream">
            Twitter
          </Anchor>
        </div>
        <div>
          <Anchor href={`mailto:${viewer.email}`}>Email</Anchor>
        </div>
      </div>
    </div>
  )
}

export default Home |> layout(BasicLayout)
