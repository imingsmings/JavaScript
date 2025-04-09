import { useQuery } from '@tanstack/react-query'

const getRandomNumber = () => {
  return Promise.resolve(Math.random())
}

function Deduplication() {
  const { data } = useQuery({
    queryKey: ['randomnumber'],
    queryFn: getRandomNumber
  })

  return <div>Random number is: {data}</div>
}

export default Deduplication
