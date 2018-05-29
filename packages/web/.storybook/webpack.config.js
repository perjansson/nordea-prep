const path = require('path')

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader',
                    },
                ],
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
                include: path.resolve(__dirname, '../'),
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
}
