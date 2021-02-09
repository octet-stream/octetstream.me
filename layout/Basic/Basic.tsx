import {Fragment, FC} from "preact/compat"

import Title from "component/Title"

import {container, content} from "./basic-layout.module.css"

const BasicLayout: FC<{title?: string}> = ({children, title}) => (
  <Fragment>
    {title && <Title title={title} />}

    <div className={container}>
      <div className={content}>
        {children}
      </div>
    </div>
  </Fragment>
)

export default BasicLayout
