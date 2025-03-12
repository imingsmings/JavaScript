import { View, Text } from 'react-native'

export default function Home() {
  return (
    <View>
      <Text
        style={{
          color: 'red'
        }}
        onPress={(e) => {
          alert('陈红回来了')
        }}
        numberOfLines={1}
      >
        hello Home
      </Text>
    </View>
  )
}
