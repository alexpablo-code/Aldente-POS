import {Text, View, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import FormField from '../../components/FormField';

const AddProduct = () => {
    const [form, setForm] = useState({
        itemName:'',
        itemDescription:'',
        price: 0.00,
        menuCategories:'',
        itemCategory:''

    });

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
                <FormField
                    title='category'
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddProduct
