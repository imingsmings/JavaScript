import * as THREE from 'three'

export default function () {
  const width = window.innerWidth
  const height = window.innerHeight
  const aspect = window.devicePixelRatio

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000)
  camera.position.set(0, 2, 5)
  camera.lookAt(0, 0, 0)

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(width, height)
  document.body.append(renderer.domElement)

  const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial())
  scene.add(cube)

  const axes = new THREE.AxesHelper(3)
  scene.add(cube, axes)

  let angle = 0
  const raduis = 3
  function animate() {
    requestAnimationFrame(animate)
    angle += 0.01
    camera.position.x = raduis * Math.cos(angle)
    camera.position.z = raduis * Math.sin(angle)
    camera.lookAt(0, 0, 0)

    renderer.render(scene, camera)
  }

  animate()
}
