import TabBar from "@/components/TabBar";
import { Tabs } from "expo-router";
 
export default () => {
    return(
        <Tabs tabBar={ props => <TabBar {...props} />}>
            <Tabs.Screen name="index" options={{ title:"Home", headerShown: false }} />
            <Tabs.Screen name="info" options={{ title:"Info", headerShown: false }} />
            <Tabs.Screen name="profile" options={{ title:"Settings",headerShown: false }} />
        </Tabs>
    )
}