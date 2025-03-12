import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

const User = () => {
  const { id } = useLocalSearchParams()

  return (
    <View>
      <Text>User: {id}</Text>
    </View>
  )
}

export default User
