import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { useRouter, useLocalSearchParams} from 'expo-router';

const CategoryCard = ({item: {categoryName, categoryDescription, $id: categoryId}}) => {

    const router = useRouter();
    // const {categoryId, categoryName} = useLocalSearchParams();

    const handlePress =() => {
        router.push({pathname:'/category-items',params:{categoryId, categoryName}})
    }

    return (
        <TouchableOpacity 
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-[#FFD700] h-[200px] w-[30%] rounded-xl justify-center items-center p-1 flex-1'}`}
            >
            <Text 
            className={`text-primary font-psemibold text-2xl`}>
                {categoryName}
            </Text>
        </TouchableOpacity>
    );
}

export default CategoryCard
