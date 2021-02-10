import {FC} from "preact/compat"

import Title from "component/Title"

import s from "./basic-layout.module.css"

const BasicLayout: FC<{title?: string}> = ({children, title}) => (
  <>
    {title && <Title title={title} />}

    <div className={s.container}>
      <div className={s.content}>
        {children}
      </div>
    </div>
  </>
)

export default BasicLayout
