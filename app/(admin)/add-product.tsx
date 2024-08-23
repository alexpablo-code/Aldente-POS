import {Text, View, ScrollView, FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import useAppwrite from '../../lib/useAppwrite';
import FormField from '../../components/FormField';
import { getRestaurantMenuCategories } from '../../lib/appwrite';
import { useGlobalContext } from '../../context/GlobalProvider';
import RNPickerSelect from 'react-native-picker-select';


const AddProduct = () => {
    const {data: menuCategories, refetch} = useAppwrite(() => getRestaurantMenuCategories(user.$id));
    const {isLoading, isLoggedIn, user} = useGlobalContext();

    const [form, setForm] = useState({
        itemName:'',
        itemDescription:'',
        price: 0.00,
        menuCategories:'',
        itemCategory:''

    });

    // Handle the change when a category is selected
    const handleCategoryChange = (categoryId, categoryName) => {
        setForm({
            ...form,
            menuCategories: categoryId,  // Set the category ID
            itemCategory: categoryName    // Set the category name
        });
    };
    

    console.log(menuCategories[0]);

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView className="px-4 my-6">
                <Text className="text-2xl text-white pb-4">
                    Add Product
                </Text>

                <FormField
                    title='Product Name'
                />
                <FormField
                    title='description'
                />
                <FormField
                    title='price'
                />
                <View className="w-[75%] rounded-lg py-5">
                    <RNPickerSelect
                        onValueChange={(value) => {
                            const selectedCategory = menuCategories.find(cat => cat.$id === value);
                            handleCategoryChange(value, selectedCategory?.categoryName);
                        }}
                        items={menuCategories.map(category => ({
                            label: category.categoryName,
                            value: category.$id
                        }))}
                        placeholder={{ label: "Select a category...", value: null }}
                        style={{
                            inputIOS: { padding: 16, backgroundColor: '#6B7280', borderRadius: 8, color: '#FFFFFF' }, // iOS-specific styles
                            inputAndroid: { padding: 16, backgroundColor: '#6B7280', borderRadius: 10, color: 'white' }, // Android-specific styles
                            placeholder: { color: '#FFFFFF' }, // Placeholder styles
                            iconContainer: { display:'none'}, // Icon container styles
                        }}
                        Icon={() => {
                            return (
                                <View style={{ top: 8, right: 8 }}>
                                    <Text style={{ color: '#FFFFFF' }}>▼</Text> 
                                </View>
                            );
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddProduct
