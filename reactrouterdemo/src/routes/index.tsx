import { createFileRoute } from '@tanstack/react-router'
import { useRef, useState } from 'react'
import OpenAI from 'openai'

const client = new OpenAI({
  baseURL: '',
  apiKey: '',
  dangerouslyAllowBrowser: true
})

export const Route = createFileRoute('/')({
  component: Index
})

function Index() {
  const recorder = useRef<MediaRecorder | null>(null)
  const chunks = useRef<Blob[]>([])
  const [src, setSrc] = useState<string>('')
  const [text] = useState<string>('')

  const start = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    recorder.current = new MediaRecorder(stream)

    recorder.current.addEventListener(
      'dataavailable',
      (e) => {
        chunks.current.push(e.data)
      },
      false
    )

    // recorder.current.addEventListener('start', () => {}, false)

    recorder.current.addEventListener(
      'stop',
      () => {
        const blob = new Blob(chunks.current, { type: 'audio/webm' })
        const audioUrl = URL.createObjectURL(blob)
        setSrc(audioUrl)
      },
      false
    )

    recorder.current.start()
  }

  const stop = () => {
    if (recorder.current) {
      recorder.current.stop()
    }
  }

  const transform = async () => {
    // if (!chunks.current.length) return
    const transcription = await client.audio.transcriptions.create({
      file: new File(chunks.current, 'audio.webm'),
      model: 'whisper-1',
      language: 'zh'
    })
    console.log(transcription)
    // const completion = await client.chat.completions.create({
    //   model: 'gpt-4o-mini',
    //   messages: [
    //     { role: 'developer', content: 'Talk like a pirate.' },
    //     { role: 'user', content: 'Are semicolons optional in JavaScript?' }
    //   ]
    // })

    // console.log(completion)
  }

  return (
    <div className='p-2 cursor-pointer text-white'>
      <button
        className='bg-blue-400 hover:bg-blue-500 p-2 rounded-lg mr-2'
        onClick={start}
      >
        开始录音
      </button>
      <button
        className='bg-blue-400 hover:bg-blue-500 p-2 rounded-lg mr-2'
        onClick={stop}
      >
        停止录音
      </button>
      <button
        className='bg-blue-400 hover:bg-blue-500 p-2 rounded-lg mr-2'
        onClick={transform}
      >
        转为文本
      </button>
      <div className='text-lg text-gray-500'>{text}</div>
      {src && (
        <div className='flex items-center gap-4 p-4 bg-white rounded-xl shadow-md w-full max-w-md'>
          <audio
            controls
            className='w-full h-10 rounded-lg overflow-hidden'
          >
            <source
              src={src}
              type='audio/webm'
            />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  )
}
