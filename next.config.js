const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const env = require('./env.json')
module.exports = withCSS(
    withSass({
        images: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            domains: ['https://www.themealdb.com'],
            path: '/_next/image',
            loader: 'default',
        },
        cssModules: false,
        compress: false,
        env,
        cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: '[local]___[hash:base64:5]',
        },
        webpack(config, options) {
            config.module.rules.push({
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                    },
                },
            })

            config.module.rules.push({
                test: /\.md$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                    {
                        loader: 'markdown-loader',
                        options: {
                            /* your options here */
                        },
                    },
                ],
            })

            return config
        },
    }),
)
