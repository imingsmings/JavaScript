function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default async function SlowPanel() {
  await delay(2000)
  return (
    <section style={{ padding: '1rem', border: '1px solid #e10098', borderRadius: '4px' }}>
      <h2>慢速区块（SlowPanel）</h2>
      <p>这部分内容需要等待 2 秒，才会渲染。</p>
    </section>
  )
}
