import Image from 'next/image'
import pic from '../../../public/florian-van-duyn.jpg'

const ImagePage = () => {
  return (
    <div>
      <Image
        priority={true}
        src={pic}
        alt=''
      />
      <Image
        loading={'lazy'}
        src={
          'https://images.unsplash.com/photo-1475776408506-9a5371e7a068?q=80&w=3916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        alt=''
        width={0}
        height={0}
        style={{
          width: '400px',
          height: 'auto'
        }}
      />
    </div>
  )
}

export default ImagePage
