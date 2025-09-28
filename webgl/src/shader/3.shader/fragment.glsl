precision highp float;

uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;

out vec4 outColor;

void main() {
  outColor = vec4(uSurfaceColor, 1.0);
}