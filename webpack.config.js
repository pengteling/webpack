//commonJS
var path=require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
  entry:{
    "a":"./src/js/a.js",
    "c":"./src/js/c.js"
  },
  output:{
    path:path.resolve(__dirname, "./dist"),
    filename:"js/[name]-[chunkhash].js",
    publicPath:"http://www.cdn.com"
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:"HtmlWebpackPlugin title",
      fy:"fanyi",
      filename:"index.html",
      template:"index.html",
      inject:false,
      hash:true,
      minify:{
        collapseWhitespace:true,
        removeComments:true
      }
    
    })
  ]
}
