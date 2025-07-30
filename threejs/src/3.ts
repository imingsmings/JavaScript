import * as THREE from 'three'

export default function () {
  const width = window.innerWidth
  const height = window.innerHeight
  const aspect = window.devicePixelRatio

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000)
  camera.position.set(0, 2, 5)
  camera.lookAt(0, 0, 0)

  const renderer = new THREE.WebGLRenderer({
    // canvas: HTMLCanvasElement
    // 开启抗锯齿
    antialias: true
  })
  renderer.setSize(width, height)
  document.body.append(renderer.domElement)

  const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial())
  scene.add(cube)

  const axes = new THREE.AxesHelper(3)
  scene.add(cube, axes)

  // 结合场景和相机
  // render方法执行一次渲染一次, 不会随着场景、相机、物体等发生改变而自动执行
  // 因此需要手动执行
  renderer.render(scene, camera)
}
