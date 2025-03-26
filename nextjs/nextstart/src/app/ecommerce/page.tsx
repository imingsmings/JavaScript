import Link from 'next/link'
import products from './db'

const Ecommerce = () => {
  return (
    <main className='flex'>
      {products.map((product) => {
        return (
          <Link
            href={'/ecommerce/' + product.id}
            key={product.id}
            className='m-[2rem]'
          >
            <img
              src={product.image}
              alt={product.desc}
            />
            <p className='text-center'>{product.desc}</p>
          </Link>
        )
      })}
    </main>
  )
}

export default Ecommerce
