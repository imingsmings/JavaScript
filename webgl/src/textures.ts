import { getWebGL2Context, compileShader, createProgram, clearDrawing, loadImage, create2DTexture } from './uitls'

export default async function () {
  const image = await loadImage('/door.jpg')
  if (!image) return

  const roughness = await loadImage('/roughness.jpg')
  if (!roughness) return

  const { canvas, gl } = getWebGL2Context()

  const vertexShaderSource = `#version 300 es
    in vec2 a_position;
    in vec2 a_texCoord;
    out vec2 v_texCoord;

    void main() {
      gl_Position = vec4(a_position, 0, 1.0);
      v_texCoord = a_texCoord;
      // v_texCoord = vec2(4.0, 2.0) * a_texCoord;
    }
  `

  const fragmentShaderSource = `#version 300 es
    precision highp float;

    uniform sampler2D u_image;
    uniform sampler2D u_rough;

    in vec2 v_texCoord;
    out vec4 outColor;

    void main() {
      // outColor = texture(u_image, v_texCoord);
      // outColor = vec4(1.0, 0, 0, 1.0);

      vec3 base = texture(u_image, v_texCoord).rgb;
      float rough = texture(u_rough, v_texCoord).g;

      vec3 overlay = mix(base, vec3(rough), 0.1);
      outColor = vec4(overlay, 1.0);
    }
  `

  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
  const fragmentshader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
  const program = createProgram(gl, vertexShader, fragmentshader)

  const positionLocation = gl.getAttribLocation(program, 'a_position')
  const texCoordLocation = gl.getAttribLocation(program, 'a_texCoord')
  const imageLocation = gl.getUniformLocation(program, 'u_image')
  const roughLocation = gl.getUniformLocation(program, 'u_rough')

  const vao = gl.createVertexArray()
  gl.bindVertexArray(vao)

  const positions = new Float32Array([
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

  const positionBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW)
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)
  gl.enableVertexAttribArray(positionLocation)

  const texCoordBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, uvs, gl.STATIC_DRAW)
  gl.enableVertexAttribArray(texCoordLocation)
  gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0)

  create2DTexture(gl, image, gl.TEXTURE0)
  create2DTexture(gl, roughness, gl.TEXTURE1)

  clearDrawing(gl)

  gl.bindVertexArray(vao)

  gl.uniform1i(imageLocation, 0)
  gl.uniform1i(roughLocation, 1)

  gl.drawArrays(gl.TRIANGLES, 0, positions.length / 2)
}
