import * as THREE from 'three'

export default function () {
  const width = window.innerWidth
  const height = window.innerHeight

  // 场景
  const scene = new THREE.Scene()
  // 背景颜色
  // scene.background = new THREE.Color(0xc89e06b)
  scene.background = new THREE.Color(`rgb(200, 150,11)`)
  // 背景图
  const loader = new THREE.TextureLoader()
  loader.load('/universe.jpg', (texture) => {
    scene.background = texture
  })

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
  // 坐标系
  const axes = new THREE.AxesHelper(3)
  // 添加到场景
  scene.add(cube, axes)

  function animate() {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
  }

  animate()
}
