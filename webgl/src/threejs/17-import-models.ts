import * as THREE from 'three'
import { GLTFLoader, DRACOLoader } from 'three-stdlib'
import type { GLTF } from 'three-stdlib'
import { scene, camera, animate, renderer, sizes } from './base'

// https://github.com/KhronosGroup/glTF-Sample-Models
export default function () {
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFShadowMap
  renderer.outputColorSpace = THREE.SRGBColorSpace

  const ambientLight = new THREE.AmbientLight(0xffffff, 2.1)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
  directionalLight.castShadow = true
  directionalLight.shadow.mapSize.set(1024, 1024)
  directionalLight.shadow.camera.far = 15
  directionalLight.shadow.camera.left = -7
  directionalLight.shadow.camera.top = 7
  directionalLight.shadow.camera.right = 7
  directionalLight.shadow.camera.bottom = -7
  directionalLight.position.set(1, 2, -3)
  scene.add(directionalLight)

  const gltfLoader = new GLTFLoader()
  // const url = '/models/Duck/glTF/Duck.gltf'
  // const url = '/models/Duck/glTF-Binary/Duck.glb'
  // const url = '/models/Duck/glTF/Duck.gltf'
  // const url = '/models/FlightHelmet/glTF/FlightHelmet.gltf'

  // load draco
  // const url = '/models/Duck/glTF-Draco/Duck.gltf'
  // const decoderPath = '../node_modules/three/examples/jsm/libs/draco/'
  // const draco = new DRACOLoader()
  // draco.setDecoderPath(decoderPath)
  // gltfLoader.setDRACOLoader(draco)

  const url = '/models/Fox/glTF/Fox.gltf'
  let mixer: THREE.AnimationMixer | null = null

  gltfLoader.load(url, (gltf: GLTF) => {
    console.log(gltf)

    // const children = [...gltf.scene.children]
    // for (const mesh of children) {
    //   mesh.castShadow = true
    //   scene.add(mesh)
    // }

    // scene.add(...gltf.scene.children)

    gltf.scene.scale.set(0.025, 0.025, 0.025)
    mixer = new THREE.AnimationMixer(gltf.scene)
    const action = mixer.clipAction(gltf.animations[2])
    action.play()

    scene.add(gltf.scene)
  })

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(8, 8),
    new THREE.MeshStandardMaterial({
      color: '#777777',
      metalness: 0.3,
      roughness: 0.4,
      envMapIntensity: 0.5
    })
  )
  floor.receiveShadow = true
  floor.rotation.x = -Math.PI * 0.5
  floor.position.y = 0
  scene.add(floor)

  const clock = new THREE.Clock()
  let prevTime = 0
  animate(() => {
    const eTime = clock.getElapsedTime()
    const dTime = eTime - prevTime
    prevTime = eTime

    if (mixer) {
      mixer.update(dTime)
    }
  })
}
