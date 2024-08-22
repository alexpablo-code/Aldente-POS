import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { router } from 'expo-router';

const FoodItemCard = ({item: {itemName, itemDescription, $id: categoryId, itemimage, price}}) => {

    const handlePress =() => {
        console.log(itemName)
    }

    return (
        <TouchableOpacity 
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-[#FFD700] h-[200px] w-[20%] rounded-xl justify-center items-center p-1 flex-1'}`}
            >
            <Text 
            className={`text-primary font-psemibold text-xl`}>
                {itemName}
            </Text>
            <Text 
            className={`text-primary font-psemibold text-lg mt-3`}>
                {price}
            </Text>
        </TouchableOpacity>
    );
}

export default FoodItemCard
