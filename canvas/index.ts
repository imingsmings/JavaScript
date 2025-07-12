type Canvas = CanvasRenderingContext2D
type CanvasElement = HTMLCanvasElement

/**
能模块
方法 / 属性
说明
一、路径构造（Path Creation）
beginPath() closePath() moveTo() lineTo() rect() roundRect() arc() arcTo() ellipse() quadraticCurveTo() bezierCurveTo() addPath()
构建/追加当前路径的线段、圆弧、贝塞尔、矩形等
二、路径渲染 & 裁剪
fill() stroke() clip() fillRule(参数) strokeStyle fillStyle
将路径填充/描边或设为裁剪区
三、命中测试
isPointInPath() isPointInStroke()
判断坐标是否落在当前/指定路径或描边内
四、快速矩形原语
fillRect() strokeRect() clearRect()
直接对矩形区域进行填充、描边或擦除
五、线段样式
lineWidth lineCap lineJoin miterLimit lineDashOffset setLineDash() getLineDash()
线宽、端点、转角、斜接、虚线
六、填充/描边样式
fillStyle / strokeStyle createLinearGradient() createRadialGradient() createConicGradient() createPattern() globalAlpha
纯色、渐变、图案与全局透明度
七、文本
fillText() strokeText() measureText() ；font textAlign textBaseline direction textRendering letterSpacing* wordSpacing* fontKerning* fontStretch* fontVariantCaps*
绘制/测量文本及其排版样式（为实验/部分浏览器特性）
八、图像 & 像素
drawImage() createImageData() getImageData() putImageData() imageSmoothingEnabled imageSmoothingQuality
贴图、离屏像素缓冲、像素读写与缩放质量
九、阴影 & 滤镜
shadowBlur shadowColor shadowOffsetX/Y filter
投影与 CSS-like 滤镜（模糊、灰度等）
十、全局合成 & 透明度
globalCompositeOperation
29 种 Porter-Duff / CSS 混合模式
十一、坐标变换
translate() rotate() scale() transform() setTransform() resetTransform() getTransform()
平移、旋转、缩放、矩阵乘/设/查询、重置
十二、状态栈管理
save() restore() reset()
压栈 / 弹栈保存或一次性恢复所有绘图状态
十三、可访问性辅助
drawFocusIfNeeded()
为可聚焦元素绘制焦点环（配合 Canvas 可获键盘焦点时）
十四、上下文/画布信息
canvas getContextAttributes() isContextLost()
取宿主 <canvas>、查询初始化参数、检测上下文丢失
 */

const canvas = document.getElementById('canvas') as CanvasElement
const ctx = canvas.getContext('2d') as Canvas

// console.log(ctx)

/** 1. 矩形相关 */
// ctx.fillStyle = 'orange'
// ctx.fillRect(50, 50, 100, 100)
// ctx.clearRect(75, 75, 50, 50)
// ctx.strokeStyle = 'orange'
// ctx.lineWidth = 10
// ctx.strokeRect(50, 50, 100, 100)
// ctx.fillStyle = 'green'
// ctx.fillRect(50, 50, 100, 100)

/**
 * 2. 三角形
 *  创建路径 -> 图形命令绘制路径 -> 描边或填充
 * */

// ctx.beginPath()
// ctx.strokeStyle = 'orange'
// ctx.lineWidth = 10
// ctx.moveTo(50, 50)
// ctx.lineTo(100, 100)
// ctx.lineTo(150, 50)
// ctx.closePath()
// ctx.stroke()

/**
 * 3. 圆/弧
 *  64 -> ?
 *  360 -> 2PI
 *  64 * 2PI / 360
 * */
// ctx.beginPath()
// ctx.strokeStyle = 'orange'
// ctx.arc(60, 60, 50, 0, 2 * Math.PI, false)
// ctx.arc(60, 60, 50, 0, ((2 * Math.PI) / 360) * 64, true)
// ctx.stroke()

// 圆弧
// ctx.moveTo(150, 20)
// ctx.arcTo(150, 100, 50, 20, 30)
// ctx.lineTo(50, 20)
// ctx.stroke()

/** 4. 贝塞尔曲线 */
// ctx.beginPath()
// ctx.moveTo(50, 50)
// ctx.quadraticCurveTo(230, 100, 50, 100)
// ctx.stroke()

// ctx.beginPath()
// ctx.moveTo(50, 50)
// ctx.bezierCurveTo(230, 30, 150, 60, 50, 100)
// ctx.stroke()

/** 5. 坐标转换 */
// ctx.translate(50, 50)
// ctx.fillRect(0, 0, 50, 50)

// ctx.scale(2, 1)
// ctx.fillRect(20, 20, 50, 50)
// ctx.rotate((Math.PI / 180) * 10)
// ctx.fillStyle = 'green'
// ctx.fillRect(20, 20, 50, 50)

// pattern
// const img = new Image()
// img.onload = function () {
//   const pattern = ctx.createPattern(img, 'no-repeat')!
//   ctx.fillStyle = pattern
//   ctx.fillRect(0, 0, 300, 150)
// }
// img.src = 'https://fastly.picsum.photos/id/331/300/150.jpg?hmac=3ee61CvADO1GbuILb3yrytfgg9rWwwAt16SMu6m4CgY'

// 渐变
// const gradient = ctx.createLinearGradient(0, 0, 200, 200)
// const gradient = ctx.createRadialGradient(100, 100, 50, 100, 100, 100)
// gradient.addColorStop(0, 'red')
// gradient.addColorStop(0.5, 'yellow')
// gradient.addColorStop(1, 'blue')
// ctx.fillStyle = gradient
// ctx.fillRect(0, 0, 200, 200)

// 阴影
// ctx.shadowColor = '#00f'
// ctx.shadowOffsetX = 30
// ctx.shadowOffsetY = 10
// ctx.shadowBlur = 15
// ctx.fillStyle = 'red'
// ctx.fillRect(50, 50, 100, 100)

// 文字
// ctx.font = '50px sans-serif'
// ctx.fillStyle = 'red'
// ctx.fillText('Hello World', 100, 50)
// ctx.fillText('哈哈, 煞笔', 100, 150)

// cap
// ctx.beginPath()
// ctx.moveTo(30, 30)
// ctx.lineTo(150, 30)
// ctx.lineWidth = 20
// ctx.lineCap = 'butt'
// ctx.lineCap = 'round'
// ctx.lineCap = 'square'
// ctx.stroke()

// join
// ctx.beginPath()
// ctx.moveTo(30, 200)
// ctx.lineWidth = 20
// ctx.lineJoin = 'miter'
// ctx.lineJoin = 'bevel'
// ctx.lineJoin = 'round'
// ctx.lineTo(150, 30)
// ctx.lineTo(300, 200)
// ctx.stroke()

// globalAlpha
// ctx.globalAlpha = 0.5
// ctx.fillStyle = 'blue'
// ctx.fillRect(0, 0, 100, 100)

// clip
// ctx.beginPath()
// ctx.arc(100, 100, 50, 0, 2 * Math.PI, false)
// ctx.stroke()
// ctx.clip()

// ctx.fillStyle = 'blue'
// ctx.fillRect(0, 0, 100, 100)

// drawImage
// const img = new Image()
// img.src = 'https://fastly.picsum.photos/id/331/300/150.jpg?hmac=3ee61CvADO1GbuILb3yrytfgg9rWwwAt16SMu6m4CgY'
// img.onload = function () {
//   ctx.drawImage(img, 50, 50, 100, 100, 0, 0, 200, 200)
// }
// console.log(canvas.toDataURL())

// isPointInPath/isPointInStroke
// ctx.rect(100, 100, 100, 100)
// ctx.fillStyle = 'skyblue'
// ctx.fill()
// console.log(ctx.isPointInPath(100, 100)) // true
// console.log(ctx.isPointInPath(100, 99)) // false

// getImageData/putImageData
// ctx.rect(100, 100, 100, 100)
// ctx.fillStyle = 'skyblue'
// ctx.fill()
// const imageData = ctx.getImageData(100, 100, 50, 50)
// ctx.putImageData(imageData, 0, 0)
// console.log(imageData)

// globalCompositeOperation
// ctx.fillStyle = 'red'
// ctx.fillRect(20, 20, 200, 200)
// ctx.globalCompositeOperation = 'source-over'
// ctx.globalCompositeOperation = 'source-in'
// ctx.globalCompositeOperation = 'source-out'
// ctx.globalCompositeOperation = 'source-atop'
// ctx.globalCompositeOperation = 'destination-atop'
// ctx.fillStyle = 'blue'
// ctx.fillRect(30, 30, 200, 200)

// closePath 只闭合最后一条子路径
// ctx.beginPath()
// ctx.moveTo(20, 140)
// ctx.lineTo(120, 10)
// ctx.lineTo(220, 140)
// ctx.lineTo(20, 140)
// ctx.closePath()
// ctx.lineWidth = 10
// ctx.stroke()

// ctx.beginPath()
// ctx.arc(240, 20, 40, 0, Math.PI, false)
// ctx.moveTo(100, 20)
// ctx.arc(60, 20, 40, 0, Math.PI, false)
// ctx.moveTo(215, 80)
// ctx.arc(150, 80, 65, 0, Math.PI, false)
// ctx.closePath()
// ctx.lineWidth = 6
// ctx.stroke()

// drawImage 参数 d代表目标 s代表源
// 三个参数：source dx dy
// 五个参数：source dx dy dw dh
// 九个参数：source sx sy sw sh dx dy dw dh
// const img = new Image()

// img.onload = function () {
// ctx.drawImage(this as CanvasImageSource, 0, 0)
// ctx.drawImage(this as CanvasImageSource, 0, 0, 200, 100)
// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 3; j++) {
//     ctx.drawImage(this as CanvasImageSource, j * 100, i * 100, 100, 100)
//   }
// }
// ctx.drawImage(this as CanvasImageSource, 0, 0, 100, 100, 50, 50, 100, 100)
// }

// img.src = 'https://fastly.picsum.photos/id/331/300/150.jpg?hmac=3ee61CvADO1GbuILb3yrytfgg9rWwwAt16SMu6m4CgY'

// 动画步骤
// 1. 清空canvas  2. 保存canvas状态 3. 绘制新图形 4. 恢复canvas状态
const sun = new Image()
const earth = new Image()
const moon = new Image()
sun.src = '/sun.jpg'
earth.src = '/earth.png'
moon.src = '/moon.jpg'

function draw() {
  ctx.clearRect(0, 0, 700, 400)

  ctx.globalCompositeOperation = 'destination-over'

  // 保存canvas状态,准备绘制帧
  ctx.save()

  // 先将地球移到太阳中心
  ctx.translate(320, 180)
  const time = new Date()
  const seconds = time.getSeconds()
  const milliSeconds = time.getMilliseconds()
  // 旋转
  const theta = 2 * Math.PI * (seconds / 60 + milliSeconds / 60000)

  ctx.rotate(theta)
  // 再将地球移到轨道
  ctx.translate(135, 0)
  // 绘制地球
  ctx.drawImage(earth, 0, 0, 30, 30)

  ctx.rotate(2 * Math.PI * (seconds / 6 + milliSeconds / 6000))
  ctx.translate(40, -20)
  ctx.drawImage(moon, 0, 0, 20, 20)

  // 恢复canvas状态
  ctx.restore()

  // 绘制轨道
  ctx.beginPath()
  ctx.strokeStyle = 'rgba(0,153,255,0.4)'
  ctx.arc(320, 180, 150, 0, 2 * Math.PI, false)
  ctx.stroke()

  // 绘制太阳
  ctx.drawImage(sun, 0, 0)

  window.requestAnimationFrame(draw)
}

window.requestAnimationFrame(draw)
