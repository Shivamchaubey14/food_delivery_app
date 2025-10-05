import { View, Text, TouchableOpacity, Image } from 'react-native'
import {images} from "@/constants"
import React from 'react'

const CartButton = () => {
    // For testing purposes i am using the hardcoded value. Such as 5
    const totalItems = 5;
  return (
    <TouchableOpacity className="cart-btn" onPress={() => {{}}}>
        <Image source={images.bag} className="size-5" resizeMode="contain" />

            {totalItems > 0 && (
                <View className="cart-badge">
                    <Text className="small-bold text-white">{totalItems}</Text>
                </View>
            )}
    </TouchableOpacity>
  )
}

export default CartButton