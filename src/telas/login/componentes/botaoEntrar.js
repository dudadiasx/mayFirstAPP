import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";



export default function BotaoEntrar() {
    const navigation = useNavigation();
    return (
        <View style={estilos.container}>
            <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('TimeLineStack')}>
                <Text style={estilos.textoBotao}>Entrar</Text>
            </ TouchableOpacity>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        width: "80%",     
    },
    botao: {
        backgroundColor: "#FFF9C7",
        paddingVertical: 10,
        borderRadius: 12,
        elevation: 3,
    },
    textoBotao: {
        fontSize: 20,
        color: "#4F4F4F",
        fontWeight: "bold",
        textAlign: "center",
    },
});  