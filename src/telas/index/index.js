import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import Background from "./componentes/background";
import Logo from "./componentes/logo";
import BotaoEntrar from "./componentes/botaoEntrar";
import BotaoCriarConta from "./componentes/botaoCriarConta";
export default function Index() {
    return (
        <SafeAreaView style={estilos.conteiner}>
            <StatusBar />
            <Background />
            <Logo />
            <View style={estilos.conteudo}>
                <BotaoEntrar />
                <BotaoCriarConta />
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
        marginTop: "50%",
        alignItems: "center",
        gap: 15,
    },
});