/* eslint-disable jsx-a11y/alt-text */
import {forwardRef} from "react"

import cn from "classnames"

import {container} from "./avatar.module.css"

/** @type {React.FC<React.JSX.HTMLAttributes<HTMLImageElement>>} */
const Avatar = forwardRef(({className, ...props}) => (
  <img {...props} className={cn(container, className)} />
))

export default Avatar
