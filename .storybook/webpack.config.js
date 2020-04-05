module.exports = async ({config}) => {
  config.module.rules.unshift({
    test: /\.(stories|story)\.[tj]sx?$/,
    loader: require.resolve('@storybook/source-loader'),
    exclude: [/node_modules/],
    enforce: 'pre',
  })

  return config
}
