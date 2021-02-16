import * as data from "https://bns.sr/webgl/js/data.js";
import * as vao  from "https://bns.sr/webgl/js/vao.js";

class Etoile extends vao.DirectVAO
      {
        /**
         * 
         * @param {WebGLRenderingContext} gl - Contexte WebGL
         * @param n nombre de sommets
         * @param r1 rayon interieur
         * @param r2 rayon exterieur
         */
        constructor (gl, n, r1, r2)
        {
            
          //Tableau contenant les coordonnées des différents sommets
          const VERTICES = [
          ];
          
          //angle sur 90°
          const val =  Math.PI / 2

          let angle = val;

          //console.log(angle);
          let x = 1;
          let y = 1;

          for(let i=0; i < n*2; i++){

            if(i%2 == 0){
              x = r1 * Math.cos(angle);
              y = r1 * Math.sin(angle);
            }else{
              x = r2 * Math.cos(angle);
              y = r2 * Math.sin(angle);
            }
              
            angle = angle + 2 * Math.PI / n;
            VERTICES.push([x,y]);
          }

          //console.log(VERTICES);

          const v = data.FLOAT32(VERTICES);

            const a = {size: 2, type: gl.FLOAT};
            const cmd = {mode: gl.TRIANGLE_FAN , first: 0, count: n*2}; //gl.TRIANGLES / gl.TRIANGLE_STRIP / gl.TRIANGLE_FAN
            super (gl, {data: v, attribs: [a]}, cmd);

        };

        /*animate ()
        {
          this.renderer.render (this.scene, this.camera);
          requestAnimationFrame (() => this.animate ());
        }*/
      };


export default Etoile;