import * as THREE from 'three'
import { OrbitControls } from 'three-stdlib'

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
  aspect: window.innerWidth / window.innerHeight,
  fov: 45,
  near: 0.1,
  far: 1000
}

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(sizes.fov, sizes.aspect, sizes.near, sizes.far)
// const camera = new THREE.OrthographicCamera(-1, 1, 1, -1)
camera.position.set(0, 2, 4)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.body.append(renderer.domElement)

const axes = new THREE.AxesHelper(3)
scene.add(axes)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

controls.addEventListener('change', render)

function render() {
  renderer.render(scene, camera)
}

function animate(cb?: Function) {
  requestAnimationFrame(() => {
    cb && cb()
    animate(cb)
  })
  render()
  controls.update()
}

window.addEventListener('resize', resize, false)

function resize() {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  sizes.aspect = sizes.width / sizes.height

  camera.aspect = sizes.aspect
  camera.updateProjectionMatrix()

  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

window.addEventListener('dblclick', dbclick, false)

function dbclick(e: MouseEvent) {
  const target = e.target as HTMLElement

  if (!document.fullscreenElement) {
    if (target.requestFullscreen) {
      target.requestFullscreen()
    }
  } else {
    document.exitFullscreen()
  }
}

export { scene, camera, animate, render, randomHexColor as randomColor }

function randomHexColor() {
  return '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')
}
