import Loader from "@/components/Loader";
import { createContext, useContext, useState } from "react";
import { ToastAndroid } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(false);

  const signin = ({email,password}) => {
    try {
      
      ToastAndroid.show("User login successfully")
    } catch (error) {
      console.log(error);
      ToastAndroid.show("Problem on login")
    }
  }
  const signout = () => {
    try {
      
      ToastAndroid.show("Logout successfull!")  
    } catch (error) {
      console.log(error);
      ToastAndroid.show("Problem on logout")
    }
  }

  const contextData = { session, user, signin, signout };

  return (
    <AuthContext.Provider value={contextData}>
      {
        loading ? (
          <SafeAreaView>
            <Loader size="large"/>
          </SafeAreaView>
        ): children
      }
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
}