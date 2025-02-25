import Greet from '../components/Greet'
import About from '../components/About'
import List from '../components/ListData'
import { TouchableHighlight, View } from 'react-native'
import { Button, Image, StatusBar, Modal, Text, ActivityIndicator } from 'react-native'

export default function App() {
  return (
    <View>
      {/* <Greet></Greet>
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
      </Modal> */}
    </View>
  )
}
