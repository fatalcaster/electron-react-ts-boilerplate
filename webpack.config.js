const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["babel-loader", "ts-loader"],
                include: [path.resolve(__dirname, "src")],
            },
        ],
    },
    output: {
        publicPath: "public",
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
    },
    resolve: {
        fallback: {
            path: require.resolve("path-browserify"),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    target: "electron-main",
};
