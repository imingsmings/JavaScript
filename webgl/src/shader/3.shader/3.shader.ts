import * as THREE from 'three'
import GUI from 'lil-gui'
import { animate, scene, camera } from '../../threejs/base'
import vertexSource from './vertex.glsl'
import fragmentSource from './fragment.glsl'

interface DebugObject {
  [key: string]: any
}

camera.position.x = 1

export default function () {
  const gui = new GUI()
  const debugObject: DebugObject = {}

  debugObject.debugColor = '#1f6fd1'
  debugObject.surfaceColor = '#9bd8ff'

  const geometry = new THREE.PlaneGeometry(6, 6, 128, 128)

  const material = new THREE.RawShaderMaterial({
    transparent: true,
    glslVersion: THREE.GLSL3,
    vertexShader: vertexSource,
    fragmentShader: fragmentSource,
    uniforms: {
      uTime: {
        value: 0
      },
      uBigWaveElevation: {
        value: 0.2
      },
      uBigWaveFrequency: {
        value: new THREE.Vector2(1.2, 1.2)
      },
      uBigWaveSpeed: {
        value: 0.2
      },
      uDepthColor: {
        value: new THREE.Color(debugObject.debugColor)
      },
      uSurfaceColor: {
        value: new THREE.Color(debugObject.surfaceColor)
      },
      uColorOffset: {
        value: 0.08
      },
      uColorMultipler: {
        value: 5
      }
    }
  })

  gui.add(material.uniforms.uBigWaveElevation, 'value').name('Wave Elevation').min(0).max(1).step(0.001)
  gui.add(material.uniforms.uBigWaveFrequency.value, 'x').name('Wave Frequency X').min(0).max(10).step(0.001)
  gui.add(material.uniforms.uBigWaveFrequency.value, 'y').name('Wave Frequency Y').min(0).max(10).step(0.001)
  gui.add(material.uniforms.uBigWaveSpeed, 'value').name('Wave Spped').min(0).max(4).step(0.001)
  gui
    .addColor(material.uniforms.uDepthColor, 'value')
    .name('Depth Color')
    .onChange((color: THREE.Color) => {
      material.uniforms.uDepthColor.value.set(color)
    })
  gui
    .addColor(material.uniforms.uSurfaceColor, 'value')
    .name('Surface Color')
    .onChange((color: THREE.Color) => {
      material.uniforms.uSurfaceColor.value.set(color)
    })
  gui.add(material.uniforms.uColorOffset, 'value').name('Color Offset').min(0).max(1).step(0.001)
  gui.add(material.uniforms.uColorMultipler, 'value').name('Color Multipler').min(0).max(10).step(0.001)

  const mesh = new THREE.Mesh(geometry, material)
  mesh.rotation.set(-Math.PI / 3, 0, 0)
  scene.add(mesh)

  const clock = new THREE.Clock()
  animate(() => {
    const elapsedTime = clock.getElapsedTime()

    material.uniforms.uTime.value = elapsedTime
  })
}
