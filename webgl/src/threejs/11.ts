import * as THREE from 'three'
import { FontLoader, TextGeometry } from 'three-stdlib'
import { scene, camera, animate, renderer } from './base'

export default function () {
  renderer.outputColorSpace = THREE.SRGBColorSpace

  const loader = new THREE.TextureLoader()
  const texture = loader.load('/matcaps/8.png', (texture) => {
    texture.colorSpace = THREE.SRGBColorSpace
  })

  const url = '/fonts/helvetiker_regular.typeface.json'
  // const url = '/fonts/Microsoft_YaHei_Regular.json'
  const fontLoader = new FontLoader()
  fontLoader.load(url, (font) => {
    const geometry = new TextGeometry('Hello Word', {
      font,
      size: 0.5,
      height: 0.2,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0
    })

    // geometry.computeBoundingBox()
    // geometry.translate(-(geometry.boundingBox!.max.x - 0.02) * 0.5, -(geometry.boundingBox!.max.y - 0.02) * 0.5, -(geometry.boundingBox!.max.z - 0.03) * 0.5)
    geometry.center()

    const material = new THREE.MeshMatcapMaterial({
      matcap: texture
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const dountGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45)

    const dounts: THREE.Mesh[] = []

    for (let i = 0; i < 500; i++) {
      const dount = new THREE.Mesh(dountGeometry, material)
      randomlize(dount)
      scene.add(dount)
      dounts.push(dount)
    }

    console.log(dounts)

    animate(() => {
      dounts.forEach((dount) => {
        dount.rotation.x += 0.001
        dount.rotation.y += 0.001
      })
    })

    animate()
  })

  function randomlize(dount: THREE.Mesh) {
    dount.position.x = (Math.random() - 0.5) * 10
    dount.position.y = (Math.random() - 0.5) * 10
    dount.position.z = (Math.random() - 0.5) * 10

    dount.rotation.x = Math.random() * Math.PI
    dount.rotation.y = Math.random() * Math.PI

    const scale = Math.random()
    dount.scale.set(scale, scale, scale)
  }
}
