import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Dimensions, Image, TouchableOpacity, TextInput } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import carrinhoBB from "../../../assets/carrinhoBB.webp";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("screen").width;
export default function Profile() {
    const navigation = useNavigation();
    return ( 
        <SafeAreaView style={estilos.container}>
            <View style={estilos.conteudo}>
                <View style={{alignItems: 'center'}}>    
                    <Ionicons name="person" size={100} color="black" onPress={() => navigation.navigate('TimeLineStack')}/>
                </View>
                <Text style={estilos.textoTitulo}>Nome:</Text>
                <TextInput style={{borderRadius: 12, borderWidth: 1, padding: 10, height:'6%',}}/>
                <Text style={estilos.textoTitulo}>Endereço:</Text>
                <TextInput style={{borderRadius: 12, borderWidth: 1, padding: 10, height:'20%',}}/>
                <Text style={estilos.textoTitulo}>Moedas:</Text>
                <Text style={estilos.textoTitulo}>$999999</Text>
                <TouchableOpacity style={estilos.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={estilos.textButton}>SALVAR</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#FFF5AF",
    },
    conteudo: {
        backgroundColor: "#fff",
        borderRadius: 15,
        elevation: 3,
        height: "93%",
        margin: "7%",
        padding: "3%",
        gap: 10,
    }, 
    textoTitulo: {
        fontWeight: "bold",
        fontSize: 19,
    },
    button: {
        backgroundColor: "#FFB2F2",
        alignItems: "center",
        paddingVertical: 10,
        borderRadius: 12,
        marginTop: "5%",
    },
    textButton: {
        color: "#4F4F4F",
        fontWeight: 'bold',
    },
});
