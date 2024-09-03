import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

const Header = () => {
  const { user } = useUser();
  return (
    <View className='flex flex-row w-full bg-red-600 h-20 p-4 justify-between '>
      <View className=''>
        <Text className='text-white text-lg'>Welcome, </Text>
        <Text className='font-bold font-mono text-purple-950 text-xl' >{user.fullName}</Text>
      </View>
      <Image
        source={{ uri: user?.imageUrl }}
        style={{ width: 50, height: 50, borderRadius: 25 }}
      />

    </View>
  )
}

export default Header

const styles = StyleSheet.create({})