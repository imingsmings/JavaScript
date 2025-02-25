import { View, Text, FlatList } from 'react-native'

export default function List() {
  const fruites = ['Apple', 'Orange', 'Banana']

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item}
        data={fruites}
        renderItem={({ item }) => {
          return <Text style={{ color: '#fff' }}>{item}</Text>
        }}
      />
    </View>
  )
}
