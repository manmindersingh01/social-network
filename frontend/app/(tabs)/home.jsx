import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Header from '../../components/Home/Header';

const Home = () => {
  const { user } = useUser();

  return (
    <View className='h-[100%] flex w-full flex-col items-center justify-start mt-12 '>
      <Header />
      {/* {user && user.emailAddresses && user.emailAddresses.length > 0 && (
        <Text>{user.emailAddresses[0].emailAddress}</Text> // Accessing the first email address
      )} */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
