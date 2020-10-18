/* eslint-disable strict */
(() => {
  "use strict"

  /**
   * Sets the dark mode status and a classname for <body>
   *
   * @param {MediaQueryListEvent} event
   */
  function setDarkMode({matches}) {
    document.body.classList.add(matches ? "dark" : "light")
    document.body.classList.remove(matches ? "light" : "dark")
  }

  const mq = matchMedia("(prefers-color-scheme: dark)")

  mq.addEventListener("change", setDarkMode, true)

  setDarkMode(mq)
})()
/* eslint-enable strict */
