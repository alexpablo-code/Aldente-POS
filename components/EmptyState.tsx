import React from 'react'
import {View, Text, Image} from 'react-native'
import { Router } from 'expo-router';

import {images} from '../constants';
import CustomButton from '../components/CustomButton';

const EmptyState = ({title, subtitle}) => {
    return (
        <View className='justify-center items-center px-4'>
            <Image source={images.empty} className='w-[270px] h-[215px]' resizeMode='contain'/>
            <Text className='text-xl font-psemibold text-white text-center mt-2'>
                {title}
            </Text>
            <Text className='font-pmedium text-sm text-gray-100'>
                {subtitle}
            </Text>
            <CustomButton
            title='Edit Menu'
            handlePress={() => router.push('/products')}
            containerStyles='w-[30%] my-5 bg-gray-100'
            />
        </View>
    );
}

export default EmptyState
