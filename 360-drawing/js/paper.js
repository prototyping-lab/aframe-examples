AFRAME.registerComponent("paper", {

  schema: {
    canvas: {type: 'string', default: 'canvas'},
    fillStyle: {type: 'string', default: 'rgba(255, 100, 0,  0.5)'},
    strokeStyle: {type: 'string', default: 'black' }
  },

  init: function () {
    
    // extract src element from the material
    let material = this.el.components.material.el.attributes.material.value;
    let src = AFRAME.utils.styleParser.parse(material).src;
    let canvas = document.querySelector(src);

    // resize the cnavas
    this.ctx = canvas.getContext("2d");
    this.ctx.canvas.width = 1024;
    this.ctx.canvas.height = 1024;

    // draw the grid
    this.drawGrid();

  },

  drawGrid: function () {

    // line and border dimensions
    const border = 20;
    const lineWidth = 1;
    const gap = 10 * lineWidth;

    // create drawing context
    let ctx = this.ctx;
    let w = ctx.canvas.width;
    let h = ctx.canvas.height;

    // define drawing area
    let xmin = border;
    let xmax = w - border;
    var ymin = border;
    var ymax = h - border;

    // draw outer rectangle
    ctx.lineWidth = lineWidth;
    ctx.rect(xmin, ymin, xmax - xmin, ymax - ymin);
    ctx.fillStyle = this.data.fillStyle;
    ctx.fill();
    ctx.strokeStyle = this.data.strokeStyle;
    ctx.stroke();
  
    // horizontal lines
    ctx.beginPath();
    for(var y = ymin; y < ymax; y += gap) {
        ctx.moveTo(xmin, y);
        ctx.lineTo(xmax, y);
    }
    
    // vertical lines
    for(var x = xmin; x < xmax; x += gap) {
        ctx.moveTo(x, ymin);
        ctx.lineTo(x, ymax);
    }


    // draw the grid
    ctx.stroke();
  },
});
