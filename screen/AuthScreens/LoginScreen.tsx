import { Button, Text, TextInput, View } from "react-native";

import ScreenStyle from "../../styles/LoginScreen.scss";

import NavigationProps from "../../types/NavigationProps";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

import { Field, Form, Formik } from "formik";
import { CommonActions, useNavigation } from "@react-navigation/native";

function LoginScreen(props: NavigationProps) {
    const navigation = useNavigation();

    return (
        <View style={ScreenStyle.container}>
            <StatusBar hidden={true} />
            <View>
                <Text style={ScreenStyle.appTitle}>Face-Market</Text>
            </View>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => {
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: "PrincipalScreen" }],
                        })
                    );
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View style={ScreenStyle.formContainer}>
                        <TextInput
                            style={ScreenStyle.input}
                            placeholder="Email Address"
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                            value={values.email}
                            autoCapitalize={'none'}
                            keyboardType="email-address"
                        />
                        <View style={ScreenStyle.input}>
                            <TextInput
                                autoCapitalize={'none'}
                                secureTextEntry={true}
                                placeholder="Password"
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                                value={values.password}
                            />
                        </View>
                        <Button onPress={() => handleSubmit()} title="Submit" />
                    </View>
                )}
            </Formik>
        </View>
    );
}

export default LoginScreen;
