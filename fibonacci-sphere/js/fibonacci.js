// component to arrange stuff using fibonacci math


(function() {

var counter = 0;

AFRAME.registerComponent("fibonacci-spherical-position", {

  schema: {
    radius: { default: 10 },
    samples: { default: 100 }
  },

  update: function () {

    var data = this.data;
    var samples = data.samples;
    var radius = data.radius;
    var step = counter % samples;

    var offset = 2 / samples;
    var increment = Math.PI * (3 - Math.sqrt(5));
    var dy = ((step * offset) - 1) + (offset / 2);

    var phi = step * increment;
    var distance = Math.sqrt(1 - Math.pow(dy, 2));

    this.el.setAttribute("position", {
      x: data.radius * Math.cos(phi) * distance,
      y: data.radius * dy * 1.2,
      z: data.radius * Math.sin(phi) * distance
    });

    counter++;

  },
});

})();