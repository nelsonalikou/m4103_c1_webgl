import * as data from "https://bns.sr/webgl/js/data.js";
import * as vao  from "https://bns.sr/webgl/js/vao.js";

class Polygone extends vao.DirectVAO
      {
        constructor (gl, n, r)
        {
<<<<<<< HEAD
            
          //Tableau contenant les coordonnées des différents sommets
          const VERTICES = [
          ];
          
          //angle sur 360°
          const angle = 2 * Math.PI / n

          let alpha = 0;

          console.log(r/600);
          console.log(angle);
          let x = 1;
          let y = 1;
          for(let i=0; i < n; i++){
               x = r * Math.cos(alpha);
               y = r * Math.sin(alpha);

            alpha = alpha + angle
            console.log(x);
            VERTICES.push([x,y]);
          }

          console.log(VERTICES);

          const v = data.FLOAT32(VERTICES);

            const a = {size: 2, type: gl.FLOAT};
            const cmd = {mode: gl.TRIANGLE_FAN, first: 0, count: n};
=======
            const v = data.FLOAT32 (Polygone.VERTICES);
            const a = {size: 2, type: gl.FLOAT};
            const cmd = {mode: gl.TRIANGLE_STRIP, first: 0, count: n};
>>>>>>> d1f8e2be69af0cb8ba86eabb208aec4da00efe33
            super (gl, {data: v, attribs: [a]}, cmd);
        };

        animate ()
        {
          this.renderer.render (this.scene, this.camera);
          requestAnimationFrame (() => this.animate ());
        }
      };

<<<<<<< HEAD

=======
Polygone.VERTICES = [
    [-1, -1], 
    [+1, -1], 
    [-1, +1], 
    [+1, +1]
    /*[+1, +1],
    [+1, +1]*/
    ];
>>>>>>> d1f8e2be69af0cb8ba86eabb208aec4da00efe33

export default Polygone;