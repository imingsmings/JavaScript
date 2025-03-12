import { View, Text } from 'react-native'

export default function About() {
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
        hello about
      </Text>
    </View>
  )
}
