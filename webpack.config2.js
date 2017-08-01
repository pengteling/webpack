//commonJS
var path=require("path");
module.exports={
  entry:"./src/js/a.js",
  output:{
    path:path.resolve(__dirname, "./dist/js"),
    filename:"bundle2.js"
  }
}
