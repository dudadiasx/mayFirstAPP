import React from "react";
import { StyleSheet } from "react-native";
import  { LinearGradient }  from 'expo-linear-gradient';

export default function Background() {
    return (
        <LinearGradient
                colors={['#fff9c7', '#ffaef5' ]}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={estilos.linearGradient}>
        </LinearGradient>
    );
}

const estilos = StyleSheet.create({ 
    linearGradient: {
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    },
});