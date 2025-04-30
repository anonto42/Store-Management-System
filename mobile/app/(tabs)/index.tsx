import { cardData } from "@/components/Card";
import Slider from "@/components/Slider";
import { styleSheet } from "@/constants/styling";
import { salesData } from "@/lib/dataFetch";
import { useLayoutEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { DueInterface, PaymentInterface, SalesInterface } from "@/lib/CustomTypes";

export default function Index() {
  const [sales, setSales] = useState<SalesInterface[]>([]);
  const [due, setDue] = useState<DueInterface[]>([]);
  const [payment, setPayment] = useState<PaymentInterface[]>([]);
  const [refresh, setRefresh] = useState(0);
  
  useLayoutEffect(()=>{
    ( async function(){
      try {
        const sales = await salesData("sales");
        const fDue = await salesData("due");
        const fPayments = await salesData("payment");
        
        setDue(fDue);
        setPayment(fPayments);
        setSales(sales);
      } catch (error) {
        console.log(error)
      }
    })()
  },[refresh]);

  const organizedData:cardData[] = sales?.map( element => ({
    item_id: element._id as string,
    amount: element.amount,
    quintity: element.quantity,
    paid: element.paid,
    who: element.buyer
  }))

  const organizeDuedData:cardData[] = due?.map( e => (
    {
      item_id: e._id as string,
      amount: Number(e.productPieces),
      quintity: 1,
      paid: e.isPayed,
      who: e.user
    }
  ))

  const organizePaymentData:cardData[] = payment?.map( e => (
    {
      item_id: e._id as string,
      amount: e.amount,
      quintity: 1,
      paid: true,
      who: e.user
    }
  ))
  
  return (
    <View style={styleSheet.main_bg}>
      <ScrollView 
        style={styleSheet.sview} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styleSheet.scrollView_style}
      >
        {/* Slider for the Sales */}
        <Slider title="Sales" data={organizedData} />
        {/* Due slider */}
        <Slider title="Dues" data={organizeDuedData} />
        {/* Due slider */}
        <Slider title="Payments" data={organizePaymentData} />
      </ScrollView>
    </View>
  );
}