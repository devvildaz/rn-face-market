import { Image, View } from "react-native";
import logoImage from "../../assets/facep.png";
import ScreenStyle from "../../styles/BoostrapScreen.scss";
import { StatusBar } from "expo-status-bar";
import React from "react";
import NavigationProps from "../../types/NavigationProps";
import { CommonActions, useNavigation } from "@react-navigation/native";
import {
    useFonts,
    DancingScript_400Regular,
    DancingScript_500Medium,
    DancingScript_600SemiBold,
    DancingScript_700Bold,
} from "@expo-google-fonts/dancing-script";

function BoostrapScreen(props: NavigationProps) {
    const navigation = useNavigation();
    
    let [fontsLoaded] = useFonts({
        DancingScript_400Regular,
        DancingScript_500Medium,
        DancingScript_600SemiBold,
        DancingScript_700Bold,
    });

    React.useEffect(() => {
        if(fontsLoaded == true) {
            props.navigation.navigate("LoginScreen");
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: "LoginScreen" }],
                })
            );
        }
    }, [fontsLoaded]);


    return (
        <View style={ScreenStyle.container}>
            <StatusBar style="auto" hidden={true} />
            <Image style={ScreenStyle.logoImg} source={logoImage} />
        </View>
    );
}

export default BoostrapScreen;
