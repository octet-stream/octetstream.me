const withPrefresh = require("@prefresh/next")

const prefreshConfig = {
  experimental: {
    modern: true,
    polyfillsOptimization: true
  },

  webpack(config, {dev, isServer}) {
    const splitChunks = config.optimization && config.optimization.splitChunks

    if (splitChunks) {
      const cacheGroups = splitChunks.cacheGroups

      // eslint-disable-next-line max-len
      const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/
      if (cacheGroups.framework) {
        cacheGroups.preact = {...cacheGroups.framework, test: preactModules}

        cacheGroups.commons.name = "framework"
      } else {
        cacheGroups.preact = {
          name: "commons",
          chunks: "all",
          test: preactModules
        }
      }
    }

    // Install webpack aliases:
    const aliases = config.resolve.alias || (config.resolve.alias = {})

    aliases.react = "preact/compat"
    aliases["react-dom"] = "preact/compat"

    // inject Preact DevTools
    if (dev && !isServer) {
      const entry = config.entry
      config.entry = () => entry().then(entries => {
        entries["main.js"] = ["preact/debug"].concat(entries["main.js"] || [])
        return entries
      })
    }

    return config
  }
}

module.exports = withPrefresh(prefreshConfig)
