// component to quickly switch between variants using the keyboard
AFRAME.registerComponent("switch", {

  schema: { type: "string" },

  cases: [],
  elements: {},

  remove: function () {
    console.log("removing...");
  },

  init: function () {

    this.cases.push(this);
    this.elements = [];

    // remove all cases but the first
    if (this.data != "1") {
      while (this.el.firstChild) {
        const child = this.el.firstChild;
        this.elements.push(child);
        child.parentNode.removeChild(child);
      }
    }

    // register key listener
    window.addEventListener("keydown", (event) => {

      if (event.key === this.data) {
        console.log("pressed", this.data);

        // remove all cases except this one
        this.cases.forEach((c) => {
          if (c !== this) {
            if (c.el.hasChildNodes()) {
              // remove and backup child nodes
              console.log("remove", c.data);
              while (c.el.firstChild) {
                const child = c.el.firstChild;
                c.elements.push(child);
                child.parentNode.removeChild(child);
              }
            }
          } else {
            if (!c.el.hasChildNodes()) {
              // recreate child nodes from backup
              console.log("recreate", c.data);
              const children = c.elements;
              children.forEach((ch) => {
                c.el.appendChild(ch.cloneNode());
              });
              c.elements = [];
            }
          }
        });
      }
    });
  },
});
