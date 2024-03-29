const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
 template: path.join(__dirname, "demo/index.html"),
 filename: "./index.html"
});
module.exports = {
 entry: path.join(__dirname, "demo/index.js"),
 module: {
   rules: [{
     test: /\.(js|jsx)$/,
   use: "babel-loader",
   exclude: /node_modules/
 },{
   test: /\.scss$/,
   use: ["style-loader", "css-loader", "sass-loader"]
 }]
},
 plugins: [htmlWebpackPlugin],
 resolve: {
   extensions: [".js", ".jsx"]
 },
 devServer: {
   port: 8007
}};