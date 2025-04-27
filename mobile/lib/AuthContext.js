import axios from "axios";
import { createContext, useContext, useState } from "react";
import { ToastAndroid } from "react-native";
import { EXPO_API_URL } from "@env";


export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(false);

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

      const { data } = await axios.post(`${EXPO_API_URL}/user/login`,{userName:"sohidul",password: "xxx"},{ withCredentials: true });
      console.log(data)

      AsyncStorage.setItem("sms",{ss:"userTOkenWillbe this "})
      
      return ToastAndroid.showWithGravity(
        'Login done successfully!',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      )

    } catch (error) {
      console.log(error.response.data);
      setLoading(false);
      ToastAndroid.showWithGravity(
        'Login Failed!',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      )
    }
  }
  const signout = () => {
    try {
      AsyncStorage.removeItem("sms")
      ToastAndroid.show("Logout successfull!")  
    } catch (error) {
      console.log(error);
      ToastAndroid.show("Problem on logout")
    }
  }

  const contextData = { session, user, signin, signout, loading, setLoading };

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