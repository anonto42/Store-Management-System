import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { ToastAndroid } from "react-native";
import { EXPO_API_URL } from "@env";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signin = async ({username,password}) => {
    try {
      setLoading(true);
      if ( !username || !password ) {
        return(
          setLoading(false),
          ToastAndroid.showWithGravity(
            'Email and password field is required',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          )
        )
      }

      const { data } = await axios.post(`${EXPO_API_URL}/user/login`,{userName:username,password},{ withCredentials: true });

      try {
        await AsyncStorage.setItem("sms",data.data.token);
      } catch (error) {
        console.log(error)
      }
      setUser(cookie);
      setLoading(false)

      ToastAndroid.showWithGravity(
        data.data.message,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      )
      router.replace("/(tabs)")
      
      return;

    } catch (error) {
      console.log(error.response.data);
      setLoading(false);
      ToastAndroid.showWithGravity(
        `${error.response.data.message}`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      )
    }
  }

  const signout = async () => {
    try {
      await AsyncStorage.removeItem("sms")
      ToastAndroid.show("Logout successfull!")  
    } catch (error) {
      console.log(error);
      ToastAndroid.show("Problem on logout")
    }
  }
  
  const isLogin = async () => {
    try {
      setLoading(true);

      const token = await AsyncStorage.getItem("sms");
      if ( !token ) throw new Error();
      if (token) {
        setUser(token);
        ToastAndroid.showWithGravity(
          "Goted the user token!",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        )
      }
      setUser(token);
      router.replace("/(tabs)")
      setLoading(false);
      return;
    } catch (error) {
      console.log(error);
      ToastAndroid.showWithGravity(
        'Some problem on login!',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      ),
      setUser(false);
      setLoading(false);
      return
    }
  }

  useEffect(()=>{
    isLogin();
  },[user])

  const contextData = { user, signin, signout, loading, setLoading };

  return (
    <AuthContext.Provider value={contextData}>
      {
       children
      }
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
}

export const myContext = () => {
  return useContext(AuthContext);
}