import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styleSheet } from '@/constants/styling';
import * as Clipboard from 'expo-clipboard';
import { ToastAndroid } from 'react-native';

export interface cardData {
  item_id: string;
  who?: string;
  quintity: number;
  amount: number;
  paid: boolean;
}

const Info_Card = ({ data }: { data: cardData }) => {

  const copyItemId = async () => {
    await Clipboard.setStringAsync(data.item_id);
    ToastAndroid.show('Item ID copied!', ToastAndroid.SHORT);
  };

  return (
    <TouchableOpacity onPress={copyItemId} activeOpacity={0.8}>
      <View style={styleSheet.card_box}>
        <View style={styleSheet.cart_buyer_name}>
          <Text style={styleSheet.cart_buyer_name_bold}>
            Buyer: 
          </Text>
          <Text style={styleSheet.cart_buyer_name_inner}>
            {data.who ? data.who : "Not Found"}
          </Text>
        </View>
        <View style={styleSheet.cart_buyer_name}>
          <Text style={styleSheet.cart_buyer_name_bold}>
            Quantity: 
          </Text>
          <Text style={styleSheet.cart_buyer_name_inner}>
            {data.quintity ? data.quintity : 0} pisces
          </Text>
        </View>
        <View style={styleSheet.cart_buyer_name}>
          <Text style={styleSheet.cart_buyer_name_bold}>
            Amount: 
          </Text>
          <Text style={styleSheet.cart_buyer_name_inner}>
            {data.amount ? data.amount : "0000"} taka
          </Text>
        </View>
        <View style={styleSheet.cart_buyer_name}>
          <Text style={styleSheet.cart_buyer_name_bold}>
            Bill: 
          </Text>
          <Text style={styleSheet.cart_buyer_name_inner}>
            {data.paid ? "Paid" : "Due"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Info_Card;
