import { View, ActivityIndicator } from 'react-native'
import React from 'react'

const Loader = () => {
  return (
    <View
        style={
          {
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(156, 156, 156, 0.39)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 50
          }
        }
    >
        <ActivityIndicator color="#00d98d" size='large' />
    </View>
  )
}

export default Loader