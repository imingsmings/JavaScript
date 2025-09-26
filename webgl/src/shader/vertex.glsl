uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
in vec3 position;

float loremIpsum() {
  float a = 1.0;
  float b = 2.0;

  return a + b;
 }

void main() {
  // float a = 1.0;
  // float b = 2.0;
  // float c = a / b;

  // int ia = 1;
  // int ib = int(b);

  // bool foo = true;

  // vec2 foo = vec2(1.0, 2.0);

  // vec4 foo = vec4(1.0, 2.0, 3.0, 4.0);
  // float bar = foo.w;

  float result = loremIpsum();

  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
 }

