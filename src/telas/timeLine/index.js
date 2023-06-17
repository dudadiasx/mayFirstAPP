import React from "react";
import { StyleSheet, View, SafeAreaView, StatusBar, Text, TextInput } from "react-native";
import SearchBar from "./componentes/searchBar";
import Card from "./componentes/card";
export default function TimeLine() {
    return (
        <SafeAreaView >
            <StatusBar />
            <View style={estilos.conteiner}>
                <SearchBar />
                <Card />
                <Card />
                <Card />
            </View>
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    conteiner: {
        height: "100%",
        backgroundColor: "#FFF5AF",
    },
});