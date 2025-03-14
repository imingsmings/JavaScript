import React, { useCallback } from 'react'
import { Alert, Button, Linking, StyleSheet, View } from 'react-native'

// const supportedURL = 'https://google.com'
// const supportedURL = 'mailto:test@gmail.com'
// const supportedURL = 'tel:+86188888888'
const supportedURL = 'sms:+86188888888'

const unsupportedURL = 'slack://open?team=123456'

type OpenURLButtonProps = {
  url: string
  children: string
}

const OpenURLButton = ({ url, children }: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url)
      // await Linking.openSettings()
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`)
    }
  }, [url])

  return (
    <Button
      title={children}
      onPress={handlePress}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const App = () => {
  return (
    <View style={styles.container}>
      <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
      <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
    </View>
  )
}

export default App
