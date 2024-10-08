import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, Image, RefreshControl, Alert} from 'react-native' 
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGlobalContext } from '../../context/GlobalProvider';

import {images} from '../../constants';
import SearchInput from '../../components/SearchInput';
import MenuLayout from '../../components/MenuLayout';
import EmptyState from '../../components/EmptyState';
import useAppwrite from '../../lib/useAppwrite';
import { getAllMenuItems } from '../../lib/appwrite';
import { getRestaurantMenuCategories } from '../../lib/appwrite';
import CategoryCard from '../../components/CategoryCard';

const Menu = () => {
    const {data: menuCategories, refetch} = useAppwrite(() => getRestaurantMenuCategories(user.$id));
    const {isLoading, isLoggedIn, user} = useGlobalContext();

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true);
        await refetch();
        //re call posts -> see if any new posts have been added in this case menu items

        setRefreshing(false);
    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <FlatList
                data={menuCategories}
                numColumns={3}
                columnWrapperStyle={{gap:10, paddingHorizontal:12}}
                contentContainerStyle={{gap:10, paddingBottom:20}}
                keyExtractor={(item) => item.$id}
                renderItem={({item}) =>(
                    <CategoryCard item={item}/>
                )}
                ListHeaderComponent={() => (
                    <View className='my-6 px-4 space-y-6'>
                        <View className='justify-between items-start flex-row mb-6'>
                            <View>
                                <Text className='font-pmedium text-sm text-gray-100'>
                                    Welcome Back
                                </Text>
                                <Text className='text-2xl font-psemibold text-white'>
                                    Taquiza
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

                        <SearchInput/>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <EmptyState
                    title="No Menu found"
                    subtitle="Add items to your menu"
                    />
                )}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
            />
        </SafeAreaView>
    );
}

export default Menu
