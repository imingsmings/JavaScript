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

  // const environmentLoader = new THREE.CubeTextureLoader()
  // const environment = environmentLoader.load([
  //   '/environmentMaps/0/px.jpg',
  //   '/environmentMaps/0/nx.jpg',
  //   '/environmentMaps/0/py.jpg',
  //   '/environmentMaps/0/ny.jpg',
  //   '/environmentMaps/0/pz.jpg',
  //   '/environmentMaps/0/nz.jpg'
  // ])

  // const material = new THREE.MeshBasicMaterial({})
  // material.color.set('orange')
  // material.map = door
  // material.wireframe = true
  // opacity alphaMap transparent 三者需要配合使用
  // material.opacity = 1
  // material.transparent = true
  // material.alphaMap = alpha
  // material.side = THREE.DoubleSide

  // const material = new THREE.MeshNormalMaterial()
  // material.wireframe = true
  // material.flatShading = true

  // const material = new THREE.MeshMatcapMaterial()
  // material.matcap = matcap

  // const material = new THREE.MeshDepthMaterial()

  const light = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(light)
  const pointLight = new THREE.PointLight(0xffffff, 0.5)
  pointLight.position.y = -0.3
  scene.add(pointLight)

  // const material = new THREE.MeshLambertMaterial()
  // material.map = door
  // material.aoMap = amb

  // const material = new THREE.MeshPhongMaterial()
  // material.shininess = 100
  // material.specular = new THREE.Color(0xff0000)
  // material.normalMap = normal

  // const material = new THREE.MeshToonMaterial()
  // material.gradientMap = gradient
  // gradient.minFilter = THREE.NearestFilterb
  // gradient.magFilter = THREE.NearestFilter
  // gradient.generateMipmaps = false

  // const material = new THREE.MeshStandardMaterial()
  // material.metalness = 0.8
  // material.roughness = 0.001
  // material.map = door
  // material.aoMap = amb
  // material.aoMapIntensity = 10
  // material.displacementMap = height
  // material.displacementScale = 0.05
  // material.normalMap = normal
  // material.normalScale.set(1, 1)
  // material.alphaMap = alpha
  // material.envMap = environment

  // const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material)
  // cube.position.y = -1
  // scene.add(cube)

  // const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 64, 64), material)
  // sphere.position.x = -1
  // sphere.geometry.setAttribute('uv2', new THREE.BufferAttribute(sphere.geometry.attributes.uv.array, 2))
  // scene.add(sphere)

  // const plane = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.5), material)
  // plane.geometry.setAttribute('uv2', new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2))
  // scene.add(plane)

  // const torus = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.2, 64, 64), material)
  // torus.position.x = 1
  // torus.geometry.setAttribute('uv2', new THREE.BufferAttribute(torus.geometry.attributes.uv.array, 2))
  // scene.add(torus)

  const textLoader = new THREE.TextureLoader()
  const sources = [
    '/environmentMaps/0/px.jpg',
    '/environmentMaps/0/nx.jpg',
    '/environmentMaps/0/py.jpg',
    '/environmentMaps/0/ny.jpg',
    '/environmentMaps/0/pz.jpg',
    '/environmentMaps/0/nz.jpg'
  ]
  const maps = sources.map((url) => textLoader.load(url, setColorSpace))
  const materials = maps.map((map) => new THREE.MeshStandardMaterial({ map }))
  const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), materials)
  scene.add(cube)

  animate(() => {
    cube.rotation.y += 0.001
    // sphere.rotation.y += 0.01
    // plane.rotation.y += 0.01
    // torus.rotation.y += 0.01
    // sphere.rotation.x += 0.01
    // plane.rotation.x += 0.01
    // torus.rotation.x += 0.01
  })
}
