import * as THREE from 'three'

import { scene, camera, animate } from './base'

export default function () {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({
      color: 'orange'
    })
  )
  scene.add(mesh)

  animate()
}
