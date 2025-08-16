import { getWebGL2Context, compileShader, createProgram, clearDrawing } from './uitls'

export default function () {
  const { canvas, gl } = getWebGL2Context()

  const vertexShaderSource = `#version 300 es
    in vec2 line_point;

    void main() {
      gl_Position = vec4(line_point, 0.0, 1.0);
    }
  `

  const fragmentShaderSource = `#version 300 es
    precision mediump float;
    uniform vec3 line_color;
    out vec4 outColor;
  
    void main() {
      outColor = vec4(line_color, 1.0);
    }
  `

  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
  const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
  const program = createProgram(gl, vertexShader, fragmentShader)
  const points = new Float32Array([0, 0, 0.5, 0, 0.6, 0.6, 0.6, -0.6])

  const vao = gl.createVertexArray()
  gl.bindVertexArray(vao)

  const vbo = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, vbo)
  gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW)

  const linePointLoc = gl.getAttribLocation(program, 'line_point')
  const lineColor = gl.getUniformLocation(program, 'line_color')

  gl.enableVertexAttribArray(linePointLoc)
  gl.vertexAttribPointer(linePointLoc, 2, gl.FLOAT, false, 0, 0)

  clearDrawing(gl)
  gl.bindVertexArray(vao)
  // gl.drawArrays(gl.LINES, 0, points.length / 2)
  // gl.drawArrays(gl.LINE_STRIP, 0, points.length / 2)
  gl.uniform3f(lineColor, Math.random(), Math.random(), Math.random())
  gl.drawArrays(gl.LINE_LOOP, 0, points.length / 2)
}
