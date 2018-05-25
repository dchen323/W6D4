const DOMNodeCollection = require("./dom_node_collection.js");

window.$l = function(selector){
  if (selector instanceof HTMLElement){
    const element = Array.from(selector);
    return new DOMNodeCollection(element);
  }else {
    const nodeList = Array.from(document.querySelectorAll(selector));
    return new DOMNodeCollection(nodeList);
  }
};
