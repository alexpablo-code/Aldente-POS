import React, { useState } from 'react'
import {ScrollView, View, Text, Image, Alert} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router} from 'expo-router';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import {createUser} from '../../lib/appwrite';
import {useGlobalContext} from '../../context/GlobalProvider';

const SignUp = () => {
    const {setUser, setIsLoggedIn} = useGlobalContext();

    const [form, setForm] = useState({
        restaurantName:'',
        email: '',
        password: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = async () => {
        if(!form.restaurantName || !form.email || !form.password){
            Alert.alert('Error', 'Please fill in all required fields')
        }
        setIsSubmitting(true);
        
        try{
            const result = await createUser(form.email, form.password, form.restaurantName);

            setUser(result); //set it to global state...
            setIsLoggedIn(true);

            router.replace('/menu')

        }catch(error){
            Alert.alert('Error', error.message)
        }finally{
            setIsSubmitting(false);
        }
    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-full justify-center items-center h-full px-4 my-6'>
                    <Image 
                        resizeMode='contain'
                        className='w-[300px] h-[85px]'
                        source={images.aldentePosLogo}
                    />
                    <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>Sign Up to Aldente POS</Text>
                    <FormField
                        title="Restaurant Name"
                        value={form.restaurantName}
                        handleChangeText={(e) => setForm({... form, restaurantName:e})}
                        otherStyles="mt-10"
                    />
                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({... form, email:e})}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({... form, password:e})}
                        otherStyles="mt-7"
                    />

                    <CustomButton
                    title="Sign Up"
                    handlePress={submit}
                    containerStyles="mt-7"
                    isLoading={isSubmitting}
                    />

                    <View className='justify-center pt-5 flex-row gap-2'>
                        <Text className='text-lg text-gray-100 font-pregular'>
                            Have an account already?
                        </Text>
                        <Link href='/sign-in' className='text-lg font-psemibold text-[#FFD700]'>Sign In</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default SignUp
