import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, Image, RefreshControl, Alert} from 'react-native' 
import { SafeAreaView } from 'react-native-safe-area-context';

import {images} from '../../constants';
import SearchInput from '../../components/SearchInput';
import MenuLayout from '../../components/MenuLayout';
import EmptyState from '../../components/EmptyState';
import useAppwrite from '../../lib/useAppwrite';
import { searchItem } from '../../lib/appwrite';
import FoodItemCard from '../../components/FoodItemCard'
import { useLocalSearchParams } from 'expo-router';

const Search = () => {
    const {query} = useLocalSearchParams();
    const {data: menuItem, refetch} = useAppwrite(() => searchItem(query));

    useEffect(() => {
        refetch()
    }, [query])

    return (
        <SafeAreaView className='bg-primary h-full'>
            <FlatList
                data={menuItem}
                numColumns={3}
                columnWrapperStyle={{gap:10, paddingHorizontal:12}}
                contentContainerStyle={{gap:10, paddingBottom:20}}
                keyExtractor={(item) => item.$id}
                renderItem={({item}) =>(
                    <FoodItemCard item={item}/>
                )}
                ListHeaderComponent={() => (
                    <View className='my-6 px-4 space-y-6'>
                        <View className='justify-between items-start flex-row mb-6'>
                            <View>
                                <Text className='font-pmedium text-sm text-gray-100'>
                                    Search Results For
                                </Text>
                                <Text className='text-2xl font-psemibold text-white'>
                                    {query}
                                </Text>
                            </View>
                            <View className='mt-1.5'>
                                <Image
                                    source={images.aldenteIcon}
                                    className='w-12 h-12'
                                    resizeMode='contain'
                                />
                            </View>
                        </View>

                        <SearchInput initialQuery={query}/>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <EmptyState
                    title="No items Found"
                    subtitle="No items found with this name"
                    />
                )}
            />
        </SafeAreaView>
    );
}

export default Search
