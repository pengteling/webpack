import "./css/common.css";
import layer from "./layer/layer.js";

window.onload=function(){
  console.log(layer);
  document.getElementById('app').innerHTML = layer.tpl;
}
