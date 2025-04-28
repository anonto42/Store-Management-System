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
    scrollView_style:{
        minHeight: "100%",
        paddingBottom: 10,
        gap: 40
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
    },
    slider_bg:{
      height: "auto",
      width: "100%",
      backgroundColor: "rgba(199, 211, 212, 0.2);",
      paddingTop: 15,
      paddingHorizontal: 10
    },
    slider_heading:{
      color: "white",
      fontSize: 25,
      borderBottomWidth: 2,
      borderStyle: "dotted",
      borderColor: "#868787",
      paddingBottom: 10
    },
    card_box:{
      width: 150,
      height: 100,
      backgroundColor: "white",
      marginVertical: 10,
      marginRight: 10,
      flex: 1,
      padding: 5,
      borderRadius: 5,
      display: "flex",
      alignItems:"flex-start",
      gap: 1.5
    },
    cart_buyer_name:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    cart_buyer_name_bold:{
      fontWeight: 600,
      marginRight: 5,
      fontSize: 15
    },
    cart_buyer_name_inner:{
      fontStyle: "italic"
    },
    add_update_box_wraper:{
      width: "100%",
      minHeight: 400,
      padding: 15
    },
    add_update_box:{
      backgroundColor: "#ffff",
      width: "100%",
      minHeight: 100,
      borderRadius: 10,
      overflow: "hidden"
    },
    add_update_box_text:{
      fontSize: 20,
      fontWeight: 500,
      borderBottomWidth: 1,
      padding: 10,
      borderBottomColor: "#969696"
    },
    add_update_box_underline:{
      borderBottomWidth:1,
      borderBottomColor: "#969696"
    },
    add_update_box_details:{
      padding: 10
    },
    add_update_box_text_details:{
      fontSize:20,
      fontWeight: 500,
      // marginBottom:10
    },
    add_update_box_text_inp_box:{
      marginTop: 10,
      gap: 10
    },
    add_update_box_text_inp:{
      fontWeight: 500,
      borderColor: "#969696",
      borderWidth: 1,
      paddingHorizontal: 10,
      borderRadius: 10
    },
    add_update_box_button:{
      width: "100%",
      height: 40,
      backgroundColor: "#52A8FF"
    },
    add_update_box_button_text:{
      margin:"auto",
      fontSize: 18,
      fontWeight: "600",
      color:"#ffff"
    }
  })