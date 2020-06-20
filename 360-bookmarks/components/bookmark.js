
AFRAME.registerComponent('bookmark', {

  schema: {
    direction: {type: 'vec2', default: {x:0, y:0}},
    control: {type: 'string'} 
  },

  init: function () {

    this.el.setAttribute("geometry", {primitive: "plane", height: 0.4, width: 1});
    this.el.setAttribute("material", {color: "white", opacity: 0.2});

    this.el.addEventListener('mouseenter', function(evt) {
      this.setAttribute('material', 'opacity', 0.5);
    });
    this.el.addEventListener('mouseleave', function(evt) {
      this.setAttribute('material', 'opacity', 0.1);
    });

    this.el.addEventListener('mousedown', (evt) => {

      // pick camera element by default
      let el = this.el.sceneEl.camera.el;

      // pick element by id
      let id = this.data.control;
      if(id != "") el = document.querySelector("#" + id);

      // update rotation of the look-controls
      let yaw = this.data.direction.x;
      let pitch = this.data.direction.y;
      el.components["look-controls"].yawObject.rotation.y = -yaw / 180 * Math.PI;
      el.components["look-controls"].pitchObject.rotation.x = pitch / 180 * Math.PI;

    });
  }
});
