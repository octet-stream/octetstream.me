import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import {text} from "./badge.module.css"

/**
 * @typedef {import("@fortawesome/fontawesome-svg-core").IconProp} IconProp
 * @typedef {import("@fortawesome/fontawesome-svg-core").SizeProp} SizeProp
 */

/**
 * @typedef {Object} BadgeProps
 *
 * @prop {IconProp} icon
 * @prop {SizeProp} [size]
 * @prop {string} [className]
 */

/** @type {React.FC<BadgeProps>} */
const Badge = ({icon, size, className, children}) => (
  <div className={className}>
    <FontAwesomeIcon size={size} icon={icon} />
    <div className={text}>{children}</div>
  </div>
)

Badge.defaultProps = {
  size: "2x"
}

export default Badge
