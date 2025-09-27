precision highp float;

uniform vec3 uColor;
uniform sampler2D uTexture;

in float vColor;
in vec2 vUV;

out vec4 outColor;

void main() {
  // outColor = vec4(1.0, 0.5, 0.0, 0.5);
  // outColor = vec4(0.5, vColor, 0.5, 1.0);
  // outColor = vec4(uColor, 1.0);

  outColor = texture(uTexture, vUV);
}