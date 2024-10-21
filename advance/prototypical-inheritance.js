function HtmlElement() {
  this.click = function() {
    console.log('click');
  };
}
HtmlElement.prototype.focus = function() {
  console.log('Focus');
}


function HtmlSelectElement(item) {
  this.items = [];
  this.addItem = function(item) {
    this.items.push(item);
  }
  this.removeItem = function(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
// Prototypical inheritance
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

obj = new HtmlSelectElement(1);

