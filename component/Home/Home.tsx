import {faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

import type {FC} from "preact/compat"

import type OperationPayload from "lib/graphql/OperationPayload"
import type ViewerPayload from "type/graphql/ViewerPayload"

import layout from "lib/hoc/layout"

import BasicLayout from "layout/Basic"

import Avatar from "component/Avatar"
import Anchor from "component/Anchor"
import Badge from "component/Badge"

import s from "./home-page.module.css"

const GMAPS_BASE = "https://google.com/maps/search/?api=1&query="

const Home: FC<OperationPayload<ViewerPayload>> = ({data}) => {
  const {viewer} = data

  return (
    <div className={s.container}>
      <div className={s.intro}>
        <div>
          <Avatar src={viewer.avatarUrl} alt={`Avatar – @${viewer.login}`} />

          <h1>Hi! I am {viewer.name}</h1>

          <div>
            <span>I am JavaScript developer </span>
            <span>based in </span>
            <Anchor href={GMAPS_BASE + viewer.location}>
              {viewer.location}
            </Anchor>
            <span>. I work primarily with </span>
            <span>Node.js, GraphQL, React, MobX and Next.js</span>
          </div>
        </div>

        <div className={s.badges}>
          <Anchor href={`https://github.com/${viewer.login}`}>
            <Badge icon={faGithub}>
              GitHub
            </Badge>
          </Anchor>

          <Anchor href={`https://twitter.com/${viewer.twitterUsername}`}>
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

export default layout(BasicLayout)(Home)
