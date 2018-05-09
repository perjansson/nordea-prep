const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const paths = require('./config/paths')

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

    resolve: {
        // which file can be required without extensions
        extensions: ['.js', '.jsx'],
        modules: [paths.srcRoot, 'node_modules'],
    },

    devServer: {
        historyApiFallback: {
            index: '/',
        },
    },
}
