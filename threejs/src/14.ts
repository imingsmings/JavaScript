import * as THREE from 'three'
import { scene, camera, animate, renderer } from './base'

export default function () {
  const textureLoader = new THREE.TextureLoader()
  const particleTexture = textureLoader.load('/static/particles/1.png')

  const geomtery = new THREE.BufferGeometry()
  const count = 5000
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10
    colors[i] = Math.random()
  }
  geomtery.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geomtery.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  const material = new THREE.PointsMaterial()
  material.size = 0.1
  material.sizeAttenuation = true
  material.color = new THREE.Color('#ff88cc')
  // material.map = particleTexture
  material.transparent = true
  material.alphaMap = particleTexture
  material.alphaTest = 0.001
  // material.depthTest = false
  material.depthWrite = false
  material.blending = THREE.AdditiveBlending
  material.vertexColors = true

  const particles = new THREE.Points(geomtery, material)
  scene.add(particles)

  // const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial())
  // scene.add(cube)

  const clock = new THREE.Clock()

  animate(() => {
    const eTime = clock.getElapsedTime()

    for (let i = 0; i < count * 3; i++) {
      if ((i + 1) % 3 === 0) {
        const x = i - 2
        const y = i - 1
        const z = i
        const kx = geomtery.attributes.position.array[x]
        geomtery.attributes.position.array[y] = Math.sin(eTime + kx)
      }
    }

    geomtery.attributes.position.needsUpdate = true
  })
}
