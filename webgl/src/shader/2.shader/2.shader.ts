import * as THREE from 'three'
import { animate, scene } from '../../threejs/base'
import vertexSource from './vertex.glsl'
import fragmentSource from './fragment.glsl'

export default function () {
  const geometry = new THREE.PlaneGeometry(4, 4, 32, 32)

  const material = new THREE.RawShaderMaterial({
    transparent: true,
    glslVersion: THREE.GLSL3,
    vertexShader: vertexSource,
    fragmentShader: fragmentSource
  })

  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  const clock = new THREE.Clock()
  animate()
}
