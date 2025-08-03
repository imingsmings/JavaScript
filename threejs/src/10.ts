import * as THREE from 'three'
import { scene, camera, animate, renderer } from './base'

// https://github.com/nidorx/matcaps
// https://polyhaven.com/

export default function () {
  renderer.outputColorSpace = THREE.SRGBColorSpace

  const setColorSpace = (texture: THREE.Texture) => {
    texture.colorSpace = THREE.SRGBColorSpace
  }

  const loader = new THREE.TextureLoader()
  const door = loader.load('/door/color.jpg', setColorSpace)
  const alpha = loader.load('/door/alpha.jpg', setColorSpace)
  const amb = loader.load('/door/ambientOcclusion.jpg', setColorSpace)
  const height = loader.load('/door/height.jpg', setColorSpace)
  const hmetalness = loader.load('/door/hmetalness.jpg', setColorSpace)
  const roughness = loader.load('/door/roughness.jpg', setColorSpace)
  const normal = loader.load('/door/normal.jpg', setColorSpace)
  const matcap = loader.load('/matcaps/8.png', setColorSpace)
  const gradient = loader.load('/gradients/3.jpg', setColorSpace)

  // const material = new THREE.MeshBasicMaterial({})
  // material.color.set('orange')
  // material.map = door
  // material.wireframe = true
  // material.opacity = 0.5
  // material.transparent = true
  // material.alphaMap = alpha
  // material.side = THREE.DoubleSide

  // const material = new THREE.MeshNormalMaterial()
  // material.wireframe = true
  // material.flatShading = true

  // const material = new THREE.MeshMatcapMaterial()
  // material.matcap = matcap

  const light = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(light)
  const pointLight = new THREE.PointLight(0xffffff, 0.5)
  pointLight.position.y = 0.5
  scene.add(pointLight)

  // const material = new THREE.MeshDepthMaterial()

  // const material = new THREE.MeshLambertMaterial()

  // const material = new THREE.MeshPhongMaterial()
  // material.shininess = 100
  // material.specular = new THREE.Color(0xff0000)

  // const material = new THREE.MeshToonMaterial()
  // material.gradientMap = gradient
  // gradient.minFilter = THREE.NearestFilter
  // gradient.magFilter = THREE.NearestFilter
  // gradient.generateMipmaps = false

  const material = new THREE.MeshStandardMaterial()
  material.metalness = 0.5
  material.roughness = 0.5
  material.map = door
  material.aoMap = amb
  material.aoMapIntensity = 1
  material.displacementMap = height
  material.displacementScale = 0.05
  material.normalMap = normal
  material.alphaMap = alpha

  const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 64, 64), material)
  sphere.position.x = -1
  sphere.geometry.setAttribute('uv2', new THREE.BufferAttribute(sphere.geometry.attributes.uv.array, 2))
  scene.add(sphere)

  const plane = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.5), material)
  plane.geometry.setAttribute('uv2', new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2))
  scene.add(plane)

  const torus = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.2, 64, 64), material)
  torus.position.x = 1
  torus.geometry.setAttribute('uv2', new THREE.BufferAttribute(torus.geometry.attributes.uv.array, 2))
  scene.add(torus)

  animate(() => {
    sphere.rotation.y += 0.01
    plane.rotation.y += 0.01
    torus.rotation.y += 0.01

    sphere.rotation.x += 0.01
    plane.rotation.x += 0.01
    torus.rotation.x += 0.01
  })
}
