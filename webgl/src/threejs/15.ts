import * as THREE from 'three'
import GUI from 'lil-gui'
import gsap from 'gsap'
import { scene, camera, animate, renderer, sizes } from './base'

export default function () {
  renderer.outputColorSpace = THREE.SRGBColorSpace

  const gui = new GUI()
  const parameters = {
    materialColor: '#ffeded'
  }
  gui
    .addColor(parameters, 'materialColor')
    .name('Material Color')
    .onChange((texture: THREE.Texture) => {
      material.color = new THREE.Color(parameters.materialColor)
      particleMaterial.color.set(parameters.materialColor)
    })

  const light = new THREE.DirectionalLight('#ffffff', 1)
  light.position.set(1, 1, 0)
  scene.add(light)

  const loader = new THREE.TextureLoader()
  const gradientTexture = loader.load('/gradients/3.jpg', (texture) => {
    texture.colorSpace = THREE.SRGBColorSpace
  })
  gradientTexture.magFilter = THREE.NearestFilter

  const material = new THREE.MeshToonMaterial({
    color: parameters.materialColor,
    gradientMap: gradientTexture
  })

  const objectDistance = 4
  const mesh1 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.4, 16, 60), material)
  const mesh2 = new THREE.Mesh(new THREE.ConeGeometry(1, 2, 32), material)
  const mesh3 = new THREE.Mesh(new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16), material)
  scene.add(mesh1, mesh2, mesh3)

  mesh1.position.y = -objectDistance * 0
  mesh2.position.y = -objectDistance * 1
  mesh3.position.y = -objectDistance * 2

  mesh1.position.x = 2
  mesh2.position.x = -2
  mesh3.position.x = 2

  const meshes = [mesh1, mesh2, mesh3]

  const particleCount = 200
  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = objectDistance * 0.4 - Math.random() * objectDistance * meshes.length
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
  }
  const particleGeometry = new THREE.BufferGeometry()
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const particleMaterial = new THREE.PointsMaterial({
    color: parameters.materialColor,
    sizeAttenuation: true,
    size: 0.03
  })
  const particles = new THREE.Points(particleGeometry, particleMaterial)
  scene.add(particles)

  let scrollY = 0
  let currentSelection = 0
  window.addEventListener(
    'scroll',
    (e) => {
      scrollY = window.scrollY

      const newSelection = Math.round(scrollY / sizes.height)

      if (newSelection !== currentSelection) {
        currentSelection = newSelection
        gsap.to(meshes[currentSelection].rotation, {
          duration: 1.5,
          ease: 'power2.inOut',
          x: '+=6',
          y: '+=3',
          z: '+=1.5'
        })
      }
    },
    false
  )

  const cursor = {
    x: 0,
    y: 0
  }
  window.addEventListener(
    'mousemove',
    (e) => {
      cursor.x = e.clientX / sizes.width - 0.5
      cursor.y = e.clientY / sizes.height - 0.5
    },
    false
  )

  const clock = new THREE.Clock()
  let previousTime = 0

  const cameraGroup = new THREE.Group()
  scene.add(cameraGroup)
  cameraGroup.add(camera)

  animate(() => {
    const eTime = clock.getElapsedTime()
    const deltaTime = eTime - previousTime
    previousTime = eTime

    camera.position.y = (-scrollY / sizes.height) * objectDistance

    const parallaxX = cursor.x * 0.5
    const parallaxY = -cursor.y * 0.5
    cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime
    cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime

    for (const mesh of meshes) {
      mesh.rotation.x += deltaTime * 0.1
      mesh.rotation.y += deltaTime * 0.12
    }
  })
}
