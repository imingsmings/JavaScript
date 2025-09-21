import { getWebGL2Context, compileShader, createProgram, clearDrawing, clientToNDC } from './uitls'

export default function () {
  const { canvas, gl } = getWebGL2Context()

  const vertexShaderSource = `#version 300 es
    in vec3 line_point;

    void main() {
      gl_Position = vec4(line_point, 1.0);
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
  // const points = new Float32Array([0, 0.5, 0, -0.5, 0.5, 0, 1, 1, 0, 0.8, -0.7, 0])
  // const points = new Float32Array([
  //   0.0, 1.0, 0, 0.224514, 0.309017, 0, 0.951057, 0.309017, 0, 0.363271, -0.118034, 0, 0.587785, -0.809017, 0, 0.0, -0.381966, 0, -0.587785, -0.809017, 0,
  //   -0.363271, -0.118034, 0, -0.951057, 0.309017, 0, -0.224514, 0.309017, 0
  // ])

  const points = new Float32Array([-0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 0, -0.5, -0.5, 0])
  const indices = new Uint16Array([0, 1, 2, 0, 2, 3])

  const vao = gl.createVertexArray()
  gl.bindVertexArray(vao)

  const vbo = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, vbo)
  gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW)

  const ebo = gl.createBuffer()
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ebo)
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW)

  const linePointLoc = gl.getAttribLocation(program, 'line_point')
  const lineColor = gl.getUniformLocation(program, 'line_color')

  gl.enableVertexAttribArray(linePointLoc)
  gl.vertexAttribPointer(linePointLoc, 3, gl.FLOAT, false, 0, 0)

  canvas.addEventListener('click', draw, false)
  canvas.addEventListener('mousedown', handleMouseDown, false)

  let isDowning = false
  const cursor: Cursor = {
    x: 0,
    y: 0
  }
  function handleMouseDown(e: MouseEvent) {
    const [x, y] = clientToNDC(e, gl)
    cursor.x = x
    cursor.y = y

    const isIn = isInTarget(points, 3, cursor)

    if (!isIn) return

    isDowning = true

    document.addEventListener('mousemove', handleMouseMove, false)
    document.addEventListener('mouseup', handleMouseUp, false)
  }

  function handleMouseMove(e: MouseEvent) {
    if (!isDowning) return

    const [x, y] = clientToNDC(e, gl)

    const diffX = x - cursor.x
    const diffY = y - cursor.y

    for (let i = 0; i < points.length / 3; i++) {
      const i3 = i * 3
      points[i3] = points[i3] + diffX
      points[i3 + 1] = points[i3 + 1] + diffY
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, vbo)
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, points.subarray(0, points.length))
    draw()

    cursor.x = x
    cursor.y = y
  }

  function handleMouseUp(e: MouseEvent) {
    isDowning = false

    cursor.x = 0
    cursor.y = 0

    document.removeEventListener('mousemove', handleMouseMove, false)
    document.removeEventListener('mouseup', handleMouseUp, false)
  }

  draw()

  function draw() {
    clearDrawing(gl)
    gl.bindVertexArray(vao)
    gl.uniform3f(lineColor, Math.random(), Math.random(), Math.random())

    // gl.drawArrays(gl.TRIANGLES, 0, points.length / 3)

    //  (v0,v1,v2), (v1,v2,v3), (v2,v3,v4) …
    // gl.drawArrays(gl.TRIANGLE_STRIP, 0, points.length / 3)

    // (v0,v1,v2), (v0,v2,v3), (v0,v3,v4) …
    // gl.drawArrays(gl.TRIANGLE_FAN, 0, points.length / 3)

    // gl.drawArrays(gl.TRIANGLES, 0, points.length / 3)

    gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0)
  }
}

function isInTarget(points: Float32Array, seg: number, cursor: Cursor) {
  const xs: number[] = []
  const ys: number[] = []

  for (let i = 0; i < points.length / seg; i++) {
    const i3 = i * seg
    xs.push(points[i3])
    ys.push(points[i3 + 1])
  }

  const minX = Math.min(...xs)
  const maxX = Math.max(...xs)

  const minY = Math.min(...ys)
  const maxY = Math.max(...ys)

  return cursor.x >= minX && cursor.x <= maxX && cursor.y >= minY && cursor.y <= maxY
}

interface Cursor {
  x: number
  y: number
}
