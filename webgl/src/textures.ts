import { getWebGL2Context, compileShader, createProgram, clearDrawing, clientToNDC } from './uitls'

export default async function () {
  const image = await loadTexture('/door.jpg')
  if (!image) return

  const { canvas, gl } = getWebGL2Context()

  const vertexShaderSource = `#version 300 es
    uniform vec2 u_resolution;
    in vec2 a_position;
    in vec2 a_texCoord;
    out vec2 v_texCoord;

    void main() {
      vec2 zeroToOne = a_position / u_resolution;
      vec2 zeroToTwo = zeroToOne * 2.0;
      vec2 clipSpace = zeroToTwo - 1.0;

      gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1.0);
      v_texCoord = a_texCoord;
    }
  `

  const fragmentShaderSource = `#version 300 es
    precision highp float;

    uniform sampler2D u_image;

    in vec2 v_texCoord;
    out vec4 outColor;

    void main() {
      outColor = texture(u_image, v_texCoord);
      // outColor = vec4(1.0, 0, 0, 1.0);
    }
  `

  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
  const fragmentshader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
  const program = createProgram(gl, vertexShader, fragmentshader)

  const positionLocation = gl.getAttribLocation(program, 'a_position')
  const texCoordLocation = gl.getAttribLocation(program, 'a_texCoord')
  const resolutionLocation = gl.getUniformLocation(program, 'u_resolution')
  const imageLocation = gl.getUniformLocation(program, 'u_image')

  const vao = gl.createVertexArray()
  gl.bindVertexArray(vao)

  const points = [0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0]

  const positionBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)
  gl.enableVertexAttribArray(positionLocation)

  const texCoordBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW)
  gl.enableVertexAttribArray(texCoordLocation)
  gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0)

  const texture = gl.createTexture()
  gl.activeTexture(gl.TEXTURE0)
  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)

  clearDrawing(gl)

  gl.bindVertexArray(vao)

  gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
  gl.uniform1i(imageLocation, 0)

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
  setRectangle(gl, 0, 0, image.width, image.height)

  gl.drawArrays(gl.TRIANGLES, 0, 6)
}

function loadTexture(url: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const image = new Image()
    image.setAttribute('src', url)
    image.onload = function () {
      resolve(image)
    }
    image.onerror = function () {
      resolve(null)
    }
  })
}

function setRectangle(gl: WebGL2RenderingContext, x: number, y: number, width: number, height: number) {
  var x1 = x
  var x2 = x + width
  var y1 = y
  var y2 = y + height

  const points = new Float32Array([x1, y1, x2, y1, x1, y2, x1, y2, x2, y1, x2, y2])

  gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW)
}
