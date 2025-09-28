uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

uniform float uTime;
uniform float uBigWaveElevation;
uniform vec2 uBigWaveFrequency;
uniform float uBigWaveSpeed;

in vec3 position;

void main () {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  float elevation = sin(modelPosition.x * uBigWaveFrequency.x * uTime * uBigWaveSpeed) * 
                    sin(modelPosition.z * uBigWaveFrequency.y * uTime * uBigWaveSpeed) * 
                    uBigWaveElevation;

  modelPosition.y += elevation;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;

  gl_Position = projectionPosition;
}
