//commonJS
var path=require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

const extractCSS = new ExtractTextPlugin('css/[name]-one.css');
const extractLESS = new ExtractTextPlugin('css/[name]-two.css');
const extractSASS = new ExtractTextPlugin('css/[name]-three.css');


module.exports={
  entry:{
    "app":"./src/components/app.js"
  },
  output:{
    path:path.resolve(__dirname, "./dist"),
    filename:"js/[name].bundle.js"
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
        test: /\.html$/,
        use:{
          loader:"html-loader"
        }
      },
      {
        test: /\.css$/,
        use:ExtractTextPlugin.extract([
          //"style-loader",
          {
            loader:"css-loader",
            options:{importLoaders : 1,sourceMap: true}
          },
          {
            loader:"postcss-loader",
            options: {
              sourceMap: true
            }
          }
        ])
      },
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, "./node_modules/"),
        include: path.resolve(__dirname, "./src/"),
        use: {
          loader: "babel-loader",
          options:{
             presets: ['env']
             //presets: ['es2015']
          }
        }

      },
      {
        test: /\.less$/,
        use:ExtractTextPlugin.extract({
          publicPath:"../",
          fallback: 'style-loader',
          use:[
          // {
          //   loader:"style-loader",
          //   options: { sourceMap: true }
          // },
          {
            loader:"css-loader",
            options:{importLoaders : 1,sourceMap: true}
          },
          // {
          //   loader:"postcss-loader"
          // },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './postcss.config.js'
              },
              sourceMap: true
            }
          },
          {
            loader:"less-loader",
            options:{
              sourceMap: true
            }
          }
        ]})
      },
      {
        test: /\.scss$/,
        use:ExtractTextPlugin.extract([
          // {
          //   loader:"style-loader",
          //   options: { sourceMap: true }
          // },
          {
            loader:"css-loader",
            options:{importLoaders : 1,sourceMap: true}
          },
          // {
          //   loader:"postcss-loader"
          // },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader:"sass-loader",
            options:{
              sourceMap: true
            }
          }
        ])
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use:[
          {
            loader:"url-loader",
            options:{
              limit:1000,
              name:"images/[name].[ext]"
            }
          },
          {
            loader:'image-webpack-loader'
          }
      ]
      }
      //{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename:"index.html",
      template:"index.html",
      inject:'head'
    }),
    //new ExtractTextPlugin('style.css')
    new ExtractTextPlugin({
      filename:  (getPath) => {
         return getPath('css/[name].css').replace('css/js', 'css');
      },
      allChunks: true
    }),
    //定义环境 程序中判断
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin()
  // extractCSS,
  //  extractLESS,
  //  extractSASS
 ],
 devServer: {
  //contentBase: path.join(__dirname, "dist"),
  //compress: true,
  port: 8080,
  inline:true,
  hot:true,
  host:"0.0.0.0"
},
 devtool: "source-map"
}
