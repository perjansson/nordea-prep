const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const paths = require('./config/paths')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    // define which files should go in which bundle
    entry: {
        // things not made by us
        vendor: ['react', 'react-dom'],
        // polyfills and the app entry point
        app: ['babel-polyfill', paths.entryPoint],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
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
        ],
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: paths.hostFileTemplate,
            filename: paths.hostFile,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
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
