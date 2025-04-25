import { View, ActivityIndicator } from 'react-native'
import React from 'react'

const Loader = ({size = "small",color}:{ size: "small"|"large", color: string}) => {
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
        <ActivityIndicator size={size} color={color} />
    </View>
  )
}

export default Loader