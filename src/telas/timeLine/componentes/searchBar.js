import React from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import searchIcon from "../../../../assets/icons/searchIcon.png";

export default function SearchBar() {
    return (
        <View style={estilos.conteiner}>
            <TextInput style={estilos.input} placeholder="Pesquisar" />
            <Image style={estilos.iconSearch} source={searchIcon} />
        </View>
    );
}

const estilos = StyleSheet.create({
    conteiner: {
        marginTop: 20,
        marginHorizontal: 10,
        position: "relative",
    },
    input: {
        backgroundColor: "#FFF",
        paddingVertical: 10,
        paddingLeft: 20,
        borderRadius: 30,
        elevation: 3,
    },
    iconSearch: {
        top: 6,
        right: 10,
        position: "absolute",
        width: "10%",
        height: "70%",
    },
});