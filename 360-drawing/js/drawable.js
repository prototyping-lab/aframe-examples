
AFRAME.registerComponent("drawable", {

    init: function () {
      this.el.addEventListener("raycaster-intersected", (evt) => {
        this.raycaster = evt.detail.el;
      });
      this.el.addEventListener("raycaster-intersected-cleared", (evt) => {
        this.raycaster = null;
      });

      // extract src element from the material
      let material = this.el.components.material.el.attributes.material.value;
      let src = AFRAME.utils.styleParser.parse(material).src;
      let canvas = document.querySelector(src);
      
      this.ctx = canvas.getContext("2d");
  
    },
  
    tick: function () {
      this.el.getObject3D("mesh").material.map.needsUpdate = true;
  
      if (!this.raycaster) {
        return;
      } // Not intersecting.
  
      intersection = this.raycaster.components.raycaster.getIntersection(this.el);
      if (!intersection) {
        return;
      }
  
      var uv = intersection.uv;
  
      intersection.object.material.map.transformUv(uv);
  
      this.drawCross( uv );
  
      //this.el.material.needsUpdate;
  
      //canvas.setCrossPosition( uv.x, uv.y );
  
      /*
      let point = intersection.point;
      let origin = this.el.object3D.position;
      
      this.cursor.position.x = point.x - origin.x;
      this.cursor.position.y = point.y - origin.y;
      this.cursor.position.z = point.z - origin.z;
      console.log(intersection.uv);
      */
    },
  
    drawCross: function (p) {
  
      // get drawing context
      let ctx = this.ctx;
  
      // scale to match canvas size
      let w = ctx.canvas.width;
      let h = ctx.canvas.height;
      p.x *= w;
      p.y *= h;
  
      // draw x-cross
      let d = 8;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(p.x - d, p.y - d);
      ctx.lineTo(p.x + d, p.y + d);
      ctx.moveTo(p.x - d, p.y + d);
      ctx.lineTo(p.x + d, p.y - d);
      ctx.strokeStyle = "black";
      ctx.stroke();
    }
  
  });
  