/* eslint-disable jsx-a11y/alt-text */

import cn from "classnames"

import {container} from "./avatar.module.css"

/** @type {React.FC<React.HTMLAttributes<HTMLImageElement>>} */
const Avatar = ({className, ...props}) => (
  <img {...props} className={cn(container, className)} />
)

export default Avatar
