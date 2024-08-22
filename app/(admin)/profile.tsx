import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, Image, RefreshControl, Alert, TouchableOpacity} from 'react-native' 
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGlobalContext } from '../../context/GlobalProvider';

import {images} from '../../constants';
import {icons} from '../../constants'
import EmptyState from '../../components/EmptyState';
import useAppwrite from '../../lib/useAppwrite';
import { getRestaurantMenuCategories } from '../../lib/appwrite';
import { useLocalSearchParams } from 'expo-router';

const Profile = () => {
    // const {query} = useLocalSearchParams();
    const {isLoading, isLoggedIn, user} = useGlobalContext();
    const {data: menuCategories, refetch} = useAppwrite(() => getRestaurantMenuCategories(user.$id));

    const logout = () => {
  
    }

    return (
        <SafeAreaView className='bg-primary h-full items-center'>
            <View className='w-full justify-center items-between px-4'>
                <Text className='text-white'>{user.restaurantName}</Text>
                <TouchableOpacity 
                    className='items-end'
                    onPress={logout}
                >
                    <Image 
                    source={icons.logout}
                    resizeMode='contain'
                    className="w-8 h-8"
                    />
                </TouchableOpacity>
            </View>
            <View className='w-16 h-16 border-white border rounded-lg justify-center items-center'>
                <Image
                    source={{uri: user?.logoUrl}}
                    className='w-[90%] h-[90%] rounded-lg'
                    resizeMode='cover'
                />
            </View>
            <View className='mt-6'>
                <Text className='text-white text-lg'>Restaurant Name: {user.restaurantName}</Text>
                <Text className='text-white text-lg'>Restaurant Name: {user.email}</Text>
            </View>
        </SafeAreaView>
    );
}

export default Profile
