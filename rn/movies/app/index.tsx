import { useEffect, useState } from 'react'
import { Text, View, Button } from 'react-native'
import { useAudioPlayer } from 'expo-audio'

const source = require('../assets/test.mp3')

export default function Index() {
  // const [user, setUser] = useState<any>(null)
  // useEffect(() => {
  //   fetch('https://api.github.com/users/imingsmings')
  //     .then((res) => {
  //       return res.json()
  //     })
  //     .then((data) => {
  //       setUser(data)
  //     })
  // }, [])

  const player = useAudioPlayer(source)

  const handlePlay = () => {
    player.play()
  }

  const handleStop = () => {
    player.pause()
  }

  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-5xl text-blue-600 font-bold'>Welcome</Text>
      {/* <Text className='text-2xl text-blue-500 font-bold'>{user && user.name}</Text>
      <Text className='text-1xl text-blue-500 font-bold'>{user && user.bio}</Text> */}
      <Button
        title='Play'
        onPress={handlePlay}
      />

      <Button
        title='Stop'
        onPress={handleStop}
      />
    </View>
  )
}
