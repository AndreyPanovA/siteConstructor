const path = require("path")
var HtMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    context: path.resolve(__dirname, "src"), // следит за всем в этой папке
    mode: "production", // режим разработки
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        port: 3000
    },

    plugins: [new HtMLWebpackPlugin({
        template: "./index.html"
    })],
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
        ],
    },
}