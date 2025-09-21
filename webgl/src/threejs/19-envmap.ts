import * as THREE from 'three'
import { scene, camera, animate, renderer, sizes } from './base'
import { GLTFLoader, RGBELoader, EXRLoader, GroundProjectedEnv } from 'three-stdlib'
import type { GLTF } from 'three-stdlib'

// https://skybox.blockadelabs.com
export default function () {
  // const cubeTextureLoader = new THREE.CubeTextureLoader()
  // const envMap = cubeTextureLoader.load([
  //   '/environmentMaps/2/px.jpg',
  //   '/environmentMaps/2/nx.jpg',
  //   '/environmentMaps/2/py.jpg',
  //   '/environmentMaps/2/ny.jpg',
  //   '/environmentMaps/2/pz.jpg',
  //   '/environmentMaps/2/nz.jpg'
  // ])

  // scene.background = envMap
  // scene.environment = envMap
  // scene.backgroundBlurriness = 0.05
  // scene.backgroundIntensity = 2

  const rgbeLoader = new RGBELoader()
  rgbeLoader.load('/environmentMaps/2k.hdr', (envMap) => {
    envMap.mapping = THREE.EquirectangularReflectionMapping
    // scene.background = envMap
    scene.environment = envMap

    const skybox = new GroundProjectedEnv(envMap)
    skybox.scale.setScalar(50)
    skybox.height = 10
    skybox.radius = 120
    scene.add(skybox)
  })

  // const exrLoader = new EXRLoader()
  // exrLoader.load('/environmentMaps/4k.exr', (envMap) => {
  //   envMap.mapping = THREE.EquirectangularReflectionMapping
  //   scene.background = envMap
  //   scene.environment = envMap
  // })

  // const textureLoader = new THREE.TextureLoader()
  // const envMap = textureLoader.load('/environmentMaps/castle.jpg')
  // envMap.mapping = THREE.EquirectangularReflectionMapping
  // envMap.colorSpace = THREE.SRGBColorSpace
  // scene.background = envMap
  // scene.environment = envMap

  const torusKnot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(1, 0.4, 100, 16),
    new THREE.MeshStandardMaterial({
      roughness: 0.3,
      metalness: 1,
      color: 0xaaaaaa
    })
  )
  torusKnot.position.set(-3, 1, 0)
  scene.add(torusKnot)

  const gltfLoader = new GLTFLoader()
  const url = '/models/FlightHelmet/glTF/FlightHelmet.gltf'
  gltfLoader.load(url, (gltf: GLTF) => {
    gltf.scene.scale.set(5, 5, 5)
    scene.add(gltf.scene)

    updateMaterials()
  })

  const updateMaterials = () => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
        child.material.envMapIntensity = 10
        child.material.needsUpdate = true
      }
    })
  }

  animate()
}
