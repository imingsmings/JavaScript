import { createFileRoute } from '@tanstack/react-router'
import { useRef, useState } from 'react'

export const Route = createFileRoute('/upload/')({
  component: RouteComponent
})

function RouteComponent() {
  const file = useRef<HTMLInputElement>(null)
  const [imageUrl, setImageUrl] = useState('')

  const handleUpload = () => {
    if (!file.current) return

    const files = file.current.files
    if (files && files.length) {
      const file = files[0]

      const formData = new FormData()
      formData.append('name', 'wxm')
      formData.append('file', file)

      fetch('https://localhost:8080/upload', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: 'abcdf'
        }
      })
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          console.log(data)
          setImageUrl(data.data.filepath)
        })
    }
  }

  return (
    <div className='mt-2'>
      <input
        type='file'
        name='file'
        ref={file}
      />
      <button
        className='bg-blue-500 p-2 rounded-lg text-white'
        onClick={handleUpload}
      >
        Upload
      </button>
      {imageUrl && <img src={imageUrl} />}
    </div>
  )
}
