interface ProductItem {
  id: number
  image: string
  desc: string
}

export default [
  {
    id: 1,
    image: 'https://fastly.picsum.photos/id/736/400/400.jpg?hmac=BlUHpAJH8K2uYXdveSvgFvSsZlSpJn_POrkPtRMHbPk',
    desc: 'Building'
  },
  {
    id: 2,
    image: 'https://fastly.picsum.photos/id/670/400/400.jpg?hmac=HYybLQYwTT1ci14shwpLCkn6OJIATpmcBct9fr_LCOU',
    desc: 'Street and Bus'
  },
  {
    id: 3,
    image: 'https://fastly.picsum.photos/id/166/400/400.jpg?hmac=cHBjLdAgtcrf9aydJi-KSu0n2BfKLNe2LcJ0WpJoso0',
    desc: 'River'
  }
] as ProductItem[]
