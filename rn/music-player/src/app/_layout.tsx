import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaProvider>
      <RootNavigation></RootNavigation>
      <StatusBar style='auto'></StatusBar>
    </SafeAreaProvider>
  )
}

const RootNavigation = () => {
  return (
    <Stack>
      <Stack.Screen
        name='(tabs)'
        options={{
          headerShown: false
        }}
      />
    </Stack>
  )
}

export default App
