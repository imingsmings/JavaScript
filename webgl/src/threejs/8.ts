import * as THREE from 'three'
import GUI from 'lil-gui'
import gsap from 'gsap'

import { scene, camera, animate } from './base'

export default function () {
  const geometery = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({
    color: 'orange'
  })
  const mesh = new THREE.Mesh(geometery, material)
  scene.add(mesh)

  mesh.visible = false

  const gui = new GUI()

  gui.add(mesh.position, 'z').name('Z').min(-3).max(3).step(0.01)
  gui.add(mesh, 'visible').name('Visible')
  gui.add(material, 'wireframe').name('Wireframe')

  const params = {
    color: 'orange',
    spin: false,
    rotation: false
  }
  gui
    // .addColor(params, 'color')
    .addColor(material, 'color')
    .name('Color')
    .onChange(() => {
      // material.color.set(params.color)
    })

  gui.add(params, 'spin').onChange(() => {
    gsap.to(mesh.rotation, { direction: 1, y: mesh.rotation.y + 10 })
  })
  gui.add(params, 'rotation')

  animate(() => {
    if (params.rotation) {
      mesh.rotation.x += 0.01
      mesh.rotation.z += 0.01
    }
  })
}
