import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, Image, RefreshControl, Alert, TouchableOpacity} from 'react-native' 
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter , useLocalSearchParams} from 'expo-router';

import {images} from '../../constants';
import SearchInput from '../../components/SearchInput';
import EmptyState from '../../components/EmptyState';
import useAppwrite from '../../lib/useAppwrite';
import { getAllMenuItems } from '../../lib/appwrite';
import { getAllMenuCategories } from '../../lib/appwrite';
import FoodItemCard from '../../components/FoodItemCard';

const Products = () => {
    const {data: categoryItems, refetch} = useAppwrite(getAllMenuItems);
    const{categoryId, categoryName} = useLocalSearchParams();
    const router = useRouter();

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true);
        await refetch();
        //re call posts -> see if any new posts have been added in this case menu items

        setRefreshing(false);
    }

    const FoodItemRow = ({item: {itemName, ItemCategory, price}}) => {
        return(
            <View className='flex-1 flex-row justify-between border border-white items-center'>
                <Text className='font-psemibold text-white'>{itemName}</Text>
                <Text className='font-psemibold text-white'>{ItemCategory}</Text>
                <Text className='font-psemibold text-white'>{price}</Text>
                <Text className='font-psemibold text-white'>Edit</Text>
            </View>
        )
    }

    const handlePress =() => {
        router.push('/add-product')
    }


    return (
        <SafeAreaView className='bg-primary h-full px-5'>
            <View className='flex-row justify-between'>
                <View className='my-4'>
                    <Text className='text-white text-2xl'>Products</Text>
                </View>
                <View className='my-4'>
                    <TouchableOpacity 
                    onPress={handlePress}
                    className='bg-secondary rounded-lg p-2'>
                        <Text>Add Product</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={categoryItems}
                contentContainerStyle={{gap:1, paddingBottom:20}}
                keyExtractor={(item) => item.$id}
                renderItem={({item}) =>(
                    <FoodItemRow item={item}/>
                )}
                ListHeaderComponent={() => (
                    <View className=''>
                        <View className='flex-1 flex-row justify-between border border-white items-center'>
                            <Text className='text-2xl font-psemibold text-white'>
                                Name
                            </Text>
                            <Text className='text-2xl font-psemibold text-white'>
                                Category
                            </Text>
                            <Text className='text-2xl font-psemibold text-white'>
                                Price
                            </Text>
                            <Text className='text-2xl font-psemibold text-white'>
                                EDIT
                            </Text>
                        </View>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <EmptyState
                    title="No items in this category found"
                    subtitle="Add items to your menu"
                    />
                )}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
            />
        </SafeAreaView>
    );
}

export default Products
