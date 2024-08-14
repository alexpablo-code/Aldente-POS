import { Tabs, Redirect } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';
import { StyleSheet, Text, View } from "react-native";

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <>
      <Text className="justify-center">Restaurant Name & Date/Time</Text>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'red',
          headerShown: false,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Menu',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="open"
          options={{
            title: 'Open',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="closed_orders"
          options={{
            title: 'Closed Orders',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
            ),
          }}
        />
      </Tabs>
      <Text className="text-2xl justify-center">Powered by Aldente Digitals</Text>
    </>
  );
}
