import FastPanel from '@/components/FastPanel'
import SlowPanel from '@/components/SlowPanel'
import ClientFetch from '@/components/ClientFetch'
import { Suspense } from 'react'

export const dynamic = 'force-dynamic'

export default function StreamingPage() {
  return (
    <div>
      <h2 style={{ marginBottom: '1rem' }}>Streaming SSR 混合示例</h2>

      <FastPanel />

      <Suspense fallback={<div style={{ color: '#888' }}>正在加载慢速区块…</div>}>
        <SlowPanel />
      </Suspense>

      <div style={{ marginTop: '2rem' }}>
        <h3>浏览器端渲染示例</h3>
        <ClientFetch />
      </div>
    </div>
  )
}
