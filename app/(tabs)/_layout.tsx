import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Slot } from 'expo-router'

export default function _Layout() {
    // For now hardcoded, just for testing layout
    const isAuthenticated = false
    if(!isAuthenticated) return <Redirect href={"/sign-in"}/>
  return <Slot/>
}