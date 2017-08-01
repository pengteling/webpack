//commonJS
var path=require("path");
module.exports={
  entry:{
    "a":"./src/js/a.js",
    "c":"./src/js/c.js"
  },
  output:{
    path:path.resolve(__dirname, "./dist/js"),
    filename:"[name]-[chunkhash].js"
  }
}
