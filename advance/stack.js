const _elements = new WeakMap();

class Stack {
  constructor() {
    _elements.set(this, []);
  }

  push(element) {
    _elements.get(this).push(element);
  }

  pop() {
    if(_elements.get(this).length === 0) {
      throw new error("Empty stack");
    }
    else {
      return _elements.get(this).pop();
    }
  }

  peek() {
    const length =  _elements.get(this).length;
    return _elements.get(this)[length - 1];
  }

  get count() {
    return _elements.get(this).length;
  }
}
