import * as THREE from 'three'

import { scene, camera, animate } from './base'

export default function () {
  // const geometery = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2)
  // const geometery = new THREE.PlaneGeometry(1, 1, 2, 2)

  // 自定义
  // const positions = new Float32Array([0, 0, 0, 0, 1, 0, 1, 0, 0])
  // const attributes = new THREE.BufferAttribute(positions, 3)
  // const geometery = new THREE.BufferGeometry()
  // geometery.setAttribute('position', attributes)

  const count = 100
  const positions = new Float32Array(count * 3 * 3)
  const colors = new Float32Array(count * 3 * 3)

  for (let i = 0; i < positions.length; i++) {
    positions[i] = Math.random() - 0.5
    colors[i] = Math.random()
  }

  const geometery = new THREE.BufferGeometry()
  geometery.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometery.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  const material = new THREE.MeshBasicMaterial({
    // color: 'orange',
    vertexColors: true,
    wireframe: true
  })

  const mesh = new THREE.Mesh(geometery, material)
  scene.add(mesh)

  let last = 0
  animate((time: number) => {
    if (time - last <= 500) return
    last = time
    for (let i = 0; i < positions.length; i++) {
      positions[i] = Math.random() - 0.5
      colors[i] = Math.random()
    }
    geometery.attributes.position.needsUpdate = true
    geometery.attributes.color.needsUpdate = true
  })
}
