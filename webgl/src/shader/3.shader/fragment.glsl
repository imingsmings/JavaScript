precision highp float;

uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;
uniform float uColorOffset;
uniform float uColorMultipler;

in float vElevation;

out vec4 outColor;

void main() {
  float maxStrength = (vElevation + uColorOffset) * uColorMultipler;
  vec3 color = mix(uDepthColor, uSurfaceColor, maxStrength);

  outColor = vec4(color, 1.0);
}