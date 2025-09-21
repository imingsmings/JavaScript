import * as THREE from 'three'
import { scene, camera, animate, renderer, sizes } from './base'
import { GLTFLoader } from 'three-stdlib'
import type { GLTF } from 'three-stdlib'

export default function () {
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 3
  const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshStandardMaterial())
  scene.add(sphere)

  const directionalLight = new THREE.DirectionalLight('#ffffff', 3)
  directionalLight.position.set(1, 3, -0.25)
  scene.add(directionalLight)

  const gltfLoader = new GLTFLoader()
  const url = '/threejs/models/FlightHelmet/glTF/FlightHelmet.gltf'
  gltfLoader.load(url, (gltf: GLTF) => {
    gltf.scene.scale.set(8, 8, 8)
    gltf.scene.position.set(0, -3, 0)
    // gltf.scene.rotation.y = Math.PI * 0.5
    scene.add(gltf.scene)

    updateMaterials()
  })

  const environmentLoader = new THREE.CubeTextureLoader()
  const environment = environmentLoader.load([
    '/threejs/environmentMaps/0/px.jpg',
    '/threejs/environmentMaps/0/nx.jpg',
    '/threejs/environmentMaps/0/py.jpg',
    '/threejs/environmentMaps/0/ny.jpg',
    '/threejs/environmentMaps/0/pz.jpg',
    '/threejs/environmentMaps/0/nz.jpg'
  ])
  scene.background = environment
  scene.environment = environment

  const updateMaterials = () => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
        child.material.envMap = environment
        child.material.envMapIntensity = 1
      }
    })
  }

  animate()
}
