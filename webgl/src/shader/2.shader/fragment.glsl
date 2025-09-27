precision highp float;

in vec2 uUV;

out vec4 outColor;

void main() {

  // float strength = mod(uUV.y * 10.0, 1.0);
  // if (strength < 0.5) {
  //   strength = 0.0;
  // } else {
  //   strength = 1.0;
  // }
  // strength = strength < 0.5 ? 0.0 : 1.0;
  // strength = step(0.8, strength);

  // float strength = step(0.8, mod(uUV.x * 10.0, 1.0));
  // strength *= step(0.8, mod(uUV.y * 10.0, 1.0));

  float strength = min(abs(uUV.x - 0.5), abs(uUV.y -0.5));

  outColor = vec4(strength, strength, strength, 1.0);
}