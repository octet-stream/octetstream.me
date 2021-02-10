import type {FC} from "preact/compat"

import Title from "component/Title"

import s from "./not-found.module.css"

const NotFound: FC = () => (
  <>
    <Title title="Page not found" />

    <div className={s.container}>
      <div className={s.content}>
        <div className={s.message}>
          <h1 className={s.status}>
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
