class Shape {
    constructor(text,textColor,fill) {
      this.text = text;
      this.textColor = textColor;
      this.fill = fill;
    }
  }

  class Square extends Shape {
    constructor(text,textColor,fill) {
      super(text,textColor,fill);
      this.property = 'rect x="90" y="40" width="120" height="120"';
      }
  }
  
  class Circle extends Shape {
    constructor(text,textColor,fill) {
      super(text,textColor,fill);
      this.property='circle cx="150" cy="100" r="80"'
      }
  }

  class Triangle extends Shape {
    constructor(text,textColor,fill) {
      super(text,textColor,fill);
      this.property = 'polygon points="150, 18 244, 182 56, 182"'
      }
  }
  module.exports = {
    Square,
    Circle,
    Triangle
  };