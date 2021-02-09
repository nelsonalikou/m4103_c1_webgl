import * as data from "https://bns.sr/webgl/js/data.js";
import * as vao  from "https://bns.sr/webgl/js/vao.js";

class Etoile extends vao.DirectVAO
      {
        constructor (gl, n, r1, r2)
        {
            
          //Tableau contenant les coordonnées des différents sommets
          const VERTICES = [
          ];
          
          //angle sur 360°
          const angle = 2 * Math.PI / n*2

          let alpha = 0;

          console.log(angle);
          let x = 1;
          let y = 1;
          for(let i=0; i < n*2; i++){
            if(i%2 == 0){
              x = r1 * Math.cos(alpha);
              y = r1 * Math.sin(alpha);
            }else{
              x = r2 * Math.cos(alpha);
              y = r2 * Math.sin(alpha);
            }
              
            alpha = alpha + angle
            console.log(x);
            VERTICES.push([x,y]);
          }

          console.log(VERTICES);

          const v = data.FLOAT32(VERTICES);

            const a = {size: 2, type: gl.FLOAT};
            const cmd = {mode: gl.TRIANGLE_FAN , first: 0, count: n*2}; //gl.TRIANGLES / gl.TRIANGLE_STRIP / gl.TRIANGLE_FAN
            super (gl, {data: v, attribs: [a]}, cmd);

        //pour le 2ème triangle
        //Tableau contenant les coordonnées des différents sommets
        /*const VERTICES2 = [
        ];
        
        //angle sur 360°  
        const angle2 = 2 * Math.PI / n

          let alpha2 = angle2/2;

          console.log(r2/600);
          console.log(angle2);
          let x2 = 1;
          let y2 = 1;
          for(let i=0; i < n; i++){
               x2 = r2 * Math.cos(alpha);
               y2 = r2 * Math.sin(alpha);

            alpha = alpha + angle
            VERTICES2.push(VERTICES[i]);
            VERTICES2.push([x2,y2]);
          }
          const v2 = data.FLOAT32(VERTICES2);

          const a2 = {size: 2, type: gl.FLOAT};
            const cmd2 = {mode: gl.TRIANGLE , first: 0, count: n}; //gl.TRIANGLES / gl.TRIANGLE_STRIP / gl.TRIANGLE_FAN
            //super (gl, {data: v2, attribs: [a2]}, cmd2);
            */

        };

        animate ()
        {
          this.renderer.render (this.scene, this.camera);
          requestAnimationFrame (() => this.animate ());
        }
      };


export default Etoile;