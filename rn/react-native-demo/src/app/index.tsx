import Greet from '../components/Greet'
import About from '../components/About'
import List from '../components/ListData'
import {
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  View,
  Button,
  Image,
  StatusBar,
  Modal,
  SectionList,
  Text,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import { useState } from 'react'

const list: number[] = []

for (let i = 0; i < 100; i++) {
  list.push(i)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'lightgrey',
    padding: 5
  },
  item: {
    fontSize: 16,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  }
})

export default function App() {
  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState(['Item 1', 'Item 2', 'Item 3'])

  const onRefresh = () => {
    setRefreshing(true)
    const newData = [...data]
    const len = newData.length
    for (let i = len; i < len + 3; i++) {
      newData.push(`Item ${i + 1}`)
    }
    setData(newData)
    setRefreshing(false)
  }

  return (
    <>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item}</Text>}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </>
    // <ScrollView horizontal={false}>
    //   {list.map((item, index) => {
    //     return <Greet></Greet>
    //   })}
    // </ScrollView>

    // <SectionList
    //   sections={[
    //     {
    //       title: 'Section 1',
    //       data: ['Item 1.1', 'Item 1.2', 'Item 1.3']
    //     },
    //     {
    //       title: 'Section 2',
    //       data: ['Item 2.1', 'Item 2.2', 'Item 2.3']
    //     }
    //   ]}
    //   renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
    //   renderSectionHeader={({ section }) => (
    //     <Text style={styles.sectionHeader}>{section.title}</Text>
    //   )}
    //   keyExtractor={(item, index) => String(index)}
    // />

    // <View>
    /* <Greet></Greet>
      <About></About>
      <Button
        title='Click'
        color={'skyblue'}
        onPress={() => {
          // console.warn(123)
          alert('clicked')
        }}
      />
      <Image
        source={require('@/assets/demo.png')}
        style={{ width: 200, height: 200 }}
      />
      <Image
        source={{ uri: 'https://reactjs.org/logo-og.png' }}
        style={{ width: 200, height: 200 }}
      />
      <List />

      <Text>Loading, please wait...</Text>
      <ActivityIndicator
        size='large'
        color='#fff'
        animating={false}
      />

      <Modal
        animationType='slide'
        transparent={true}
        visible={true}
        onRequestClose={() => {}}
      >
        <View>
          <View>
            <Text style={{ color: '#fff' }}>Hello, I am a Modal!!!!!!</Text>

            <TouchableHighlight onPress={() => {}}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal> */
    // </View>
  )
}
