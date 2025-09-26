import * as THREE from 'three'
import { animate, scene } from '../threejs/base'
import vertexSource from './vertex.glsl'
import fragmentSource from './fragment.glsl'

export default function () {
  const textureLoader = new THREE.TextureLoader()
  const flagTexture = textureLoader.load('/shader/flag-french.jpg')

  const geometry = new THREE.PlaneGeometry(4, 4, 32, 32)
  const count = geometry.attributes.position.count
  const positions = new Float32Array(count)

  for (let i = 0; i < count; i++) {
    positions[i] = Math.random()
  }
  geometry.setAttribute('aPosition', new THREE.BufferAttribute(positions, 1))

  const material = new THREE.RawShaderMaterial({
    transparent: true,
    glslVersion: THREE.GLSL3,
    vertexShader: vertexSource,
    fragmentShader: fragmentSource,
    uniforms: {
      uFreqency: {
        value: new THREE.Vector2(8, 2)
      },
      uColor: {
        value: new THREE.Color('orange')
      },
      uTexture: {
        value: flagTexture
      },
      uTime: {
        value: 0
      }
    }
  })

  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  const clock = new THREE.Clock()
  animate(() => {
    const uTime = clock.getElapsedTime()

    material.uniforms.uFreqency.value.x += 0.01
    material.uniforms.uFreqency.value.y += 0.01
    material.uniforms.uTime.value = uTime
  })
}
