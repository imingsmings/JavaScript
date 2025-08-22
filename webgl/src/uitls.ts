type WebGL2Context = {
  canvas: HTMLCanvasElement
  gl: WebGL2RenderingContext
}

export function getWebGL2Context(selector: string = '#webgl2'): WebGL2Context {
  const canvas = document.querySelector(selector) as HTMLCanvasElement
  const gl = canvas.getContext('webgl2') as WebGL2RenderingContext

  setDrawingSize(canvas, gl)

  if (!gl) {
    throw new Error('Your browser cannot support WebGL2')
  }

  return {
    canvas,
    gl
  }
}

export function setDrawingSize(canvas: HTMLCanvasElement, gl: WebGL2RenderingContext): void {
  const width = window.innerWidth
  const height = window.innerHeight

  canvas.width = width
  canvas.height = height

  gl.viewport(0, 0, width, height)
}

export function createProgram(gl: WebGL2RenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram {
  const program = gl.createProgram()

  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)

  gl.linkProgram(program)

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program)
    throw new Error(`Could not compile WebGL program. \n\n${info}`)
  }

  gl.useProgram(program)

  return program
}

export function compileShader(gl: WebGL2RenderingContext, type: GLenum, source: string): WebGLShader {
  const shader = gl.createShader(type)!

  gl.shaderSource(shader, source)
  gl.compileShader(shader)

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader)
    throw new Error(`Could not compile WebGL program. \n\n${info}`)
  }

  return shader
}

export function clientToNDC(e: MouseEvent, gl: WebGL2RenderingContext): [number, number] {
  const rect = (gl.canvas as HTMLCanvasElement).getBoundingClientRect()

  const xPx = (e.clientX - rect.left) * (gl.drawingBufferWidth / rect.width)
  const yPx = (e.clientY - rect.top) * (gl.drawingBufferHeight / rect.height)

  const [vx, vy, vw, vh] = gl.getParameter(gl.VIEWPORT)

  const x = ((xPx - vx) / vw) * 2 - 1
  const y = 1 - ((yPx - vy) / vh) * 2

  return [x, y]
}

export function clearDrawing(gl: WebGL2RenderingContext) {
  gl.clearColor(0, 0, 0, 1.0)
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
}

export function create2DTexture(gl: WebGL2RenderingContext, image: HTMLImageElement, textureUnit: number) {
  const texture = gl.createTexture()

  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
  gl.activeTexture(textureUnit)
  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)

  return texture
}

export function loadImage(url: string): Promise<HTMLImageElement | null> {
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
