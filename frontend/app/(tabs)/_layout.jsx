import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const TabIcons = ({ icon, colour, name, focused }) => {
  return (
    <View>

    </View>
  )
}
const _layout = () => {


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        // bg colur when active

        tabBarActiveBackgroundColor: "orange"
      }}
    >
      <Tabs.Screen name='home'
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color="black" />
        }}
      />
      <Tabs.Screen name='create'
        options={{
          title: "create",
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="create-outline" size={24} color="black" />
        }}
      />
      <Tabs.Screen name='find'
        options={{
          title: "find",
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome5 name="search" size={24} color="black" />
        }}



      />
      <Tabs.Screen name='profile'
        options={{
          title: "profile",
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />
        }}
      />


    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})