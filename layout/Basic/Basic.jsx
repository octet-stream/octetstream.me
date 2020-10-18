import {container, content} from "./basic-layout.module.css"

/** @type {React.FC} */
const BasicLayout = ({children}) => (
  <div className={container}>
    <div className={content}>{children}</div>
  </div>
)

export default BasicLayout
