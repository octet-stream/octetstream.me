/* eslint-disable jsx-a11y/alt-text */
import {forwardRef, ComponentPropsWithoutRef} from "react"

import cn from "classnames"

import s from "./avatar.module.css"

type AvatarProps = ComponentPropsWithoutRef<"img">

const Avatar: React.FC<AvatarProps> = forwardRef<HTMLImageElement, AvatarProps>(
  ({className, ...props}, ref) => (
    <img {...props} ref={ref} className={cn(s.container, className)} />
  )
)

export default Avatar
