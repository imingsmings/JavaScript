import * as THREE from 'three'
import { OrbitControls } from 'three-stdlib'

const width = window.innerWidth
const height = window.innerHeight
const aspect = window.devicePixelRatio

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000)
camera.position.set(0, 2, 4)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
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

export { scene, camera, animate, render }
