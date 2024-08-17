import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
    return (
        <TouchableOpacity 
            onPress={handlePress}
            activeOpacity={0.7}
            className={`w-[50vw] bg-[#FFD700] rounded-xl min-h-[62px] justify-center items-center p-1 ${containerStyles} ${isLoading ? 'opacity-50':''}`}
            disabled={isLoading}
            >
            <Text 
            className={`text-primary font-psemibold text-ls ${textStyles}`}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export default CustomButton 
