;(() => {
  const oCanvas = document.getElementById('canvas')! as HTMLCanvasElement
  const ctx = oCanvas.getContext('2d')!
  const width = window.innerWidth
  const height = window.innerHeight
  const count = 200
  const pool: ParticlePoint[] = []
  const center = {
    x: width / 2,
    y: height / 2
  }

  oCanvas.width = width
  oCanvas.height = height

  const init = () => {
    generateParticle()
    bindEvent()
    loop()
  }

  init()

  function bindEvent() {
    oCanvas.addEventListener('click', handleClick, false)
  }

  function handleClick(e: MouseEvent) {
    center.x = e.pageX
    center.y = e.pageY
  }

  function loop() {
    ctx.clearRect(0, 0, width, height)

    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    const cx = center.x
    const cy = center.y

    pool.forEach((p) => {
      p.v += p.a
      p.r += p.v

      const x = cx + Math.cos(p.t) * p.r
      const y = cy + Math.sin(p.t) * p.r

      ctx.strokeStyle = `rgba(255, 255, 255, ${p.o})`
      ctx.lineWidth = 1 + p.v * 0.3
      ctx.beginPath()
      ctx.moveTo(p.x ?? x, p.y ?? y)
      ctx.lineTo(x, y)
      ctx.stroke()

      p.x = x
      p.y = y

      if (x < -50 || x > width + 50 || y < -50 || y > height + 50) {
        setParticle(p)
        p.x = cx + Math.cos(p.t) * p.r
        p.y = cy + Math.sin(p.t) * p.r
      }
    })

    requestAnimationFrame(loop)
  }

  function setParticle(p: ParticlePoint) {
    p.r = Math.random() * 0.5
    p.t = Math.random() * 2 * Math.PI
    p.v = 0
    p.a = 0.08 + Math.random() * 0.04
    p.o = 0.5 + Math.random() * 0.05
  }

  function generateParticle() {
    for (let i = 0; i < count; i++) {
      const p: ParticlePoint = {
        r: 0,
        t: 0,
        v: 0,
        a: 0,
        o: 0
      }
      setParticle(p)
      pool.push(p)
    }
  }
})()

interface ParticlePoint {
  // 半径
  r: number
  // 方向
  t: number
  // 速度
  v: number
  // 加速度
  a: number
  // 透明度
  o: number

  x?: number
  y?: number
}

function randomInRange(min: number, max: number, integer: boolean = false) {
  const rand = Math.random() * (max - min) + min

  return integer ? Math.round(rand) : rand
}
