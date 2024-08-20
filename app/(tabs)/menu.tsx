import React, {useState} from 'react'
import {View, Text, FlatList, Image, RefreshControl} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import {images} from '../../constants';
import SearchInput from '../../components/SearchInput';
import MenuLayout from '../../components/MenuLayout';
import EmptyState from '../../components/EmptyState';

const Menu = () => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true);
        //re call posts -> see if any new posts have been added in this case menu items
        setRefreshing(false);
    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <FlatList
                data={[{id:1}, {id:2}, {id:3}]}
                keyExtractor={(item) => item.$id}
                renderItem={({item}) =>(
                    <Text className='text-3xl text-white'>{item.id}</Text>
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

                        <View className='w-full flex-1 pt-5 pb-8'>
                            <Text className='text-gray-100 text-lg font-pregular mb-3'>Latest Items</Text>
                            <MenuLayout categories={[{id:1}, {id:2}, {id:3}] ?? []}/>
                        </View>
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
