/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/signin` | `/(auth)/signup` | `/(tabs)` | `/(tabs)/create` | `/(tabs)/find` | `/(tabs)/home` | `/(tabs)/profile` | `/_sitemap` | `/create` | `/find` | `/home` | `/login` | `/profile` | `/signin` | `/signup`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
