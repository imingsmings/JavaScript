uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

uniform vec2 uFreqency;
uniform float uTime;

in vec3 position;
in float aPosition;
in vec2 uv;

out float vColor;
out vec2 vUV;

float loremIpsum() {
  float a = 1.0;
  float b = 2.0;

  return a + b;
 }

void main() {
  // gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  // modelPosition.y += 1.0;
  modelPosition.z += sin(modelPosition.x * uFreqency.x - uTime) * 0.2;
  modelPosition.z += sin(modelPosition.y * uFreqency.y- uTime) * 0.2;
  // modelPosition.z += aPosition;

  vec4 viewPosition = viewMatrix * modelPosition;

  vec4 projectionPosition = projectionMatrix * viewPosition;

  gl_Position = projectionPosition;

  // vColor = aPosition;
  vUV = uv;
 }

