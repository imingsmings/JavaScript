'use client'
import products from '../db'
import { useRouter } from 'next/navigation'

interface Props {
  params: Promise<{ product: string }>
}

const Product = async ({ params }: Props) => {
  const router = useRouter()

  const { product } = await params

  const productData = products.find((p) => p.id == +product)
  return (
    <div>
      <img
        src={productData?.image}
        alt={productData?.desc}
      />
      <p>{productData?.id}</p>
      <button onClick={() => router.push('/ecommerce')}>Return</button>
    </div>
  )
}

export default Product
