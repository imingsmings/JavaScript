uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

uniform float uTime;
uniform float uBigWaveElevation;
uniform vec2 uBigWaveFrequency;
uniform float uBigWaveSpeed;

in vec3 position;

out float vElevation;

void main () {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  float t = uTime * uBigWaveSpeed;

  float phaseX = modelPosition.x * uBigWaveFrequency.x + t;
  float phaseZ = modelPosition.z * uBigWaveFrequency.y + t;

  float elevation = sin(phaseX) * sin(phaseZ) * uBigWaveElevation;

  modelPosition.y += elevation;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;

  gl_Position = projectionPosition;

  vElevation = elevation;
}
