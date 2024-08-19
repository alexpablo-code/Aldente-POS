import React, { useState } from 'react'
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native'
import {icons} from '../constants'

const SearchInput = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const[showPassword, setShowPassword] = useState(false)

    return (
            <View className=' w-[75vw] h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4'>
                <TextInput
                className='text-base mt-0.5 text-white flex-1 font-pregular'
                value={value}
                placeholder={placeholder}
                placeholderTextColor='#7b7b8b'
                onChangeText={handleChangeText}
                secureTextEntry={title === 'Password' && !showPassword}
                />
                {title === 'Password' && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image source={!showPassword ? icons.eye : icons.eyeHide} className='w-8 h-8' resizeMode='contain'/>
                    </TouchableOpacity>
                )}
            </View>
    );
}

export default SearchInput
