import * as data from "https://bns.sr/webgl/js/data.js";
import * as vao  from "https://bns.sr/webgl/js/vao.js";

class Polygone extends vao.DirectVAO
      {
        constructor (gl, n, r)
        {
            const v = data.FLOAT32 (Polygone.VERTICES);
            const a = {size: 2, type: gl.FLOAT};
            const cmd = {mode: gl.TRIANGLE_STRIP, first: 0, count: n};
            super (gl, {data: v, attribs: [a]}, cmd);
        };

        animate ()
        {
          this.renderer.render (this.scene, this.camera);
          requestAnimationFrame (() => this.animate ());
        }
      };

Polygone.VERTICES = [
    [-1, -1], 
    [+1, -1], 
    [-1, +1], 
    [+1, +1]
    /*[+1, +1],
    [+1, +1]*/
    ];

export default Polygone;