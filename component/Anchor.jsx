import {forwardRef} from "preact/compat"

/**
 * Represends an external link
 *
 * @type {React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>>}
 */
const Anchor = forwardRef(({children, ...props}, ref) => (
  <a {...props} ref={ref} rel="noreferrer noopener">
    {children}
  </a>
))

Anchor.defaultProps = {
  target: "_blank"
}

export default Anchor
