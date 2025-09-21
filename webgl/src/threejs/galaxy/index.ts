import * as THREE from 'three'
import GUI from 'lil-gui'
import { scene, camera, animate, renderer } from '../base'

interface GalaxyObject {
  geometry: THREE.BufferGeometry | null
  material: THREE.PointsMaterial | null
  points: THREE.Points | null
}

interface GalaxyParameters {
  count: number
  size: number
  radius: number
  branches: number
  spin: number
  randomness: number
  randomnessPower: number
  insideColor: string
  outsideColor: string
}

export default function () {
  const gui = new GUI()

  const parameters: GalaxyParameters = {
    count: 100000,
    size: 0.01,
    radius: 5,
    branches: 3,
    spin: 1,
    randomness: 0.2,
    randomnessPower: 3,
    insideColor: '',
    outsideColor: ''
  }

  const galaxy: GalaxyObject = {
    geometry: null,
    material: null,
    points: null
  }

  const generateGalaxy = () => {
    if (galaxy.points !== null) {
      galaxy.geometry?.dispose()
      galaxy.material?.dispose()
      scene.remove(galaxy.points)
    }

    galaxy.geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(parameters.count * 3)
    const colors = new Float32Array(parameters.count * 3)

    const insideColor = new THREE.Color(parameters.insideColor)
    const outsideColor = new THREE.Color(parameters.outsideColor)

    for (let i = 0; i < parameters.count; i++) {
      const i3 = i * 3

      const radius = Math.random() * parameters.radius
      const branchAngle = ((i % parameters.branches) / parameters.branches) * 2 * Math.PI
      const spinAngle = radius * parameters.spin

      const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)
      const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)
      const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)

      positions[i3 + 0] = Math.cos(branchAngle + spinAngle) * radius + randomX
      positions[i3 + 1] = 0 + randomY
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

      const mixedColor = insideColor.clone()
      mixedColor.lerp(outsideColor, radius)

      colors[i3 + 0] = mixedColor.r
      colors[i3 + 1] = mixedColor.g
      colors[i3 + 2] = mixedColor.b
    }

    galaxy.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    galaxy.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    galaxy.material = new THREE.PointsMaterial({
      size: parameters.size,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true
    })

    galaxy.points = new THREE.Points(galaxy.geometry, galaxy.material)
    scene.add(galaxy.points)
  }

  generateGalaxy()

  gui.add(parameters, 'count').name('Count').min(100).max(100000).step(100).onFinishChange(generateGalaxy)
  gui.add(parameters, 'size').name('Size').min(0.001).max(0.1).step(0.001).onFinishChange(generateGalaxy)
  gui.add(parameters, 'radius').name('Radius').min(0.01).max(20).step(0.01).onFinishChange(generateGalaxy)
  gui.add(parameters, 'branches').name('Branches').min(2).max(20).step(1).onFinishChange(generateGalaxy)
  gui.add(parameters, 'spin').name('Spin').min(-5).max(5).step(0.001).onFinishChange(generateGalaxy)
  gui.add(parameters, 'randomness').name('Randomness').min(0).max(2).step(0.001).onFinishChange(generateGalaxy)
  gui.add(parameters, 'randomnessPower').name('Randomness Power').min(2).max(10).step(1).onFinishChange(generateGalaxy)
  gui.addColor(parameters, 'insideColor').name('Inside Color').onFinishChange(generateGalaxy)
  gui.addColor(parameters, 'outsideColor').name('Outside Color').onFinishChange(generateGalaxy)

  let angle = 0
  animate(() => {
    if (galaxy.points !== null) {
      angle += 0.00005
      camera.position.x = Math.cos(angle) * parameters.radius
      camera.position.z = Math.sin(angle) * parameters.radius
      camera.lookAt(galaxy.points.position)
    }
  })
}
