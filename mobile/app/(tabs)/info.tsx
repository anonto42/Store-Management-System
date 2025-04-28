import { View, ScrollView, StatusBar, Text, TextInput, ToastAndroid, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import { styleSheet } from '@/constants/styling'
import RNPickerSelect from 'react-native-picker-select';
import { input } from '@/lib/dataFetch';
import { createData } from '@/lib/intrigace_with_api';
import Loader from '@/components/Loader';
import UpdatedComponent from '@/components/UpdatedComponent';

export type action = "add" | "update";

const Actions_Dudet = () => {
  const [action, setAction] = useState<action>();
  const [modelName, setModelName] = useState<input>();
  const [loading, setLoading] = useState<boolean>(false);

  const [uniq, setUniq] = useState<string>("");

  const [amount, setAmount] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [buyer, setBuyer] = useState<string>("");
  const [paid, setPaid] = useState<string>("");
  const [paymentType, setPayment] = useState<string>("");
  const [payBy, setPayBy] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  
  const [image, setImage] = useState<string>();
  
  const [userFullName, setUserFullName] = useState<string>("");
  const [userName, setUsername] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [nid, setNid] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const fields = {
    sales:["quantity","amount","buyer","paid","Product Title"],
    payment:["amount","payment type","pay by","user name"],
    product:["product title","quantity","image"],
    due:["user name","product title","amount","payed"],
    user:["full name", "user name", "address", "nid", "phone", "profile image"]
  }

  const createHandaler = async () => {
    try {
      setLoading(true);
      let CreateData;
      
      if (modelName === "sales") {
        CreateData = {
          quantity: Number(quantity),
          amount: Number(amount),
          buyer: buyer!,
          paid: Boolean(paid),
          product: title!
        }
      }else if (modelName === "payment") {
        CreateData = {
          amount: Number(amount),
          payBy: payBy!,
          paymentType: paymentType!,
          user: buyer!
        }
      }else if (modelName === "product") {
        CreateData = {
          title: title!,
          quantity: Number(quantity),
          image: image!
        }
      }else if (modelName === "due") {
        CreateData = {
          user: buyer!,
          productID: title!,
          productQuantity: Number(quantity),
          productPieces: amount!,
          isPayed: Boolean(paid)
        }
      }else if (modelName === "user") {
        CreateData = {
          fullName: userFullName!,
          userName: userName!,
          address: address!,
          nid: nid!,
          phone: phone!,
          profileImage: image!
      }
      }

      if ( !CreateData ) {
        return (
          setLoading(false)
        )
      }
      
      const dataCreate = await createData(
        {
        action: action as action,
        modelname: modelName as input,
        setLoading,
        dataForCreate: action === "add" ? CreateData : undefined,
        dataForUpdate: action === "update" ? {} : undefined,
        item_ID: action === "update" ? "" : undefined,
      }
      )
      console.log(dataCreate);
      setLoading(false);

    } catch (error) {
      console.log(error)
      setLoading(false);
      ToastAndroid.showWithGravity(
        "Problem on handaler function",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      )
    }
  }

  return (
    <View style={styleSheet.main_bg}>
      <StatusBar hidden={false} />
      { loading && <Loader /> }
      <ScrollView
        style={styleSheet.sview}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styleSheet.scrollView_style}
      >
        <View style={styleSheet.add_update_box_wraper}>
          <View style={styleSheet.add_update_box}>
            <Text style={styleSheet.add_update_box_text}>Add or Updated</Text>

            <RNPickerSelect
              onValueChange={(value) => setModelName(value)}
              items={[
                { label: 'Sale', value: 'sales' },
                { label: 'Due', value: 'due' },
                { label: 'Payment', value: 'payment' },                
                { label: 'Product', value: 'product' },
                { label: 'Castomer', value: 'user' },
              ]}
              placeholder={{ label: "Select a name for do acction...", value: null }}
            />
            <View style={styleSheet.add_update_box_underline} />
            <RNPickerSelect
              onValueChange={(value) => setAction(value)}
              items={[
                { label: `Add a new ${modelName} record`, value: 'add' },
                { label: `Update existing ${modelName} record`, value: 'update' },
              ]}
              placeholder={{ label: "Select an action...", value: null }}
            />
            <View style={styleSheet.add_update_box_underline} />

            <View style={styleSheet.add_update_box_details}>
              
              <Text style={styleSheet.add_update_box_text_details}>Details :</Text>

              <View style={styleSheet.add_update_box_text_inp_box}>

                { 
                  action === "add" ? (
                    modelName === "sales" ? fields.sales.map( e => {
                      return (
                        <>
                          <TextInput 
                            style={styleSheet.add_update_box_text_inp} 
                            placeholder={`Inter ${e}...`}
                            onChangeText={
                              e === "quantity"? setQuantity :
                              e === "amount"? setAmount :
                              e === "buyer"? setBuyer :
                              e === "paid"? setPaid :
                              e === "Product Title"? setTitle : setUniq
                            }
                          />
                        </>
                      )
                    }) : 
                    modelName === "payment" ? fields.payment.map( e => {
                      return (
                        <>
                          <TextInput 
                            style={styleSheet.add_update_box_text_inp} 
                            placeholder={`Inter ${e}...`}
                            onChangeText={
                              e === "amount"? setAmount :
                              e === "Product Title"? setTitle : 
                              e === "payment type"? setPayment : 
                              e === "user name"? setBuyer : 
                              e === "pay by"? setPayBy : setPaid
                            }
                          />
                        </>
                      )
                    }) : 
                    modelName === "due" ? fields.due.map( e => {
                      return (
                        <>
                          <TextInput 
                            style={styleSheet.add_update_box_text_inp} 
                            placeholder={`Inter ${e}...`}
                            onChangeText={
                              e === "amount"? setAmount :
                              e === "payed"? setPaid : 
                              e === "product title"? setTitle : 
                              e === "user name"? setBuyer : setUniq
                            }
                          />
                        </>
                      )
                    }) : 
                    modelName === "product" ? fields.product.map( e => {
                      return (
                        <>
                          <TextInput 
                            style={styleSheet.add_update_box_text_inp} 
                            placeholder={`Inter ${e}...`}
                            onChangeText={
                              e === "product title"? setTitle : 
                              e === "quantity"? setQuantity : 
                              e === "user name"? setBuyer : setUniq
                            }
                          />
                        </>
                      )
                    }) : 
                    modelName === "user" ? fields.user.map( e => {
                      return (
                        <>
                          <TextInput 
                            style={styleSheet.add_update_box_text_inp} 
                            placeholder={`Inter ${e}...`}
                            onChangeText={
                              e === "full name"? setUserFullName :
                              e === "user name"? setUsername : 
                              e === "address"? setAddress : 
                              e === "nid"? setNid : 
                              e === "phone"? setPhone : 
                              e === "profile image"? setImage : setPaid
                            }
                          />
                        </>
                      )
                    }) : ""
                  ) : 
                  action === "update"? <UpdatedComponent /> : ""
                }

              </View>

            </View>

            <Pressable onPress={createHandaler} style={styleSheet.add_update_box_button} >
                <Text style={styleSheet.add_update_box_button_text}>Create</Text>
            </Pressable> 

          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Actions_Dudet