import * as THREE from 'three'
import { scene, camera, animate, renderer, sizes } from './base'
import { GLTFLoader } from 'three-stdlib'
import type { GLTF } from 'three-stdlib'
import gsap from 'gsap'

export default function () {
  const gemotry = new THREE.SphereGeometry(0.5, 32, 32)
  const material = new THREE.MeshBasicMaterial({
    color: '#ff0000'
  })

  const mesh1 = new THREE.Mesh(gemotry.clone(), material.clone())
  mesh1.position.set(-2, 0, 0)
  scene.add(mesh1)

  const mesh2 = new THREE.Mesh(gemotry.clone(), material.clone())
  mesh2.position.set(0, 0, 0)
  scene.add(mesh2)

  const mesh3 = new THREE.Mesh(gemotry.clone(), material.clone())
  mesh3.position.set(2, 0, 0)
  scene.add(mesh3)

  const meshes = [mesh1, mesh2, mesh3]
  const raycaster = new THREE.Raycaster()
  // const rayOrigin = new THREE.Vector3(-3, 0, 0)
  // const rayDirection = new THREE.Vector3(10, 0, 0)
  // rayDirection.normalize()
  // raycaster.set(rayOrigin, rayDirection)

  const cursor = { x: 0, y: 0 } as THREE.Vector2
  let currentMesh: IntersectObject | null = null

  document.addEventListener(
    'mousemove',
    (e: MouseEvent) => {
      cursor.x = (e.clientX / sizes.width) * 2 - 1
      cursor.y = 1 - (e.clientY / sizes.height) * 2
    },
    false
  )
  document.addEventListener(
    'click',
    (e: MouseEvent) => {
      if (currentMesh !== null) {
        const targetMesh = meshes.find((mesh) => mesh === currentMesh)
        console.log(targetMesh)
      }
    },
    false
  )

  const gltfLoader = new GLTFLoader()
  const url = '/models/Duck/glTF/Duck.gltf'
  let model: GLTF | null = null
  gltfLoader.load(url, (gltf: GLTF) => {
    model = gltf
    gltf.scene.position.y = -2
    scene.add(gltf.scene)
  })

  const ambientLight = new THREE.AmbientLight(0xffffff, 2.1)
  scene.add(ambientLight)

  const clock = new THREE.Clock()
  animate(() => {
    const eTime = clock.getElapsedTime()

    mesh1.position.y = Math.sin(eTime * 0.3) * 2
    mesh2.position.y = Math.sin(eTime * 0.8) * 2
    mesh3.position.y = Math.sin(eTime * 1.4) * 2

    for (const mesh of meshes) {
      mesh.material.color.set(new THREE.Color('#ff0000'))
    }

    // const rayOrigin = new THREE.Vector3(-3, 0, 0)
    // const rayDirection = new THREE.Vector3(10, 0, 0)
    // rayDirection.normalize()
    // raycaster.set(rayOrigin, rayDirection)

    raycaster.setFromCamera(cursor, camera)

    const intersects = raycaster.intersectObjects<IntersectObject>(meshes, false)
    for (const intersect of intersects) {
      intersect.object.material.color.set(new THREE.Color('#00ff00'))
    }

    if (intersects.length !== 0) {
      if (currentMesh === null) {
        currentMesh = intersects[0].object
      }
    } else {
      if (currentMesh !== null) {
        currentMesh = null
      }
    }

    if (model !== null) {
      const modelIntersects = raycaster.intersectObject(model.scene, true)

      if (modelIntersects.length !== 0) {
        // model.scene.scale.set(1.5, 1.5, 1.5)
        gsap.to(model.scene.scale, { duration: 1, x: 2, y: 2, z: 2, ease: 'bounce.in' })
      } else {
        // model.scene.scale.set(1, 1, 1)
        gsap.to(model.scene.scale, { duration: 1, x: 1, y: 1, z: 1 })
      }
    }
  })
}

type IntersectObject = THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>
