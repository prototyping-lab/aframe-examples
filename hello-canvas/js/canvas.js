AFRAME.registerComponent('start',{
    init: function(){
        
        // line and border dimensions
        const border = 20;
        const lineWidth = 1;
        const gap = 10 * lineWidth;

        // create drawing context
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext("2d");
        let w = ctx.canvas.width = 800;
        let h = ctx.canvas.height = 800;
                
        // define drawing area
        let xmin = border;
        let xmax = w- border;
        var ymin = border;
        var ymax = h - border;

        // draw outer rectangle
        ctx.lineWidth = lineWidth;
        ctx.rect(xmin, ymin, xmax- xmin, ymax - ymin);
        ctx.fillStyle = "rgba(255, 100, 0,  0.5)"; 
        ctx.fill();
        ctx.strokeStyle = "black";
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

    }
});