const path = require('path')

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'lib',
        libraryTarget: 'umd',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                    },
                },
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
        ],
    },

    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
        'styled-components': {
            root: 'styled-components',
            commonjs: 'styled-components',
            commonjs2: 'styled-components',
            amd: 'styled-components',
        },
    },

    resolve: {
        // which file can be required without extensions
        extensions: ['.js', '.jsx'],
        modules: ['./src', 'node_modules'],
    },
}
