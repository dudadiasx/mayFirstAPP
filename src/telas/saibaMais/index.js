import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import carrinhoBB from "../../../assets/carrinhoBB.webp";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("screen").width;
export default function SaibaMais() {
    const navigation = useNavigation();
    return ( 
        <SafeAreaView style={estilos.container}>
            <View style={estilos.conteudo}>
                <Ionicons name="arrow-back" size={40} color="black" onPress={() => navigation.navigate('TimeLineStack')}/>
                <Text style={estilos.textoTitulo}>Carrinho de bebê</Text>
                <Image style={estilos.image} source={carrinhoBB} />
                <Text style={estilos.textoDescricao}>Carrinho de bebê usado compacto, perfeito para pais que buscam praticidade. Design dobrável e leve para fácil transporte e armazenamento. Seguro, com sistema de travas e rodas estáveis. Conforto garantido com assento espaçoso e ajuste de reclinação. Aproveite momentos especiais com seu bebê!</Text>
                <Text style={estilos.textoPreco}>$1000</Text>
                <TouchableOpacity style={estilos.button} onPress={() => navigation.navigate('SaibaMais')}>
                    <Text style={estilos.textButton}>COMPRE</Text>
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
    image: {
        width: "90%", 
        height: (1031 / 1040) * width * 0.8,
        alignSelf: "center",
    },
    textoTitulo: {
        fontWeight: "bold",
        fontSize: 24,
        marginBottom: 10,
    },
    textoDescricao: {
        textAlign: "justify",
    },
    textoPreco: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
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
    },
});
