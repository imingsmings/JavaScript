import * as THREE from 'three'
import { RectAreaLightHelper } from 'three-stdlib'
import { scene, camera, animate, renderer } from './base'

export default function () {
  const material = new THREE.MeshStandardMaterial()
  material.roughness = 0.4

  // 整场均匀照亮， 无方向、无阴影
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  // scene.add(ambientLight)

  // 平行光束，可投阴影，强度随距离不衰减，默认垂直向下照射
  const directionalLight = new THREE.DirectionalLight(0x00fffc, 0.5)
  directionalLight.position.set(2, 1, 0)
  // scene.add(directionalLight)
  const sunHelper = new THREE.DirectionalLightHelper(directionalLight, 0.2)
  // scene.add(sunHelper)

  const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 2)
  // hemisphereLight.position.y = -2
  // hemisphereLight.position.x = -1
  // scene.add(hemisphereLight)
  const hemisphereHelper = new THREE.HemisphereLightHelper(hemisphereLight, 0.2)
  // scene.add(hemisphereHelper)

  const pointLight = new THREE.PointLight(0xff9000, 0.5, 10)
  pointLight.position.set(1, -0.5, 1)
  // scene.add(pointLight)

  const rectAreaLight = new THREE.RectAreaLight(0x4e00ff, 5, 1, 0.5)
  rectAreaLight.position.y = 1
  rectAreaLight.rotation.x = -Math.PI / 2
  // scene.add(rectAreaLight)
  const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight)
  // scene.add(rectAreaLightHelper)

  const spotLight = new THREE.SpotLight(0x78ff00, 0.5, 10, Math.PI / 6, 0.25, 1)
  scene.add(spotLight)
  const spotLightHelper = new THREE.SpotLightHelper(spotLight)
  scene.add(spotLightHelper)

  const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 64, 64), material)
  sphere.position.x = -1
  scene.add(sphere)

  const cube = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), material)
  scene.add(cube)

  const torus = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.2, 64, 64), material)
  torus.position.x = 1
  scene.add(torus)

  const plane = new THREE.Mesh(new THREE.PlaneGeometry(2.5, 2.5), material)
  plane.rotation.x = (Math.PI * 3) / 2
  plane.position.y = -1
  scene.add(plane)

  animate(() => {
    sphere.rotation.y += 0.005
    sphere.rotation.x += 0.005

    cube.rotation.y += 0.005
    cube.rotation.x += 0.005

    torus.rotation.y += 0.005
    torus.rotation.x += 0.005

    // rectAreaLight.rotation.z += 0.01
  })
}
