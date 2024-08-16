import React from 'react'
import {ScrollView, View, Text, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '@/components/FormField';

const SignIn = () => {
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-full justify-center h-full px-4 my-6'>
                    <Image 
                        resizeMode='contain'
                        className='w-[300px] h-[150px]'
                        source={images.aldentePosLogo}
                    />
                    <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>Log in to Aldente POS</Text>
                    <FormField/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default SignIn
