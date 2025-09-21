import * as THREE from 'three'
import * as Cannon from 'cannon-es'
import GUI from 'lil-gui'
import { scene, camera, animate, renderer, sizes } from './base'

export default function () {
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFShadowMap

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
  directionalLight.position.set(5, 5, 5)
  scene.add(directionalLight)

  const cubeTextureLoader = new THREE.CubeTextureLoader()
  const environmentMapTexture = cubeTextureLoader.load([
    '/environmentMaps/0/px.jpg',
    '/environmentMaps/0/nx.jpg',
    '/environmentMaps/0/py.jpg',
    '/environmentMaps/0/ny.jpg',
    '/environmentMaps/0/pz.jpg',
    '/environmentMaps/0/nz.jpg'
  ])

  const hitSound = new Audio('/sounds/hit.mp3')

  const playSound = (e: CollideEvent) => {
    const impactStrength = e.contact.getImpactVelocityAlongNormal()

    if (impactStrength > 1) {
      hitSound.volume = Math.random()
      hitSound.currentTime = 0
      hitSound.play()
    }
  }

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({
      color: '#777777',
      metalness: 0.3,
      roughness: 0.4,
      envMap: environmentMapTexture,
      envMapIntensity: 0.5
    })
  )
  floor.receiveShadow = true
  floor.rotation.x = -Math.PI * 0.5
  floor.position.y = 0
  scene.add(floor)

  const world = new Cannon.World()
  world.broadphase = new Cannon.SAPBroadphase(world)
  world.allowSleep = true
  world.gravity.set(0, -9.82, 0)

  const defaultMaterial = new Cannon.Material('defult')
  const defaultContactMaterial = new Cannon.ContactMaterial(defaultMaterial, defaultMaterial, {
    friction: 0.1,
    restitution: 0.5
  })
  world.addContactMaterial(defaultContactMaterial)
  world.defaultContactMaterial = defaultContactMaterial

  const floorShape = new Cannon.Plane()
  const floorBody = new Cannon.Body()
  floorBody.mass = 0
  floorBody.addShape(floorShape)
  floorBody.quaternion.setFromAxisAngle(new Cannon.Vec3(-1, 0, 0), Math.PI / 2)
  world.addBody(floorBody)

  const objects: MeshBody[] = []

  const createSphereFactory = createSphere(environmentMapTexture, scene, world, objects)
  const creaateBoxFactory = createBox(environmentMapTexture, scene, world, objects, playSound)

  const gui = new GUI()
  const parameters = {
    createSphere: () => {
      createSphereFactory(Math.random() * 0.5, { x: 0, y: 3, z: 0 })
    },
    createBox: () => {
      creaateBoxFactory(1, 1, 1, { x: 1.5, y: 6, z: 1 })
    },
    reset: () => {
      for (const obj of objects) {
        obj.body.removeEventListener('collide', playSound)
        world.removeBody(obj.body)
        scene.remove(obj.mesh)
      }
      objects.length = 0
    }
  }
  gui.add(parameters, 'createSphere').name('Creating Sphere')
  gui.add(parameters, 'createBox').name('Creating Box')
  gui.add(parameters, 'reset').name('Reset')

  const clock = new THREE.Clock()
  let old = 0

  animate(() => {
    const t = clock.getElapsedTime()
    const detlaT = t - old
    old = t

    for (const obj of objects) {
      obj.mesh.position.copy(obj.body.position)
      obj.mesh.quaternion.copy(obj.body.quaternion)
    }

    world.step(1 / 60, detlaT, 3)
  })
}

function createSphere(envMap: THREE.Texture, scene: THREE.Scene, world: Cannon.World, objects: MeshBody[]) {
  const material = new THREE.MeshStandardMaterial({
    metalness: 0.3,
    roughness: 0.4,
    envMap,
    envMapIntensity: 0.5
  })

  return function (radius: number, position: Position) {
    const geometry = new THREE.SphereGeometry(radius, 32, 32)

    // Mesh
    const mesh = new THREE.Mesh(geometry, material)
    mesh.castShadow = true
    mesh.position.y = 0
    scene.add(mesh)

    // Body
    const shape = new Cannon.Sphere(radius)
    const body = new Cannon.Body({
      mass: 1,
      position: new Cannon.Vec3(position.x, position.y, position.z),
      shape
    })
    world.addBody(body)
    // body.applyLocalForce(new Cannon.Vec3(300, 0, 0), new Cannon.Vec3(0, 0, 0))

    objects.push({
      mesh,
      body
    })
  }
}

function createBox(envMap: THREE.Texture, scene: THREE.Scene, world: Cannon.World, objects: MeshBody[], onCollide: Function) {
  const material = new THREE.MeshStandardMaterial({
    metalness: 0.3,
    roughness: 0.4,
    envMap,
    envMapIntensity: 0.5
  })

  return function (width: number, height: number, depth: number, position: Position) {
    const geometry = new THREE.BoxGeometry(width, height, depth, 32, 32, 32)
    const mesh = new THREE.Mesh(geometry, material)
    mesh.castShadow = true
    mesh.position.y = 0
    scene.add(mesh)

    const shape = new Cannon.Box(new Cannon.Vec3(width / 2, height / 2, depth / 2))
    const body = new Cannon.Body({
      mass: 1,
      position: new Cannon.Vec3(position.x, position.y, position.z),
      shape
    })
    body.addEventListener('collide', onCollide)
    world.addBody(body)

    objects.push({
      mesh,
      body
    })
  }
}

interface MeshBody {
  mesh: THREE.Mesh
  body: Cannon.Body
}

interface Position {
  x: number
  y: number
  z: number
}

interface CollideEvent {
  type: string
  body: Cannon.Body
  target: Cannon.Body
  contact: Cannon.ContactEquation
}
