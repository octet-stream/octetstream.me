import {ComponentPropsWithoutRef} from "react"
import {forwardRef, FC} from "preact/compat"

type AnchorProps = ComponentPropsWithoutRef<"a">

/**
 * Represends an external link
 */
const Anchor: FC<AnchorProps> = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({children, ...props}, ref) => (
    <a {...props} ref={ref} rel="noreferrer noopener">
      {children}
    </a>
  )
)

Anchor.defaultProps = {
  target: "_blank"
}

export default Anchor
