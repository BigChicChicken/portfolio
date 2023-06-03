const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            favicon: path.resolve(__dirname, 'public', 'favicon.svg'),
        }),
        new MiniCssExtractPlugin(),
    ],
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src'),
            components: path.resolve(__dirname, 'src', 'components'),
            hocs: path.resolve(__dirname, 'src', 'hocs'),
            resources: path.resolve(__dirname, 'src', 'resources'),
            services: path.resolve(__dirname, 'src', 'services'),
            types: path.resolve(__dirname, 'src', 'types'),
            views: path.resolve(__dirname, 'src', 'views'),
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.module\.scss$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            exportType: 'string',
                            modules: {
                                localIdentName: '[local]',
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.scss$/,
                exclude: /\.module\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]',
                },
            },
        ],
    },
    mode: 'production',
    performance: {
        hints: false,
    },
    devServer: {
        historyApiFallback: true,
    },
};
