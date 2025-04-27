import { StyleSheet } from "react-native";


export const styleSheet = StyleSheet.create({
    main_bg:{
      flex: 1,
      backgroundColor: "#353535"
    },
    sview:{
      flex: 1,
      width: "100%",
    },
    auth_container:{
      backgroundColor:"",
      padding: 30,
      marginTop: "60%"
    },
    auth_header:{
      color: "white",
      fontSize: 20,
      fontWeight: 500,
      marginBottom: 5
    },
    auth_inp:{
      backgroundColor: "gray",
      fontSize: 15,
      fontWeight: 400,
      paddingHorizontal: 10,
      borderRadius: 5,
      marginBottom: 15,
    },
    auth_button:{
      width: "100%",
      height: 43,
      backgroundColor: "#8fffdb",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      marginTop: 10
    },
    auth_button_text:{
      color:"#000c24",
      fontSize: 20,
      fontWeight: 600
    },
    Button:{
        width: 100,
        height: 80,
        backgroundColor: "blue",
        borderRadius: 100
    }
  })