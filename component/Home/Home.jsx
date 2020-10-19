import layout from "lib/hoc/layout"

import BasicLayout from "layout/Basic"

import Avatar from "component/Avatar"

import {container} from "./home-page.module.css"

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
      </div>
      <h3>
        {viewer.name}
      </h3>
      <div>
        Hi! I am JavaScript developer based in {viewer.location}.
      </div>
      <div>
        I‘m writing code both for browsers and Node.js
      </div>
    </div>
  )
}

export default Home |> layout(BasicLayout)
