import {Fragment} from "react"

import Title from "component/Title"

import {container, content} from "./basic-layout.module.css"

/** @type {React.FC<{title?: string}>} */
const BasicLayout = ({children, title}) => (
  <Fragment>
    {
      do {
        if (title) {
          <Title title={title} />
        }
      }
    }

    <div className={container}>
      <div className={content}>
        {children}
      </div>
    </div>
  </Fragment>
)

export default BasicLayout
