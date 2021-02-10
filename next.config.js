const withPreact = require("next-plugin-preact")

module.exports = withPreact({
  future: {
    webpack5: true
  },
  experimental: {
    modern: true,
  },
})
