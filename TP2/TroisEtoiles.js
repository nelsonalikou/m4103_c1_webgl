import * as matrix  from "https://bns.sr/webgl/js/matrix.js";
import Etoile     from "./Etoile.js";
import ColoringBook from "https://bns.sr/webgl/js/coloring-book.js";

class TroisEtoiles
{
  constructor (id)
  {
    const canvas = document.getElementById (id);
    const gl = canvas.getContext ('webgl2');
    gl.viewport (0, 0, canvas.width, canvas.height);
    gl.clearColor (0, 1, 0, 1);

    this.program = new ColoringBook (gl);
    // 1=> 600 et on veut un rayon de 200
    let width = 300;
      this.tailleEtoile1 = [75, 150];
      this.etoile1 = new Etoile(gl, 5, this.tailleEtoile1[0]/width, this.tailleEtoile1[1]/width); //[150, 300]



      /*this.tailleEtoile2 = [50, 100];
      this.etoile2 = new Etoile(gl, 5, this.tailleEtoile2[0]/width, this.tailleEtoile2[1]/width, [450, 150]);
      this.tailleEtoile3 = [25, 50];
      this.etoile3 = new Etoile(gl, 5, this.tailleEtoile3[0]/width, this.tailleEtoile3[1]/width, [450, 450]);*/

    this.gl = gl;

        

    this.animate ();
  }

  animate ()
  {
    this.gl.clear (this.gl.COLOR_BUFFER_BIT);

    this.program.use (p => {
      p.setModelView (matrix.SCALE (0.5, 0.5, 0));
      //Dessin au centre en (300, 300)
      p.setModelView(matrix.TRANSLATION(0.125, 0.25, 0));
      p.setColor ([1, 1, 1, 1]);
      //this.polygone.draw ();


      this.etoile1.draw ();
      /*this.etoile2.draw ();
      this.etoile3.draw ();*/
    });

    requestAnimationFrame (() => this.animate ());
  }
}

export default TroisEtoiles;