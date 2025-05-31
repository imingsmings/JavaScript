'use client'
import { useEffect, useState } from 'react'

function ClientFetchDemo() {
  const [data, setData] = useState<string | null>(null)

  useEffect(() => {
    setTimeout(() => {
      setData('这是客户端通过 useEffect 模拟加载的数据。')
    }, 1500)
  }, [])

  if (!data) {
    return <p style={{ color: '#aaa' }}>客户端正在加载数据…</p>
  }
  return <p style={{ color: '#333' }}>{data}</p>
}

export default ClientFetchDemo
