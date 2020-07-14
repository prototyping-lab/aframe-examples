AFRAME.registerGeometry("heart-3d", {
  schema: {
    height: {
      default: 0.05
    },
    radius: {
      default: 0.5
    },
    bevel: {
      default: false,
    },
  },

  init: function (data) {
    var c = [
      [0, 0.5, 0.1, 1, 0.5, 1],
      [1.1, 1, 1.1, 0.3, 1.1, 0.3],
      [1.1, -0.1, 0.7, -0.54, 0, -1],
      [-0.7, -0.54, -1.1, -0.1, -1.1, 0.3],
      [-1.1, 0.3, -1.1, 1, -0.5, 1],
      [-0.2, 1, 0, 0.5, 0, 0.5],
    ];

    c = c.map((c2) => c2.map((x) => data.radius * x));
    //console.log("[ " + c.map((c2) => "[ " + c2.join(", ") + "]").join(",\n") + "]");

    var heartShape = new THREE.Shape();
    heartShape.moveTo(c[0][0], c[0][1]);
    c.forEach((coord) => heartShape.bezierCurveTo(...coord));

    var d = data.height / 2;
    var extrudeSettings = {
      steps: 1,
      depth: data.bevel ? 0 : data.height,
      bevelEnabled: data.bevel,
      bevelThickness: d,
      bevelSize: d * 0.5,
      bevelOffset: 0,
      bevelSegments: 2,
    };

    this.geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
  },
});

AFRAME.registerGeometry("heart", {
  schema: {
    radius: {
      default: 0.5
    },
  },
  init: function (data) {
    var c = [
      [0, 0.5, 0.1, 1, 0.5, 1],
      [1.1, 1, 1.1, 0.3, 1.1, 0.3],
      [1.1, -0.1, 0.7, -0.54, 0, -1],
      [-0.7, -0.54, -1.1, -0.1, -1.1, 0.3],
      [-1.1, 0.3, -1.1, 1, -0.5, 1],
      [-0.2, 1, 0, 0.5, 0, 0.5],
    ];

    c = c.map((c2) => c2.map((x) => data.radius * x));
    var heartShape = new THREE.Shape();
    heartShape.moveTo(c[0][0], c[0][1]);
    c.forEach((coord) => heartShape.bezierCurveTo(...coord));

    this.geometry = new THREE.ShapeGeometry(heartShape);
  },
});

AFRAME.registerGeometry("arrow", {
  schema: {
    radius: {
      default: 0.5
    },
    width: {
      default: 0.15
    },
    spread: {
      default: 2.5
    },
  },

  init: function (data) {
    var r = data.radius;
    var d = data.width;
    var w = data.spread * data.width;

    var c = [
      [0, r],
      [w, 0],
      [d, 0],
      [d, -r],
      [-d, -r],
      [-d, 0],
      [-w, 0],
    ];

    var arrowShape = new THREE.Shape();
    var c0 = c.shift();
    arrowShape.moveTo(c0[0], c0[1]);
    c.forEach((coord) => arrowShape.lineTo(...coord));
    this.geometry = new THREE.ShapeGeometry(arrowShape);
  },
});

AFRAME.registerGeometry("disk-3d", {
  schema: {
    radius: {
      default: 0.5
    },
    height: {
      default: 0.05
    },
    bevel: {
      default: false,
    },
  },

  init: function (data) {
    console.log(data.radius);

    // create a circular shape
    var circleShape = new THREE.Shape();
    var r = data.radius;

    var circleShape = new THREE.Shape()
      .moveTo(0, r)
      .quadraticCurveTo(r, r, r, 0)
      .quadraticCurveTo(r, -r, 0, -r)
      .quadraticCurveTo(-r, -r, -r, 0)
      .quadraticCurveTo(-r, r, 0, r);

    var d = data.height / 2;
    var extrudeSettings = {
      steps: 1,
      depth: data.bevel ? 0 : data.height,
      bevelEnabled: data.bevel,
      bevelThickness: d,
      bevelSize: d * 0.5,
      bevelOffset: 0,
      bevelSegments: 2,
    };

    var geometry = new THREE.ExtrudeGeometry(circleShape, extrudeSettings);
    this.geometry = geometry;
  },
});

AFRAME.registerGeometry("cross", {

  schema: {
    radius: {
      default: 0.5
    },
    spread: {
      default: 0.2
    },
  },

  init: function (data) {

    var geometry = new THREE.Geometry();
    var r = data.radius;
    var w = r * data.spread;
    var h = w;

    // unit cross
    var c = [
      [-w, r],
      [w, r],
      [w, h],
      [r, h],
      [r, -h],
      [w, -h],
      [w, -r],
      [-w, -r],
      [-w, -h],
      [-r, -h],
      [-r, h],
      [-w, h],
    ];

    var crossShape = new THREE.Shape();
    var c0 = c.shift();
    crossShape.moveTo(c0[0], c0[1]);
    c.forEach((coord) => crossShape.lineTo(...coord));
    this.geometry = new THREE.ShapeGeometry(crossShape);
  },
});
