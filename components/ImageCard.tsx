import React from 'react'
import {View, Text} from 'react-native'

const ImageCard = ({item: {categoryName, categoryDescription}}) => {
    return (
        <View className='flex-col items-center px-4 mb-14'>
            <Text className='text-2xl text-white'>{categoryName}</Text>
        </View>
    );
}

export default ImageCard
