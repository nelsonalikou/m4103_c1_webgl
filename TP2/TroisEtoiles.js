import * as matrix  from "https://bns.sr/webgl/js/matrix.js";
import Etoile     from "./Etoile.js";
import ColoringBook from "https://bns.sr/webgl/js/coloring-book.js";
import {ORTHO} from "https://bns.sr/webgl/js/matrix";

class TroisEtoiles
{

    constructor (id)
    {
        //Cela récupère le canvas
        const canvas = document.getElementById (id);

        // le contexte dans lequel on récupère  le canvas
        const gl = canvas.getContext ('webgl2');

        //affiche un carré avec des cordonnées en fonction du millieu
        gl.viewport (0, 0, canvas.width, canvas.height);

        //Choisie la couleur du canvas
        gl.clearColor (0, 1, 0, 1);

        //création dun instance ColoringBook
        this.program = new ColoringBook (gl, ORTHO(0, 600, 0, 600, -1, 1));
        
        //Déclaration de l'étoile qui sera utlisée pour tous les dessins
        this.etoile1 = new Etoile(gl, 5, 25, 50);
        this.gl = gl;

        this.echelle = 1;
        //Définition du zoom (grossissement - diminution)
        document.addEventListener('keydown', (event) => {
            if (event.key === '+')
            {
                this.echelle *= 2;
            }else if(event.key === '-')
            {
                this.echelle /= 2;
            }
        });

        this.animate ();
    }

    /**
     *
     */
    animate ()
    {
        this.gl.clear (this.gl.COLOR_BUFFER_BIT);

        let e = this.echelle;
        this.program.use (p => {
            //Mise en place de la première étoile
            p.setModelView (matrix.MUL4(matrix.TRANSLATION(150, 300, 1), matrix.SCALE(e*3, e*3, 1)));
            p.setColor ([1, 1, 1, 1]);
            this.etoile1.draw ();
            //Mise en place de la seconde étoile
            p.setModelView (matrix.MUL4(matrix.TRANSLATION(450, 150, 1), matrix.SCALE(e*2, e*2, 1)));
            p.setColor ([1, 1, 1, 1]);
            this.etoile1.draw ();
            //Mise en place de la troisième étoile
            p.setModelView (matrix.MUL4(matrix.TRANSLATION(450, 450, 1), matrix.SCALE(e, e, 1)));
            p.setColor ([1, 1, 1, 1]);
            this.etoile1.draw ();
        });

        requestAnimationFrame (() => this.animate ());
    }
}

export default TroisEtoiles;
