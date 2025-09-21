import * as THREE from 'three'
import { scene, camera, animate, renderer } from './base'

export default function () {
  // 开启阴影
  renderer.shadowMap.enabled = true
  // 投影贴图算法
  renderer.shadowMap.type = THREE.PCFShadowMap

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
  directionalLight.position.set(0, 1, 1)
  directionalLight.castShadow = true
  directionalLight.shadow.mapSize.set(1024, 1024)
  directionalLight.shadow.camera.near = 1
  directionalLight.shadow.camera.far = 6
  directionalLight.shadow.camera.top = 2
  directionalLight.shadow.camera.bottom = -2
  directionalLight.shadow.camera.left = -2
  directionalLight.shadow.camera.right = 2
  directionalLight.shadow.radius = 5
  scene.add(directionalLight)
  const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.2)
  // scene.add(directionalLightHelper)

  const spotLight = new THREE.SpotLight(0xffffff, 0.4, 10, Math.PI * 0.3)
  spotLight.castShadow = true
  spotLight.position.set(0, 1, 1)
  spotLight.shadow.mapSize.set(1024, 1024)
  spotLight.shadow.camera.near = 1
  spotLight.shadow.camera.far = 6
  scene.add(spotLight)

  const pointLight = new THREE.PointLight(0xffffff, 0.8)
  pointLight.castShadow = true
  pointLight.position.set(0, 2, 1)
  pointLight.shadow.mapSize.x = 1024
  pointLight.shadow.mapSize.y = 1024
  // scene.add(pointLight)

  // const lighCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera)
  // const lighCameraHelper = new THREE.CameraHelper(spotLight.shadow.camera)
  const lighCameraHelper = new THREE.CameraHelper(pointLight.shadow.camera)
  lighCameraHelper.visible = false
  scene.add(lighCameraHelper)

  const textureLoader = new THREE.TextureLoader()
  const alpha = textureLoader.load('/door/color.jpg')
  const sphereShadow = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({
      color: 0xff0000,
      transparent: true,
      alphaMap: alpha
    })
  )
  sphereShadow.rotation.x = -Math.PI / 2
  sphereShadow.position.y = -0.75
  scene.add(sphereShadow)

  const material = new THREE.MeshStandardMaterial({})

  const plane = new THREE.Mesh(new THREE.PlaneGeometry(4, 4), material)
  plane.rotation.x = -Math.PI / 2
  plane.position.y = -1
  plane.receiveShadow = true
  scene.add(plane)

  const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 64, 64), material)
  sphere.castShadow = true
  scene.add(sphere)

  const clock = new THREE.Clock()

  animate(() => {
    const elapsedTime = clock.getElapsedTime()
    sphere.position.x = Math.cos(elapsedTime) * 1.5
    sphere.position.z = Math.sin(elapsedTime) * 1.5
    sphere.position.y = Math.abs(Math.sin(elapsedTime * 3))

    sphereShadow.position.x = sphere.position.x
    sphereShadow.position.z = sphere.position.z
    sphereShadow.material.opacity = (1 - sphere.position.y) * 0.3
  })
}
