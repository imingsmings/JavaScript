import { mat4 } from 'gl-matrix'
import { clearDrawing, compileShader, createProgram, getWebGL2Context } from './uitls'

export default function () {
  const matrix = mat4.create()

  mat4.translate(matrix, matrix, [0, 0, 0])
  mat4.scale(matrix, matrix, [1, 1, 1])

  const { gl } = getWebGL2Context()

  const vertexShaderSource = `#version 300 es
    uniform mat4 uMVP;

    in vec2 a_position;

    void main() {
      gl_Position = uMVP * vec4(a_position, 0, 1.0);
    }
  `

  const fragmentShaderSource = `#version 300 es
    precision highp float;
    out vec4 outColor;

    void main() {
      outColor = vec4(1.0, 0, 0, 1.0);
    }
  `

  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
  const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
  const program = createProgram(gl, vertexShader, fragmentShader)

  const vao = gl.createVertexArray()
  gl.bindVertexArray(vao)

  const points = new Float32Array([0, 0.5, 0, 0, 0.5, 0])
  const aPosition = gl.getAttribLocation(program, 'a_position')
  const uMVP = gl.getUniformLocation(program, 'uMVP')

  const vbo = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, vbo)
  gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW)
  gl.enableVertexAttribArray(aPosition)
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)

  function draw() {
    mat4.rotate(matrix, matrix, 0.001, [0, 0, 1])

    clearDrawing(gl)

    gl.bindVertexArray(vao)
    gl.uniformMatrix4fv(uMVP, false, matrix)
    gl.drawArrays(gl.TRIANGLES, 0, points.length / 2)

    requestAnimationFrame(draw)
  }

  draw()
}
