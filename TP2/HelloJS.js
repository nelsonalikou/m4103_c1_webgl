import * as matrix  from "https://bns.sr/webgl/js/matrix.js";
import Polygone     from "./Polygone.js";
import ColoringBook from "https://bns.sr/webgl/js/coloring-book.js";

class HelloJS
{
  constructor (id)
  {
    const canvas = document.getElementById (id);
    const gl = canvas.getContext ('webgl2');
    gl.viewport (0, 0, canvas.width, canvas.height);
    gl.clearColor (0, 1, 0, 1);

    this.program = new ColoringBook (gl);
<<<<<<< HEAD
    this.polygone = new Polygone (gl,6,50/150);
=======
    this.polygone = new Polygone (gl,4,6);
>>>>>>> d1f8e2be69af0cb8ba86eabb208aec4da00efe33
    this.gl = gl;

    this.animate ();
  }

  animate ()
  {
    this.gl.clear (this.gl.COLOR_BUFFER_BIT);

    this.program.use (p => {
      p.setModelView (matrix.SCALE (0.5, 0.5, 1));
      p.setColor ([1, 1, 1, 1]);
      this.polygone.draw ();
    });

    requestAnimationFrame (() => this.animate ());
  }
}

export default HelloJS;