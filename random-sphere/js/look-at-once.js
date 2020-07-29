// component to make the camera look at a certain object upon initialization

AFRAME.registerComponent("look-at-once", {

     schema: { type: "selector" },

     update: function () {

        const el = this.el;
        const self = this.el.object3D;
        const target = this.data.object3D;

        setTimeout(function () {
            const sp = self.position.clone();
            const tp = target.position.clone();
            // we need to look the opposite direction (don't ask)
            self.lookAt(sp.sub(tp.sub(sp)));
        });

     }
});