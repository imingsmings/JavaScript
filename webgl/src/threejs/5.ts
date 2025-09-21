import * as THREE from 'three'

import { scene, camera, animate } from './base'

export default function () {
  // const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial())
  // scene.add(mesh)

  // position -> translate
  // mesh.position.set(0.7, -0.6, 1)

  // scale
  // mesh.scale.set(2, 0.5, 0.5)

  // rotation
  // mesh.rotation.set(0, 1, 1)

  // Group
  const group = new THREE.Group()
  // group.position.y = 1
  scene.add(group)

  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({
      color: randomHexColor()
    })
  )
  cube.position.z = 0.5
  group.add(cube)

  const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({
      color: randomHexColor()
    })
  )
  cube2.position.x = 2
  group.add(cube2)

  animate(() => {
    cube.material.color = new THREE.Color(randomHexColor())
    cube2.material.color = new THREE.Color(randomHexColor())
  })
}

function randomHexColor() {
  return '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')
}
