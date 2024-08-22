import React, { useState } from 'react'
import {View, Text, TextInput, Image, TouchableOpacity, Alert} from 'react-native'
import {icons} from '../constants'
import { usePathname, router } from 'expo-router'

const SearchInput = ({initialQuery}) => {
    const pathname = usePathname();
    const [query, setQuery] = useState(initialQuery || '')

    return (
            <View className=' w-[75vw] h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4'>
                <TextInput
                className='text-base mt-0.5 text-white flex-1 font-pregular'
                value={query}
                placeholder='Search for menu item'
                placeholderTextColor='#CDCDE0'
                onChangeText={(e) => setQuery(e)}
                />
                <TouchableOpacity
                onPress={() => {
                    if(!query){
                        return Alert.alert('Missing query', 'Please input something to search results')
                    }
                    if(pathname.startsWith('/search')) router.setParams({query})
                        else router.push(`/search/${query}`)
                }}
                >
                    <Image source={icons.search} className='w-8 h-8' resizeMode='contain'/>
                </TouchableOpacity>
            </View>
    );
}

export default SearchInput
