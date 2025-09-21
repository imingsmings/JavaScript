import * as THREE from 'three'
import { Timer, Sky } from 'three-stdlib'
import { scene, camera, animate, renderer } from '../base'

export default function () {
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFShadowMap

  // 环境灯
  const ambientLight = new THREE.AmbientLight('#86cdff', 0.275)
  scene.add(ambientLight)

  // 平行灯
  const directionalLight = new THREE.DirectionalLight('#86cdff', 1)
  directionalLight.position.set(3, 2, -8)
  directionalLight.castShadow = true
  directionalLight.shadow.mapSize.width = 256
  directionalLight.shadow.mapSize.height = 256
  directionalLight.shadow.camera.top = 8
  directionalLight.shadow.camera.bottom = -8
  directionalLight.shadow.camera.left = -8
  directionalLight.shadow.camera.right = -8
  directionalLight.shadow.camera.near = 1
  directionalLight.shadow.camera.far = 20
  scene.add(directionalLight)

  const textureLoader = new THREE.TextureLoader()
  const floorAlphaTexture = textureLoader.load('/static/floor/alpha.jpg')
  const floorColorTexture = textureLoader.load('/static/floor/textures/coast_sand_rocks_02_diff_1k.jpg')
  const floorARMTexture = textureLoader.load('/static/floor/textures/coast_sand_rocks_02_arm_1k.jpg')
  const floorNormalTexture = textureLoader.load('/static/floor/textures/coast_sand_rocks_02_nor_gl_1k.jpg')
  const floorDisplacementTexture = textureLoader.load('/static/floor/textures/coast_sand_rocks_02_disp_1k.jpg')
  setTextureAttrs(floorColorTexture)
  setTextureAttrs(floorARMTexture)
  setTextureAttrs(floorNormalTexture)
  setTextureAttrs(floorDisplacementTexture)

  const wallARMTexture = textureLoader.load('/static/walls/castle_brick_broken_06_arm_1k.jpg')
  const wallColorexture = textureLoader.load('/static/walls/castle_brick_broken_06_diff_1k.jpg')
  const wallNormalexture = textureLoader.load('/static/walls/castle_brick_broken_06_nor_gl_1k.jpg')
  setTextureAttrs(wallARMTexture, false)
  setTextureAttrs(wallColorexture, false)
  setTextureAttrs(wallNormalexture, false)

  const roofARMTexture = textureLoader.load('/static/roof/roof_slates_02_arm_1k.jpg')
  const roofColorTexture = textureLoader.load('/static/roof/roof_slates_02_diff_1k.jpg')
  const roofNormalTexture = textureLoader.load('/static/roof/roof_slates_02_nor_gl_1k.jpg')
  setTextureAttrs(roofARMTexture, false)
  setTextureAttrs(roofColorTexture, false)
  setTextureAttrs(roofNormalTexture, false)
  roofColorTexture.repeat.set(3, 2)
  roofColorTexture.repeat.set(3, 2)
  roofNormalTexture.repeat.set(3, 2)

  const bushARMTexture = textureLoader.load('/static/bushes/leaves_forest_ground_arm_1k.jpg')
  const bushColorTexture = textureLoader.load('/static/bushes/leaves_forest_ground_diff_1k.jpg')
  const bushNormalTexture = textureLoader.load('/static/bushes/leaves_forest_ground_nor_gl_1k.jpg')
  bushColorTexture.repeat.set(2, 1)
  bushARMTexture.repeat.set(2, 1)
  bushNormalTexture.repeat.set(2, 1)
  setTextureAttrs(bushARMTexture, false)
  setTextureAttrs(bushColorTexture, false)
  setTextureAttrs(bushNormalTexture, false)

  const graveARMTexture = textureLoader.load('/static/graves/plastered_stone_wall_arm_1k.jpg')
  const graveColorTexture = textureLoader.load('/static/graves/plastered_stone_wall_diff_1k.jpg')
  const graveNormalTexture = textureLoader.load('/static/graves/plastered_stone_wall_nor_gl_1k.jpg')
  graveColorTexture.repeat.set(0.3, 0.4)
  graveARMTexture.repeat.set(0.3, 0.4)
  graveNormalTexture.repeat.set(0.3, 0.4)
  setTextureAttrs(graveARMTexture, false)
  setTextureAttrs(graveColorTexture, false)
  setTextureAttrs(graveNormalTexture, false)

  const doorColorTexture = textureLoader.load('/static/door/color.jpg')
  const doorAlphaTexture = textureLoader.load('/static/door/alpha.jpg')
  const doorAmbientOcclusionTexture = textureLoader.load('/static/door/ambientOcclusion.jpg')
  const doorHeightTexture = textureLoader.load('/static/door/height.jpg')
  const doorNormalTexture = textureLoader.load('/static/door/normal.jpg')
  const doorMetalnessTexture = textureLoader.load('/static/door/metalness.jpg')
  const doorRoughnessTexture = textureLoader.load('/static/door/roughness.jpg')
  setTextureAttrs(doorColorTexture, false)
  setTextureAttrs(doorAlphaTexture, false)
  setTextureAttrs(doorAmbientOcclusionTexture, false)
  setTextureAttrs(doorHeightTexture, false)
  setTextureAttrs(doorNormalTexture, false)
  setTextureAttrs(doorMetalnessTexture, false)
  setTextureAttrs(doorRoughnessTexture, false)

  // 地板
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20, 100, 100),
    new THREE.MeshStandardMaterial({
      map: floorColorTexture,
      transparent: true,
      alphaMap: floorAlphaTexture,
      aoMap: floorARMTexture,
      roughnessMap: floorARMTexture,
      metalnessMap: floorARMTexture,
      normalMap: floorNormalTexture,
      displacementMap: floorDisplacementTexture,
      displacementScale: 0.3,
      displacementBias: -0.2
    })
  )
  floor.rotation.x = -Math.PI / 2
  floor.receiveShadow = true
  scene.add(floor)

  // 房子容器
  const house = new THREE.Group()
  scene.add(house)

  // 墙面
  const walls = new THREE.Mesh(
    new THREE.BoxGeometry(4, 2.5, 4),
    new THREE.MeshStandardMaterial({
      map: wallColorexture,
      aoMap: wallARMTexture,
      roughnessMap: wallARMTexture,
      metalnessMap: wallARMTexture,
      normalMap: wallNormalexture
    })
  )
  walls.position.y = 2.5 / 2
  walls.castShadow = true
  walls.receiveShadow = true
  house.add(walls)

  // 屋顶
  const roof = new THREE.Mesh(
    new THREE.ConeGeometry(3.5, 1.5, 4),
    new THREE.MeshStandardMaterial({
      map: roofColorTexture,
      transparent: true,
      aoMap: roofARMTexture,
      roughnessMap: roofARMTexture,
      metalnessMap: roofARMTexture,
      normalMap: roofNormalTexture
    })
  )
  roof.position.y = 1.5 / 2 + 2.5
  roof.rotation.y = Math.PI / 4
  roof.castShadow = true
  roof.receiveShadow = true
  house.add(roof)

  // 门
  const door = new THREE.Mesh(
    new THREE.PlaneGeometry(2.2, 2.2, 100, 100),
    new THREE.MeshStandardMaterial({
      map: doorColorTexture,
      transparent: true,
      aoMap: doorAmbientOcclusionTexture,
      roughnessMap: doorRoughnessTexture,
      metalnessMap: doorMetalnessTexture,
      normalMap: doorNormalTexture,
      displacementMap: doorHeightTexture,
      displacementScale: 0.15,
      displacementBias: -0.04
    })
  )
  door.position.y = 1
  door.position.z = 2 + 0.001
  house.add(door)

  const doorLight = new THREE.PointLight('#ff7d46', 5)
  doorLight.position.set(0, 2.2, 2.5)
  house.add(doorLight)

  // 灌木
  const bushGeometry = new THREE.SphereGeometry(1, 16, 16)
  const bushMaterial = new THREE.MeshStandardMaterial({
    color: '#ccffcc',
    map: bushColorTexture,
    aoMap: bushARMTexture,
    roughnessMap: bushARMTexture,
    metalnessMap: bushARMTexture,
    normalMap: bushNormalTexture
  })
  const bush1 = new THREE.Mesh(bushGeometry, bushMaterial)
  bush1.scale.set(0.5, 0.5, 0.5)
  bush1.position.set(0.8, 0.2, 2.2)
  bush1.rotation.x = -0.75

  const bush2 = new THREE.Mesh(bushGeometry, bushMaterial)
  bush2.scale.set(0.25, 0.25, 0.25)
  bush2.position.set(1.4, 0.1, 2.1)
  bush2.rotation.x = -0.75

  const bush3 = new THREE.Mesh(bushGeometry, bushMaterial)
  bush3.scale.set(0.4, 0.4, 0.4)
  bush3.position.set(-0.8, 0.1, 2.2)
  bush3.rotation.x = -0.75

  const bush4 = new THREE.Mesh(bushGeometry, bushMaterial)
  bush4.scale.set(0.15, 0.15, 0.15)
  bush4.position.set(-1, 0.05, 2.6)
  bush4.rotation.x = -0.75

  house.add(bush1, bush2, bush3, bush4)

  // 墓碑
  const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2)
  const graveMaterial = new THREE.MeshStandardMaterial({
    map: graveColorTexture,
    aoMap: graveARMTexture,
    roughnessMap: graveARMTexture,
    metalnessMap: graveARMTexture,
    normalMap: graveNormalTexture
  })
  const graves = new THREE.Group()
  scene.add(graves)

  for (let i = 0; i < 30; i++) {
    const grave = new THREE.Mesh(graveGeometry, graveMaterial)
    setGraveAttrs(grave)
    graves.add(grave)
  }

  // ghosts
  const ghost1 = new THREE.PointLight('#8800ff', 6)
  const ghost2 = new THREE.PointLight('#ff0088', 6)
  const ghost3 = new THREE.PointLight('#ff0000', 6)
  ghost1.castShadow = true
  ghost2.castShadow = true
  ghost3.castShadow = true
  ghost1.shadow.mapSize.width = 256
  ghost1.shadow.mapSize.height = 256
  ghost1.shadow.camera.far = 10
  ghost2.shadow.mapSize.width = 256
  ghost2.shadow.mapSize.height = 256
  ghost2.shadow.camera.far = 10
  ghost3.shadow.mapSize.width = 256
  ghost3.shadow.mapSize.height = 256
  ghost3.shadow.camera.far = 10
  scene.add(ghost1, ghost2, ghost3)

  // 天空
  const sky = new Sky()
  sky.scale.set(100, 100, 100)
  sky.material.uniforms['turbidity'].value = 10
  sky.material.uniforms['rayleigh'].value = 3
  sky.material.uniforms['mieCoefficient'].value = 0.1
  sky.material.uniforms['mieDirectionalG'].value = 0.95
  sky.material.uniforms['sunPosition'].value.set(0.3, -0.038, -0.95)
  scene.add(sky)

  // 迷雾
  // scene.fog = new THREE.Fog('#ff0000', 1, 13)
  scene.fog = new THREE.FogExp2('#02343f', 0.1)

  const timer = new Timer()

  animate(() => {
    timer.update()
    const elapsedTime = timer.getElapsedTime()

    moveGhost(ghost1, 4, elapsedTime * 0.5)
    moveGhost(ghost2, 5, -elapsedTime * 0.38)
    moveGhost(ghost3, 6, elapsedTime * 0.23)
  })
}

function setGraveAttrs(grave: THREE.Mesh) {
  // 3～7随机半径
  const radius = 3 + Math.random() * 4
  // 随机角度
  const angle = Math.random() * Math.PI * 2

  // 随机坐标
  const x = radius * Math.sin(angle)
  const z = radius * Math.cos(angle)
  const y = Math.random() * 0.4
  grave.position.x = x
  grave.position.y = y
  grave.position.z = z

  // 随机旋转
  grave.rotation.x = (Math.random() - 0.5) * 0.4
  grave.rotation.y = (Math.random() - 0.5) * 0.4
  grave.rotation.z = (Math.random() - 0.5) * 0.4

  grave.castShadow = true
  grave.receiveShadow = true

  return grave
}

function setTextureAttrs(texture: THREE.Texture, repeat: boolean = true) {
  repeat && texture.repeat.set(8, 8)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.colorSpace = THREE.SRGBColorSpace
}

function moveGhost(ghost: THREE.PointLight, radius: number, angle: number) {
  ghost.position.x = Math.cos(angle) * radius
  ghost.position.z = Math.sin(angle) * radius
  ghost.position.y = Math.sin(angle) * Math.sin(angle * 2.34) * Math.sin(angle * 3.45)
}
