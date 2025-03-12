import { Stack, Tabs } from 'expo-router'
import { View } from 'react-native'

const RootLayout = () => {
  return (
    // <Stack>
    //   <Stack.Screen
    //     name='index'
    //     options={{
    //       headerTitle: 'Index',
    //       headerStyle: {
    //         backgroundColor: 'red'
    //       }
    //     }}
    //   />
    //   <Stack.Screen
    //     name='Home'
    //     options={{
    //       headerTitle: 'Home',
    //       headerStyle: {
    //         backgroundColor: 'green'
    //       }
    //     }}
    //   />
    //   <Stack.Screen name='About' />
    //   <Stack.Screen name='users/[id]' />
    // </Stack>
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          headerTitle: 'Index',
          tabBarLabel: 'Index',
          sceneStyle: {
            backgroundColor: 'skyblue'
          }
        }}
      ></Tabs.Screen>
      <Tabs.Screen name='Home'></Tabs.Screen>
      <Tabs.Screen name='About'></Tabs.Screen>
    </Tabs>
  )
}

export default RootLayout
