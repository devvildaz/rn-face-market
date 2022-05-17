import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import NavigationProps from "../../types/NavigationProps";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBar } from "react-navigation-tabs";

const BottomBar = createBottomTabNavigator();

function PrincipalScreen(props: NavigationProps) {
    return (
        <NavigationContainer>
            <BottomBar.Navigator 
                tabBar={(props) => (
                    <View>
                        <BottomTabBar {...props}/>
                    </View>
                )}
                tabBarOptions={{
                    showIcon: true,
                }}
            >

            </BottomBar.Navigator>
        </NavigationContainer>
    )
}

export default PrincipalScreen;