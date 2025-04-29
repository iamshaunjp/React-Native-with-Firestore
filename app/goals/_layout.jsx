import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons"

export default function GoalsLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'grey',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Your Goals',
          tabBarIcon: ({ focused }) => (
            <Ionicons 
              size={24} 
              name={focused ? 'home' : 'home-outline'} 
              color="black"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create Goal',
          tabBarIcon: ({ focused }) => (
            <Ionicons 
              size={24} 
              name={focused ? 'create' : 'create-outline'} 
              color="black"
            />
          ),
        }}
      />
    </Tabs>
  )
}
