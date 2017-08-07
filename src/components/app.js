import "./css/common.css";
import layer from "./layer/layer.js";

window.onload=function(){
  console.log(layer);
  document.getElementById('app').innerHTML = layer.tpl;
  //alert("Test");
  console.log("test");
}

if(process.env.NODE_ENV=="development"){
  require("../../index.html");
}
