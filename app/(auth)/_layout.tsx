import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
  ImageBackground,
  Image
} from 'react-native';
import {images} from "@/constants"
import { SafeAreaView } from 'react-native-safe-area-context';
import { Slot } from 'expo-router';

export default function _Layout() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView
        className="bg-white h-full"
        keyboardShouldPersistTaps="handled"
      >
        <View
          className="w-full relative"
          style={{ height: Dimensions.get('screen').height / 2.25 }}
        >
            <ImageBackground src='images.loginGraphic' className='size-full rounded-b-lg' resizeMode='stretch'/>
            <Image source={images.logo} className="self-center size-48 absolute -bottom-16 z-10"/>
        </View>
      </ScrollView>
      <Slot />
    </KeyboardAvoidingView>
  );
}
