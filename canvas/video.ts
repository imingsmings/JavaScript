;(() => {
  const oVideo = document.getElementById('video') as HTMLVideoElement
  const oCanvas = document.getElementById('canvas') as HTMLCanvasElement
  const oInput = document.getElementById('comment') as HTMLInputElement
  const oSend = document.getElementById('send') as HTMLButtonElement
  const oClose = document.getElementById('close') as HTMLButtonElement
  const oOpen = document.getElementById('open') as HTMLButtonElement

  const ctx = oCanvas.getContext('2d') as CanvasRenderingContext2D
  const canvasWidth = oCanvas.width
  const canvasHeight = oCanvas.height
  const comments: VideoComment[] = []
  const step = 0.5
  let isOpenComment = true

  let framer: number = 0

  const init = () => {
    bindEevent()
  }

  init()

  function bindEevent() {
    oVideo.addEventListener('canplay', play, false)
    oVideo.addEventListener('pause', pause, false)
    oVideo.addEventListener('ended', end, false)
    oSend.addEventListener('click', send, false)
    oClose.addEventListener('click', close, false)
    oOpen.addEventListener('click', open, false)
  }

  function draw() {
    clearDraw()
    drawImage()
    drawText()
    play()
  }

  function clearDraw() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
  }

  function drawImage() {
    ctx.drawImage(oVideo, 0, 0, canvasWidth, canvasHeight)
  }

  function drawText() {
    if (!isOpenComment) return

    ctx.fillStyle = 'orange'
    ctx.font = '16px Arial'

    comments.forEach((comment) => {
      const { text, right, top } = comment
      ctx.fillText(text, right, top)

      comment.right -= step

      if (comment.right <= -100) {
        comment.right = canvasWidth + 50
      }
    })
  }

  function play() {
    framer = requestAnimationFrame(draw)
  }

  function pause() {
    cancelAnimationFrame(framer)
  }

  function end() {
    clearDraw()
    pause()
    close()
  }

  function send() {
    const text = oInput.value

    if (!text) return

    comments.push({
      text,
      right: canvasWidth + 50,
      top: randomTop()
    })

    oInput.value = ''
  }

  function close() {
    isOpenComment = false
  }

  function open() {
    isOpenComment = true
  }
})()

interface VideoComment {
  text: string
  right: number
  top: number
}

const candidates = [60, 70, 80, 90, 100]

function randomTop(): number {
  return candidates[Math.floor(Math.random() * candidates.length)]
}
