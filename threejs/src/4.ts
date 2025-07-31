import * as THREE from 'three'
import { OrbitControls } from 'three-stdlib'

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

  // let isDowning = false
  // let startX = 0
  // let currentX = 0
  // renderer.domElement.addEventListener('mousedown', handleMouseDown, false)
  // renderer.domElement.addEventListener('mousemove', handleMouseMove, false)
  // renderer.domElement.addEventListener('mouseup', handleMouseUp, false)

  // function handleMouseDown(e: MouseEvent) {
  //   isDowning = true
  //   startX = e.clientX
  // }

  // function handleMouseMove(e: MouseEvent) {
  //   if (!isDowning) return
  //   const distanceX = e.clientX - startX
  //   currentX += distanceX * 0.01
  //   startX = e.clientX
  //   camera.position.x = 5 * Math.cos(currentX)
  //   camera.position.z = 5 * Math.sin(currentX)
  //   camera.lookAt(0, 0, 0)
  //   renderer.render(scene, camera)
  // }

  // function handleMouseUp() {
  //   isDowning = false
  // }

  const controls = new OrbitControls(camera, renderer.domElement)
  // enableDamping 配合 update 开启惯性
  controls.enableDamping = true

  controls.addEventListener('change', render)

  function render() {
    renderer.render(scene, camera)
  }

  function animate() {
    requestAnimationFrame(animate)
    controls.update()
  }

  render()
  animate()
}
