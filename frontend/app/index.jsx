import { Text, View } from "react-native";
import { Link, Redirect, useRootNavigationState } from "expo-router";
import { useUser } from "@clerk/clerk-expo";
import { useEffect } from "react";

export default function Index() {
  const { user } = useUser();
  const rootNavigation = useRootNavigationState();

  useEffect(() => {
    check();
    // Add any additional logic to handle user state changes
  }, []);

  const check = () => {
    // Check if rootNavigation is defined and has a key property
    if (!rootNavigation || !rootNavigation.key) {
      return null;
    }
    // Other logic if needed
  };

  return (
    <View>
      {
        user ? <Redirect href={'/(tabs)/home'} /> :
          <Redirect href={'/login/index'} />
      }
    </View>
  );
}
