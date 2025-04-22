import React from 'react'
import { Tabs } from 'expo-router'
import { Image, ImageBackground, Text } from 'react-native'
import { icon } from '@/constants/icons'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen 
            name="index"
            options={{
                title:"Home",
                headerShown: false,
            }}
        />
        <Tabs.Screen 
            name="profile"
            options={{
                title:"Profile",
                headerShown: false,
            }}
        />
    </Tabs>
  )
}

export default _layout