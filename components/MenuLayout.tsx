import React from 'react'
import {View, Text, FlatList} from 'react-native'

const MenuLayout = ({categories}) => {
    return (
        <FlatList
        data={categories}
        keyExtractor={(item) => item.$id}
        renderItem={({item}) => (
            <Text className='text-3xl text-white'>{item.id}</Text>
        )}
        horizontal
        />
    );
}

export default MenuLayout
