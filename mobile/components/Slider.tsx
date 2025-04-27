import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Card, { cardData } from './Card';
import { styleSheet } from '@/constants/styling';

const Slider = ({title, data}:{ title: string, data: cardData[] }) => {

  return (
    <View style={styleSheet.slider_bg}>
      <Text style={styleSheet.slider_heading} >{title.toUpperCase()}</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        {
          data.map( ( element, index ) => {
            return (
              <Card data={element} key={index} />
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default Slider