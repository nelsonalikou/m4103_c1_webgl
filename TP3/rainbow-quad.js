// WebGL - Aassif Benassarou

import Quad    from "https://bns.sr/webgl/js/quad.js";
import Program from "https://bns.sr/webgl/js/program.js";
//import Polygone from "../TP2/Polygone.js";
import * as matrix  from "https://bns.sr/webgl/js/matrix.js";

// Lorsque la position du curseur est modifiée, les nuances de couleurs changent.
// le curseur interagit avec le shader grace au program qui établi une sorte de lien entre les deux.


class RainbowQuad
{
  /** @constructor */
  constructor (canvas, range)
  {
    const c = document.getElementById (canvas);
    const gl = c.getContext ('webgl2', {antialias: true});

    const r = document.getElementById (range);
    r.oninput = RainbowQuad.ONINPUT (this);

    gl.clearColor (0, 1, 0, 1);

    this.gl         = gl;
    //Onjet observé
    this.quad       = new Quad (gl);
    this.program    = new Program (gl, RainbowQuad.PROGRAM);
    this.rotation   = RainbowQuad.RANGE (r);
    //
    //this.polygone = new Polygone (gl,4,0.75));
    //this.gl = gl;

    this.animate ();
  }

  animate ()
  {
    this.gl.clear (this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    const M = matrix.MUL4(matrix.TRANSLATION(0,0,-5), this.rotation) ;
    const P = matrix.PERSPECTIVE(Math.PI/4,600/600,5-2,5+2);
    this.program.use ({ M, 'P' : P}, p => this.quad.draw ());

    requestAnimationFrame (() => this.animate ());
  }
};

RainbowQuad.PROGRAM =
{
  attribs: ['position'],

  //M : matrice de projection
  //P : matrice de modélisation
  //
  uniforms: { 'M': 'mat4', 'P': 'mat4'},

  vertex:
  [
    'precision mediump float;',
    //
    'uniform mat4 M, P;',
    'attribute vec2 position;',
    'varying vec4 color;',
    'void main ()',
    '{',
      'color = vec4 (0.5 * position + 0.5, 0, 1);',
      // 
      'gl_Position = P * M * vec4 (position, 0, 1);',
    '}'
  ].join ('\n'),

  fragment:
  [
    'precision mediump float;',
    'varying vec4 color;',
    'void main ()',
    '{',
      'gl_FragColor = color;',
    '}'
  ].join ('\n')
};

RainbowQuad.RANGE = function (r)
{
  return  matrix.ROTATION([0,1,0], r.value * 2 * Math.PI/100);
}

RainbowQuad.ONINPUT = function (quad)
{
  return function (e) {
    quad.rotation = RainbowQuad.RANGE (e.target);
  };
}

export default RainbowQuad;

