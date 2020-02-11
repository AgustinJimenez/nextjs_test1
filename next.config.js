const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const env = require('./env.json')
module.exports = withCSS(
  withSass({
    cssModules: false,
    compress: false,
    env,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]'
    },
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      })
      config.module.rules.push({
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'markdown-loader',
            options: {
              /* your options here */
            }
          }
        ]
      })
      return config
    }
  })
)
