import { EXPO_API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"

export type input = "sales" | "due" | "payment" | "product" | "user";

export const salesData = async (props: input) => {
    try {
        const token = await AsyncStorage.getItem('sms');
        
        const { data } = await axios.get(`${EXPO_API_URL}/user/admin/${props}`,{
            withCredentials: true,
            headers: {
                Cookie: `MyStore=${token}`,
            }
        });
        if (!data) {
            throw new Error(`Con't get the data of the ${props}`)
        }

        return data.data.data
        
    } catch (error) {
        console.log(error)
        throw new Error(`This error is from the data fatching`)    
    }
}