import { Tabs } from 'expo-router'

const TabsNavigation = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name='favorites'
        options={{
          headerShown: false
        }}
      />
      <Tabs.Screen
        name='playlists'
        options={{
          headerShown: false
        }}
      />
      <Tabs.Screen
        name='(songs)'
        options={{
          headerShown: false,
          tabBarLabel: 'Songs'
        }}
      />
      <Tabs.Screen
        name='artists'
        options={{
          headerShown: false
        }}
      />
    </Tabs>
  )
}

export default TabsNavigation
