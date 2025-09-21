import { mat4 } from 'gl-matrix'
import { clearDrawing, compileShader, createProgram, getWebGL2Context } from './uitls'

export default function () {
  const { gl, canvas } = getWebGL2Context()

  const vertexShaderSource = `#version 300 es
    uniform mat4 u_formMatrix;

    in vec4 a_position;
    in vec4 a_color;

    out vec4 f_color;
    
    void main() {
      gl_Position = u_formMatrix * a_position;
      f_color = a_color;
    }
  `
  const fragmentShaderSource = `#version 300 es
    precision highp float;

    in vec4 f_color;

    out vec4 outColor;

    void main() {
      outColor = f_color;
    }
  `

  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
  const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
  const program = createProgram(gl, vertexShader, fragmentShader)

  const BYTES = Float32Array.BYTES_PER_ELEMENT
  const points = new Float32Array([
    0.0, 0.5, -0.4, 1, 0.4, 1.0, 0.4, 1, -0.5, -0.5, -0.4, 1, 0.4, 1.0, 0.4, 1, 0.5, -0.5, -0.4, 1, 0.4, 1.0, 0.4, 1, 0.5, 0.4, -0.2, 1, 1.0, 1.0, 0.4, 1, -0.5,
    0.4, -0.2, 1, 1.0, 1.0, 0.4, 1, 0.0, -0.6, -0.2, 1, 1.0, 1.0, 0.4, 1, 0.0, 0.5, 0.0, 1, 0.4, 0.4, 1.0, 1, -0.5, -0.5, 0.0, 1, 0.4, 0.4, 1.0, 1, 0.5, -0.5,
    0.0, 1, 0.4, 0.4, 1.0, 1
  ])

  // in
  const aPosition = gl.getAttribLocation(program, 'a_position')
  const aColor = gl.getAttribLocation(program, 'a_color')

  // uniform
  const uniformMatrix = gl.getUniformLocation(program, 'u_formMatrix')

  const vao = gl.createVertexArray()
  gl.bindVertexArray(vao)

  const vbo = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, vbo)
  gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW)

  // enable position
  gl.enableVertexAttribArray(aPosition)
  gl.vertexAttribPointer(aPosition, 4, gl.FLOAT, false, 8 * BYTES, 0)

  // enable color
  gl.enableVertexAttribArray(aColor)
  gl.vertexAttribPointer(aColor, 4, gl.FLOAT, false, 8 * BYTES, 4 * BYTES)

  let viewMatrix = mat4.identity(mat4.create())
  viewMatrix = mat4.lookAt(viewMatrix, [0, 2, 2], [0, 0, 0], [0, 1, 0])

  let modelMatrix = mat4.identity(mat4.create())
  let angle = (Math.PI / 180) * 30
  mat4.rotate(modelMatrix, modelMatrix, angle, [0, 1, 0])

  let modelView = mat4.identity(mat4.create())
  mat4.multiply(modelView, viewMatrix, modelMatrix)

  let projMatrix = mat4.identity(mat4.create())
  mat4.perspective(projMatrix, 45 * (Math.PI / 180), canvas.width / canvas.height, 0.1, 1000)

  let mvpMatrix = mat4.identity(mat4.create())
  mat4.multiply(mvpMatrix, projMatrix, modelView)

  gl.uniformMatrix4fv(uniformMatrix, false, mvpMatrix)

  let deg = 0
  function draw() {
    deg += 0.1
    let modelMatrix = mat4.identity(mat4.create())
    let angle = (Math.PI / 180) * deg
    mat4.rotate(modelMatrix, modelMatrix, angle, [0, 1, 0])

    let modelView = mat4.identity(mat4.create())
    mat4.multiply(modelView, viewMatrix, modelMatrix)

    let mvpMatrix = mat4.identity(mat4.create())
    mat4.multiply(mvpMatrix, projMatrix, modelView)

    gl.uniformMatrix4fv(uniformMatrix, false, mvpMatrix)

    clearDrawing(gl)
    gl.enable(gl.DEPTH_TEST)
    gl.drawArrays(gl.TRIANGLES, 0, points.length / 8)

    requestAnimationFrame(draw)
  }

  draw()
}
