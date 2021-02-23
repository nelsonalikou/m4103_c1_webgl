import * as data from "https://bns.sr/webgl/js/data.js";
import * as vao  from "https://bns.sr/webgl/js/vao.js";

class Polygone extends vao.DirectVAO
      {
        constructor (gl, n, r)
        {
            
          //Tableau contenant les coordonnées des différents sommets
          const VERTICES = [
          ];
          
          //angle sur 360°
          const angle = 2 * Math.PI / n

          let alpha = 0;

          //console.log(r/600);
          //console.log(angle);
          let x = 1;
          let y = 1;
          for(let i=0; i < n; i++){
               x = r * Math.cos(alpha);
               y = r * Math.sin(alpha);

            alpha = alpha + angle
            //console.log(x);
            VERTICES.push([x,y]);
          }

          //console.log(VERTICES);

          const v = data.FLOAT32(VERTICES);

            const a = {size: 2, type: gl.FLOAT};
            const cmd = {mode: gl.TRIANGLE_FAN , first: 0, count: n}; //gl.TRIANGLES / gl.TRIANGLE_STRIP / gl.TRIANGLE_FAN
            super (gl, {data: v, attribs: [a]}, cmd);
        };

        animate ()
        {
          this.renderer.render (this.scene, this.camera);
          requestAnimationFrame (() => this.animate ());
        }
      };


export default Polygone;