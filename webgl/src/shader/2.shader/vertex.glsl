uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

in vec3 position;
in vec2 uv;

out vec2 uUV;

void main () {
  mat4 basePosition = projectionMatrix * viewMatrix * modelMatrix;

  gl_Position = basePosition * vec4(position, 1.0);

  uUV = uv;
}