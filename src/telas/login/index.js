import React from "react";
import { StyleSheet, View, SafeAreaView, StatusBar, Text } from "react-native";
import Background from "../index/componentes/background";
import Logo from "../index/componentes/logo";
import Email from "./componentes/email";
import Senha from "./componentes/senha";
import BotaoEntrar from "./componentes/botaoEntrar";


export default function Login() {
    return (
        <SafeAreaView style={estilos.conteiner}>
            <StatusBar />
            <Background />
            <Logo />
            <View style={estilos.conteudo}>
                <Email />
                <Senha />
                <Text style={estilos.esqueci}>Esqueceu a senha?</Text>
                <BotaoEntrar />
            </View>
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    conteiner: {
        height: "100%",
    },
    conteudo: {
        flex: 1,
        marginTop: "10%",
        alignItems: "center",
        gap: 15,
    },
    esqueci: {
        color: '#4F4F4F',
        marginLeft: "45%",
    },
});