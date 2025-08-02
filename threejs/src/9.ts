import * as THREE from 'three'

import { scene, camera, animate, renderer } from './base'

// https://www.poliigon.com/
// https://3dtextures.me/
// https://www.arroway-textures.ch/

export default function () {
  // const url = '/door/color.jpg'
  // const url = '/checkerboard-8x8.png'
  const url = '/minecraft.png'
  renderer.outputColorSpace = THREE.SRGBColorSpace
  // const image = new Image()
  // const texture = new THREE.Texture(image)
  // image.onload = () => {
  //   texture.needsUpdate = true
  //   texture.colorSpace = THREE.SRGBColorSpace
  // }
  // image.setAttribute('src', '/door/color.jpg')

  const loading = new THREE.LoadingManager()
  loading.onStart = () => {
    // console.log('onStart')
  }
  loading.onProgress = (url, loaded, total) => {
    // console.log(`${loaded} / ${total}`)
  }
  loading.onLoad = () => {
    // console.log('onLoad')
  }
  const loader = new THREE.TextureLoader(loading)
  const texture = loader.load(url, (t) => {
    t.colorSpace = THREE.SRGBColorSpace
  })
  // const texture2 = loader.load('/door/ambientOcclusion.jpg', (t) => {
  //   t.colorSpace = THREE.SRGBColorSpace
  // })
  // const texture3 = loader.load('/door/roughness.jpg', (t) => {
  //   t.colorSpace = THREE.SRGBColorSpace
  // })
  // texture.wrapS = THREE.MirroredRepeatWrapping
  // texture.wrapT = THREE.MirroredRepeatWrapping
  // texture.repeat.x = 2
  // texture.repeat.y = 2
  // texture.offset.x = 0.1
  // texture.offset.y = 0.1
  // texture.rotation = Math.PI / 4
  // texture.center.x = 0.5
  // texture.center.y = 0.5

  texture.generateMipmaps = false
  texture.minFilter = THREE.NearestFilter
  texture.magFilter = THREE.NearestFilter

  const geometery = new THREE.BoxGeometry(1, 1, 1)

  const material = new THREE.MeshBasicMaterial({
    map: texture
  })
  const mesh = new THREE.Mesh(geometery, material)
  scene.add(mesh)

  animate()
}
