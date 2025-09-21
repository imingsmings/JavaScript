import { mat4 } from 'gl-matrix'
import { clearDrawing, compileShader, create2DTexture, createProgram, getWebGL2Context, loadImage } from './uitls'

export default async function () {
  const clock = await loadImage('/clock.png')

  if (!clock) return

  const matrix = mat4.create()

  // mat4.translate(matrix, matrix, [0, 0, 0])
  // mat4.scale(matrix, matrix, [1, 1, 1])
  // mat4.rotate(matrix, matrix, 0.001, [0, 0, 1])

  const { gl } = getWebGL2Context()

  const vertexShaderSource = `#version 300 es
    uniform mat4 uMVP;
    uniform int uMode;

    in vec2 a_position;
    in vec2 a_timePositon;
    in vec2 a_texCoord;

    out vec2 v_texCoord;

    void main() {
      vec2 pos = (uMode == 0) ? a_position : a_timePositon;
      gl_Position = uMVP * vec4(pos, 0, 1.0);
      v_texCoord = a_texCoord;
    }
  `

  const fragmentShaderSource = `#version 300 es
    precision highp float;

    uniform sampler2D u_image;
    uniform int uUseTexture;
    uniform vec4 uColor;
    
    in vec2 v_texCoord;

    out vec4 outColor;

    void main() {
      if (uUseTexture == 1) outColor = texture(u_image, v_texCoord);
      else outColor = uColor;
    }
  `

  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
  const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
  const program = createProgram(gl, vertexShader, fragmentShader)

  const vao = gl.createVertexArray()
  gl.bindVertexArray(vao)

  const points = new Float32Array([
    -1,
    1, // TL
    -1,
    -1, // BL
    1,
    -1, // BR
    1,
    -1, // BR
    -1,
    1, // TL
    1,
    1 // TR
  ])
  const uvs = new Float32Array([
    0,
    1, // TL
    0,
    0, // BL
    1,
    0, // BR
    1,
    0, // BR
    0,
    1, // TL
    1,
    1 // TR
  ])

  const times = new Float32Array([0, 0, 0, 1.0])

  const aPosition = gl.getAttribLocation(program, 'a_position')
  const aUV = gl.getAttribLocation(program, 'a_texCoord')
  const aTime = gl.getAttribLocation(program, 'a_timePositon')
  const uMVP = gl.getUniformLocation(program, 'uMVP')
  const uImage = gl.getUniformLocation(program, 'u_image')
  const uMode = gl.getUniformLocation(program, 'uMode')
  const uUseTexture = gl.getUniformLocation(program, 'uUseTexture')
  const uColor = gl.getUniformLocation(program, 'uColor')

  const vbo = gl.createBuffer()
  if (aPosition !== -1) {
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo)
    gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW)
    gl.enableVertexAttribArray(aPosition)
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)
  }

  const timeVBO = gl.createBuffer()
  if (aTime !== -1) {
    gl.bindBuffer(gl.ARRAY_BUFFER, timeVBO)
    gl.bufferData(gl.ARRAY_BUFFER, times, gl.STATIC_DRAW)
    gl.enableVertexAttribArray(aTime)
    gl.vertexAttribPointer(aTime, 2, gl.FLOAT, false, 0, 0)
  }

  const texCoordBuffer = gl.createBuffer()
  if (aUV !== -1) {
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, uvs, gl.STATIC_DRAW)
    gl.enableVertexAttribArray(aUV)
    gl.vertexAttribPointer(aUV, 2, gl.FLOAT, false, 0, 0)
  }

  create2DTexture(gl, clock, gl.TEXTURE0)

  gl.uniform1i(uImage, 0)

  function draw() {
    clearDrawing(gl)
    gl.bindVertexArray(vao)

    // 表盘
    gl.enableVertexAttribArray(aPosition)
    gl.enableVertexAttribArray(aUV)
    gl.disableVertexAttribArray(aTime)
    gl.uniform1i(uMode, 0)
    gl.uniform1i(uUseTexture, 1)
    gl.uniformMatrix4fv(uMVP, false, matrix)
    gl.drawArrays(gl.TRIANGLES, 0, points.length / 2)

    // 指针
    gl.enableVertexAttribArray(aTime)
    gl.disableVertexAttribArray(aUV)
    gl.disableVertexAttribArray(aPosition)
    gl.uniform1i(uMode, 1)
    gl.uniform1i(uUseTexture, 0)

    const now = new Date()
    const secondRad = ((now.getSeconds() + now.getMilliseconds() / 1000) / 60) * 2 * Math.PI
    const minuteRad = ((now.getMinutes() + now.getSeconds() / 60) / 60) * 2 * Math.PI
    const hourRad = (((now.getHours() % 12) + now.getMinutes() / 60) / 12) * 2 * Math.PI

    // 秒针
    gl.uniform4f(uColor, 1.0, 0, 0, 1.0)
    const s = mat4.create()
    mat4.scale(s, s, [0.9, 0.9, 1])
    mat4.rotate(s, s, -secondRad, [0, 0, 1])
    gl.uniformMatrix4fv(uMVP, false, s)
    gl.drawArrays(gl.LINES, 0, times.length / 2)

    // 分针
    gl.uniform4f(uColor, 0, 1.0, 0, 1.0)
    const m = mat4.create()
    mat4.scale(m, m, [0.6, 0.6, 1])
    mat4.rotate(m, m, -minuteRad, [0, 0, 1])
    gl.uniformMatrix4fv(uMVP, false, m)
    gl.drawArrays(gl.LINES, 0, times.length / 2)

    // 时针
    gl.uniform4f(uColor, 0, 0, 1.0, 1.0)
    const h = mat4.create()
    mat4.scale(h, h, [0.4, 0.4, 1])
    mat4.rotate(h, h, -hourRad, [0, 0, 1])
    gl.uniformMatrix4fv(uMVP, false, h)
    gl.drawArrays(gl.LINES, 0, times.length / 2)

    requestAnimationFrame(draw)
  }

  draw()
}
