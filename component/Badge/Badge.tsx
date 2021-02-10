import type {IconProp, SizeProp} from "@fortawesome/fontawesome-svg-core"
import type {FC} from "preact/compat"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import cn from "classnames"

import s from "./badge.module.css"

interface BadgeProps {
  icon: IconProp
  size?: SizeProp
  className?: string
}

const Badge: FC<BadgeProps> = ({icon, size, className, children}) => (
  <div className={cn(s.container, className)}>
    <FontAwesomeIcon size={size} icon={icon} />

    <div className={s.text}>{children}</div>
  </div>
)

Badge.defaultProps = {
  size: "2x"
}

export default Badge
