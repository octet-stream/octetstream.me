import type {FC} from "preact/compat"

import Title from "component/Title"

import {
  container,
  content,
  message,
  status
} from "./not-found.module.css"

const NotFound: FC = () => (
  <>
    <Title title="Page not found" />

    <div className={container}>
      <div className={content}>
        <div className={message}>
          <h1 className={status}>
            404
          </h1>

          <div>
            This page could not be found.
          </div>
        </div>
      </div>
    </div>
  </>
)

export default NotFound
