import TabBar from "@/components/TabBar";
import { useAuth } from "@/lib/AuthContext";
import { Redirect, Tabs } from "expo-router";
 
export default () => {
    const { user } = useAuth();
    return user ? (
        <Tabs tabBar={ props => <TabBar {...props} />}>
            <Tabs.Screen name="index" options={{ title:"Home", headerShown: false }} />
            <Tabs.Screen name="info" options={{ title:"Info", headerShown: false }} />
            <Tabs.Screen name="profile" options={{ title:"Settings",headerShown: false }} />
        </Tabs>
    ): <Redirect href={"/auth"} />
}