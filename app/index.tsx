import {ScrollView, View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link, Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '@/components/CustomButton';
import {useGlobalContext} from '../context/GlobalProvider';

export default function HomeScreen() {
  const {isLoading, isLoggedIn} = useGlobalContext();

  if(!isLoading & isLoggedIn) return <Redirect  href='/menu'/>


  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{}}>
        <View className='w-full justify-center items-center min-h-[85vh] px-4'>
          <Image
            source={images.aldentePosLogo}
            className='w-[300px] h-[80px]'
            resizeMode='contain'
          />
          <Image
          source={images.posCard}
          className='max-w-[380px] w-full h-[300px]'
          resizeMode='contain'
          />
          <View>
            <Text className='text-3xl text-white font-bold text-center'>Discover Endless Possiblities with 
              <Text className='text-[#FFD700]'> Aldente POS</Text>
            </Text>
            <Image
            source={images.path}
            className='w-[180px] h-[15px] absolute -bottom-3 -right-2'
            />
          </View>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles='w-[50%] mt-8'
          />

        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  );
}
