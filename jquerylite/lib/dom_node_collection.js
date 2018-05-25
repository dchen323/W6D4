class DOMNodeCollection {
  constructor(args){
    this.args = args;
  }

  html(string = null) {
    if (string !== null){
      this.args.forEach((_,idx) => this.args[idx].innerHTML = string);
    }else{
      return this.nodes[0].innerHTML;
    }
  }

  empty(){
    this.html("");
  }
  append(children){
    this.args.forEach((el)=>{
      // debugger
      el.appendChild(children.cloneNode(true));
    });
  }

  attr(name, value){
    if (value !== undefined){
      this.args.forEach((_,idx)=>{
        this.args[idx].setAttribute(name,value);
      });
    }else {
      for (var i = 0; i < this.args.length; i++) {
        if(this.args[i].name !== undefined){
        return this.args[i].getAttribute(name);
        }
      }
    }
  }

  addClass(value){
    this.attr("class",value);
  }

  removeClass(value){
    this.args.forEach((_,idx)=>{
      if (this.args[idx].getAttribute("class") === value){
        this.args[idx].setAttribute("class","");
      }
    });
  }

  children(){
    let childrenArr = [];
    this.args.forEach((_,idx)=>{
      childrenArr.push(new DOMNodeCollection(this.args[idx].childNodes));
      console.log(this.args[idx].childNodes);
    });
    return childrenArr;
  }

  parent(){
    let parentArr = [];
    this.args.forEach((_, idx) => {
      parentArr.push(this.args[idx].parentNode);
    });
    return parentArr;
  }

  find(selector){
    let result = [];
    this.args.forEach((_,idx)=>{
      result = result.concat(this.args[idx].querySelectorAll(selector));
    });
    return result;
  }

  removed(node){
    const arr = this.find(node);
    arr.forEach((el)=> el.remove());
  }
}


module.exports = DOMNodeCollection;
