import { action } from "@/app/(tabs)/info"
import { input } from "./dataFetch";
import React, { SetStateAction } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosError } from "axios";
import { EXPO_API_URL } from "@env";
import { ToastAndroid } from "react-native";


interface sales {
    quantity: number;//
    amount: number;//
    buyer: string;//
    paid: boolean;//
    product: string;//
}

interface payment {
    amount: number;//
    paymentType: string;//
    payBy: string;//
    user: string;//
}

interface product {
    title: string;
    quantity: number;
    image: string;
}

interface due {
    user: string;//
    productID: string;//
    productQuantity: number;//
    productPieces: string;//
    isPayed: boolean;//
}

interface user {
    fullName: string;
    userName: string;
    address: string;
    nid: string;
    phone: string;
    profileImage: string;
}

interface requirdThinks {
    action: action;
    modelname: input;
    dataForCreate?: sales | payment | product | due | user;
    dataForUpdate?: {};
    setLoading: React.Dispatch<SetStateAction<boolean>>;
    item_ID?: string;
}

export const createData = async ({
    action,
    modelname,
    setLoading,
    dataForCreate,
    dataForUpdate,
    item_ID
}: requirdThinks) => { 
    try {
        setLoading(true);
        
        const token = await AsyncStorage.getItem('sms');
        
        if (action === "add") {
        
            const { data } = await axios.post(`${EXPO_API_URL}/user/admin/${modelname}`,
                {
                    dataForCreateDoc: dataForCreate
                },
                {
                withCredentials: true,
                headers: {
                    Cookie: `MyStore=${token}`,
                }
            });

            console.log(data);

            ToastAndroid.showWithGravity(
                data.data.message,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            )
            setLoading(false);
            return data.data

        }else{

            const { data } = await axios.patch(`${EXPO_API_URL}/user/admin/${modelname}?id=${item_ID}`,
                {
                    dataForCreateDoc: dataForCreate
                },
                {
                withCredentials: true,
                headers: {
                    Cookie: `MyStore=${token}`,
                }
            });

            console.log(data);

            ToastAndroid.showWithGravity(
                data.data.message,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            )
            setLoading(false);
            return data.data

        }
    } catch (error) {
        console.log(error)
        if (error instanceof AxiosError) {
            ToastAndroid.showWithGravity(
                `${error?.response?.data.message}`,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            )
        }
        setLoading(false);
        return
    }
}