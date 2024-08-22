import React from 'react'
import {View, Text} from 'react-native'
import {Stack} from 'expo-router';
import { StatusBar } from 'expo-status-bar';


const AdminLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name="profile"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="products"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="add-product"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="end-of-day"
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>
            <StatusBar backgroundColor='#161622' style="light"/>
        </>
    );
}

export default AdminLayout
