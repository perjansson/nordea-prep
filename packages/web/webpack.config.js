const PreloadWebpackPlugin = require('preload-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const WebpackMonitor = require('webpack-monitor')

const paths = require('./config/paths')

const isProduction = process.env.NODE_ENV === 'production'
const analyze = process.env.ANALYZE_BUILD === 'true'

module.exports = {
    // define which files should go in which bundle
    entry: {
        // things not made by us
        vendor: ['react', 'react-dom'],
        // app entry point
        app: [paths.entryPoint],
    },

    output: {
        filename: '[name].[chunkhash].js',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { cacheDirectory: true },
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[local]___[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'react-svg-loader',
                        options: {
                            jsx: true,
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: [{ loader: 'url-loader?limit=5000' }],
            },
        ],
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: paths.hostFileTemplate,
            filename: paths.hostFile,
        }),
        new PreloadWebpackPlugin({
            rel: 'prefetch',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        ...(analyze
            ? [
                  new BundleAnalyzerPlugin({
                      analyzerMode: 'static',
                      openAnalyzer: true,
                      reportFilename:
                          '../build-stats/reports/reports-index.html',
                  }),
                  new WebpackMonitor({
                      target: '../packages/web/build-stats/monitor/stats.json', // default -> '../monitor/stats.json'
                      launch: true,
                      port: 3030,
                  }),
              ]
            : []),
    ],

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0,
                },
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10,
                    enforce: true,
                },
            },
        },
    },

    resolve: {
        // which file can be required without extensions
        extensions: ['.js', '.jsx'],
        modules: [paths.srcRoot, 'node_modules'],
    },

    // Source maps
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',

    // dev server when running locally
    devServer: {
        hot: false,
        proxy: {
            '/prep-api/1.0': {
                target: 'http://localhost:8089',
                secure: false,
            },
        },
        historyApiFallback: {
            index: '/',
        },
    },
}
