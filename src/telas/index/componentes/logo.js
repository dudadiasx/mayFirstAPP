import React from "react";
import { StyleSheet, Image, View, Text, Dimensions } from "react-native";
import img1 from "../../../../assets/img1.png";
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const width = Dimensions.get("screen").width;

export default function Logo() {

    const [fontsLoaded] = useFonts({
        "Cherry": require("../../../../assets/fonts/CherryBombOne-Regular.ttf"),
    });

    useEffect(() => {
        async function prepare() {
          await SplashScreen.preventAutoHideAsync();
        }
        prepare();
      }, []);
    
      if (!fontsLoaded) {
        return undefined;
      } else {
        SplashScreen.hideAsync();
      }

    return (
        <View style={estilos.container}>
            <Image source={img1} style={estilos.imagem}/>
            <Text style={estilos.texto}>DOEFácil</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    imagem: {
        marginTop: "30%",
        width: "50%",
        height: (512 / 512) * width * 0.5,
    },
    texto: {
        fontFamily: "Cherry",
        fontSize: 40,
        color: "#7dbcdc",
    },
})