import Greet from '@/components/Greet'
import About from '@/components/About'
import { Button } from 'react-native'

export default function App() {
  return (
    <>
      <Greet></Greet>
      <About></About>
      <Button
        title='Click'
        color={'skyblue'}
        onPress={() => {
          // console.warn(123)
          alert('clicked')
        }}
      />
    </>
  )
}
