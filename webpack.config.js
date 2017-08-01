//commonJS
var path=require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
  entry:{
    "a":"./src/js/a.js",
    "c":"./src/js/c.js"
  },
  output:{
    path:path.resolve(__dirname, "./dist/js"),
    filename:"[name]-[chunkhash].js"
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename:"index.html",
      template:"index.html"
    })
  ]
}
