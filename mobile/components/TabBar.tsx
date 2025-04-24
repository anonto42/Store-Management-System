import { View, Text } from 'react-native'
import React from 'react'
import { PlatformPressable } from '@react-navigation/elements';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import {BottomTabBarProps} from "@react-navigation/bottom-tabs";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';

const TabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {

    const { buildHref } = useLinkBuilder();

    const colors = {
      secondary: "#333333",
      primary: "#006b3d"
    }
    
    const icons:any = {
      index: ( props: any )=> <FontAwesome name="home" size={26} {...props} />,
      info: ( props: any )=> <Entypo name="info-with-circle" size={26} {...props} />,      
      profile: ( props: any )=> <Ionicons name="settings" size={26} {...props} />
    }

  return (
    <View 
      style={{ 
          display: "flex",
          flexDirection: 'row',
          position: "absolute",
          justifyContent: "center",
          backgroundColor: "#d9dadb",
          bottom: 25,
          marginHorizontal: 30,
          borderRadius: 20,
          borderCurve: "continuous",
          shadowColor: "black",
          shadowOffset: { width: 0, height: 10},
          shadowRadius: 10,
          shadowOpacity: 0.1,
          overflow: "hidden"
        }}
       >
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key, 
          });
        };

        return (
          <PlatformPressable
            href={buildHref(route.name, route.params)}
            key={route.name}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className='flex-1 justify-center items-center py-20'
            style={{paddingVertical: 10 }}
          >
            {
              icons[route.name]({
                color: isFocused ? colors.primary : colors.secondary
              })
            }
            <Text style={{ color: isFocused ? colors.primary : colors.secondary }}>
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  )
}

export default TabBar