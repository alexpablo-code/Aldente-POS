import { Tabs, Redirect } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import {icons} from '../../constants';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';
import { StyleSheet, Text, View, Image } from "react-native";

const TabIcon = ({icon, color, name, focused}) => {
  return(
  <View className="items-center justify-center gap-2">
    <Image
      source={icon}
      resizeMode="contain"
      tintColor={color}
      className="w-6 h-6"
    />
    <Text className={`${focused ? 'font-psemibold': 'font-pregular'} text-xs`} style={{color:color}}>
      {name}
      </Text>
  </View>
  )
}

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <>
      {/* <Text className="justify-center">Restaurant Name & Date/Time</Text> */}
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'gold',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height:84,
            },
          tabBarItemStyle: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 8,
            },
          }}
      >
        <Tabs.Screen
          name="menu"
          options={{
            title: 'Menu',
            tabBarLabel: '', // Custom label handled by TabIcon component
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
              icon={icons.home} 
              color={color}
              name="Home"
              focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="open"
          options={{
            title: 'Open',
            tabBarLabel: 'Open', // This will add the text label below Ionicons
            tabBarIcon: ({ color, focused }) => (
              <View className="items-center justify-center gap-2">
                <TabBarIcon name={focused ? 'radio-button-on' : 'radio-button-off'} color={color} />
                <Text className={`${focused ? 'font-psemibold': 'font-pregular'} text-xs`} style={{color:color}}>Open</Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="closed_orders"
          options={{
            title: 'Closed Orders',
            tabBarLabel: 'Closed Orders', // Text label for Ionicons
            tabBarIcon: ({ color, focused }) => (
              <View className="items-center justify-center gap-2">
                <TabBarIcon name={focused ? 'checkbox' : 'checkbox-outline'} color={color} />
                <Text className={`${focused ? 'font-psemibold': 'font-pregular'} text-xs`} style={{color:color}}>Open</Text>
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
}
