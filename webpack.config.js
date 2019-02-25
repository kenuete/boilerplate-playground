const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
//const NpmInstallPlugin = require('npm-install-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const before = require('./apis/apiConfig')

const appsPath = './apps/'
const environment = process.argv[2].substring(2)
const appName = process.argv[3].substring(2)
const mode = (environment == 'local' ? 'development' : environment)

// const handler = (percentage, message, ...args) => {
//     console.info(Math.floor(percentage*100));
// }

module.exports = () => {

    console.log(`--App Name: ${appName}. --Set Node is ${mode}`)

    return {
        mode,
        entry: { [appName]: `${appsPath}${appName}/index.js` },
        output: {
            path: path.resolve(__dirname, 'dist')
        },
        devServer: {
            allowedHosts: [],
            before: before,
            //disableHostCheck: true,
            //hot: true,
            //hotOnly: true,
            //https: true,
            //index: 'index.html',
            // proxy: {
            //     '/api': {
            //         target: 'http://any3rdparty:8000',
            //         pathRewrite: { '^/api': '' },
            //         secure: false
            //     }
            // }
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                        },
                    ],
                },
                {
                    test: /\.(s*)css$/,
                    use: [
                        mode == 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'assets/'
                            }
                        }
                    ]
                }
            ],
        },
        optimization: {
            minimizer: [new UglifyJsPlugin({
                parallel: true,
                sourceMap: true,
                uglifyOptions: {
                    warnings: false,
                    compress: {
                        drop_console: true,
                        warnings: false,
                        drop_debugger: true,
                    },
                },
            })]
        },
        plugins: [
            //new webpack.ProgressPlugin(handler),
            //new NpmInstallPlugin(),
            new HtmlWebpackPlugin({ template: `${appsPath}${appName}/index.html` }),
            new MiniCssExtractPlugin({
                filename: `${appName}.css`
            }),
            new webpack.HotModuleReplacementPlugin()
        ]
    }
}