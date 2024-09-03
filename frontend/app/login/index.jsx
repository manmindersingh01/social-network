import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { Link } from 'expo-router'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'
import * as WebBrowser from 'expo-web-browser'
export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()
const index = () => {
  useWarmUpBrowser()
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })
  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/home', { scheme: 'myapp' }),
      })

      if (createdSessionId) {
        // setActive({ session: createdSessionId })
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [])
  return (
    <View className=' bg-zinc-950 h-[100%] w-full text-white flex flex-col justify-center items-center'>
      <Text className='text-2xl text-white'  >
        Login Page
      </Text>
      <Pressable onPress={onPress} className=' bg-zinc-800 w-44 m-5 h-10 text-blue-600 font-bold text-3xl rounded-lg flex justify-center items-center'>
        <Text className='text-orange-700'>Get started</Text>
      </Pressable>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})