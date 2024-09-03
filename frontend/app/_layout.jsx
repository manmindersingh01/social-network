import { Stack } from "expo-router";
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import * as SecureStore from 'expo-secure-store'
export default function RootLayout() {

  const tokenCache = {
    async getToken(key) {
      try {
        const item = await SecureStore.getItemAsync(key)
        if (item) {
          console.log(`${key} was used 🔐 \n`)
        } else {
          console.log('No values stored under key: ' + key)
        }
        return item
      } catch (error) {
        console.error('SecureStore get item error: ', error)
        await SecureStore.deleteItemAsync(key)
        return null
      }
    },
    async saveToken(key, value) {
      try {
        return SecureStore.setItemAsync(key, value)
      } catch (err) {
        return
      }
    },
  }
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY
  if (!publishableKey) {
    throw new Error(
      'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
    )
  }
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={publishableKey}>
      <Stack >
        <Stack.Screen name="index" options={{
          headerShown: false
        }} />
        <Stack.Screen name="login/index" options={{
          headerShown: false
        }} />
        <Stack.Screen name="(tabs)" options={{
          headerShown: false
        }} />
      </Stack>
    </ClerkProvider>
  );
}
