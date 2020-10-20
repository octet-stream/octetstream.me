import {faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

import layout from "lib/hoc/layout"

import BasicLayout from "layout/Basic"

import Avatar from "component/Avatar"
import Anchor from "component/Anchor"
import Badge from "component/Badge"

import {container, box, badges} from "./home-page.module.css"

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
      <div className={box}>
        <div>
          <Avatar src={viewer.avatarUrl} alt={`Avatar – @${viewer.login}`} />

          <h1>Hi! I am {viewer.name}</h1>

          <div>
            <span>I am JavaScript developer </span>
            <span>based in {viewer.location}. </span>
            <span>I work primarily with </span>
            <span>Node.js, GraphQL, React, MobX and Next.js</span>
          </div>
        </div>

        <div className={badges}>
          <Anchor href={`https://github.com/${viewer.login}`}>
            <Badge icon={faGithub}>
              GitHub
            </Badge>
          </Anchor>

          <Anchor href="https://twitter.com/octet_stream">
            <Badge icon={faTwitter}>
              Twitter
            </Badge>
          </Anchor>

          <Anchor href={`mailto:${viewer.email}`}>
            <Badge icon={faEnvelope}>
              Email
            </Badge>
          </Anchor>
        </div>
      </div>
    </div>
  )
}

export default Home |> layout(BasicLayout)
