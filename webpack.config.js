//commonJS
var path=require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
  entry:{
    "a":"./src/js/a.js",
    "c":"./src/js/c.js",
    "d":"./src/js/d.js"
  },
  output:{
    path:path.resolve(__dirname, "./dist"),
    filename:"js/[name]-[chunkhash].js",
    publicPath:"http://www.cdn.com"
  },
  // module:{
  //   loaders:[
  //     // {
  //     //   test:/\.js$/,
  //     //   loaders:'babel-loader'
  //     // },
  //     {
  //           test: /\.css$/,
  //           loader: 'style-loader!css-loader'
  //     }
  //   ]
  // },
  module:{
    rules:[
      {
        test: /\.css$/,
        use:[
          "style-loader",
          {
            loader:"css-loader",
            options:{}
          }
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:"HtmlWebpackPlugin title",
      fy:"fanyi",
      filename:"index.html",
      template:"index.html",
      inject:false,
      //hash:true,
      // minify:{
      //   collapseWhitespace:true,
      //   removeComments:true
      // },
      chunks:['a']

    }),
    new HtmlWebpackPlugin({
      title:"HtmlWebpackPlugin c",
      filename:"c.html",
      template:"index.html",
      inject:false,
      chunks:['a','c']
    }),
    new HtmlWebpackPlugin({
      title:"HtmlWebpackPlugin d",
      filename:"d.html",
      template:"index.html",
      inject:false,
      //excludeChunks:['c']
      chunks:['a','d']
    }),
  ]
}
