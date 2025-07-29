import * as THREE from 'three'

const width = window.innerWidth
const height = window.innerHeight

// 场景
const scene = new THREE.Scene()

// 相机
const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
camera.position.z = 5
camera.position.x = 2
camera.lookAt(0, 0, 0)

// 渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
document.body.append(renderer.domElement)

// 物体
const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial())
// 添加到场景
scene.add(cube)

// 渲染
// renderer.render(scene, camera)

function animate() {
  requestAnimationFrame(animate)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}

animate()
