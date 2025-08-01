import * as THREE from 'three'

// import { randomColor } from './base'

export default function () {
  const width = window.innerWidth
  const height = window.innerHeight
  const aspect = window.devicePixelRatio

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000)
  camera.position.set(0, 1, 5)
  camera.lookAt(0, 0, 0)

  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({
      color: 'green'
    })
  )
  scene.add(mesh)

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(width, height)
  document.body.append(renderer.domElement)

  const point = {
    x: 0,
    y: 0
  }
  renderer.domElement.addEventListener(
    'mousemove',
    (e: MouseEvent) => {
      point.x = e.offsetX / width - 0.5
      point.y = -(e.offsetY / height - 0.5)
    },
    false
  )

  function animate() {
    requestAnimationFrame(animate)
    camera.position.x = Math.cos(point.x * Math.PI * 2) * 3
    camera.position.z = Math.sin(point.x * Math.PI * 2) * 3
    camera.position.y = point.y * 5
    camera.lookAt(mesh.position)
    renderer.render(scene, camera)
  }

  animate()
}
