function HtmlElement() {
  this.click = function() {
    console.log('click');
  };
}
HtmlElement.prototype.focus = function() {
  console.log('Focus');
}


function HtmlSelectElement(items = []) {
  this.items = items;
  this.render = function() {
    return `<select>${this.items.map(item => `<option>${item}</option>`).join('')}</select>`;
  }
}

function HtmlImageElement(url) {
  this.url = url
  this.render = function() {
    return `<img src="${this.url}"/>`;
  }
}
// Prototypical inheritance
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;


const elements =  [
  new HtmlImageElement("http://"),
  new HtmlSelectElement([1,2,3])
];

