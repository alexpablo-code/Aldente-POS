import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Aldente POS</Text>
      <Link href="/profile" style={{color:'blue'}}>Got to Profile</Link>
    </View>
  );
}
