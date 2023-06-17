import React from "react";
import { StyleSheet, View, SafeAreaView, StatusBar, Text, TextInput, Image, TouchableOpacity, Dimensions  } from "react-native";
import carrinhoBB from "../../../../assets/carrinhoBB.webp";

const width = Dimensions.get("screen").width;
export default function Card() {
    return (
        <View style={estilos.conteiner}>
            <Image style={estilos.image} source={carrinhoBB} />
            <View style={estilos.conteudoCard}>
                <Text style={estilos.tituloCard}>Carrinho de bebê</Text>
                <Text>Avenida das Flores, 123,{"\n"}
                    Jardim Primavera{"\n"}
                    Cidade: São Paulo{"\n"}
                    Estado: São Paulo{"\n"}
                    CEP: 01234-567
                </Text>
                <TouchableOpacity style={estilos.button} onPress={() => {}}>
                    <Text style={estilos.textButton}>VEJA MAIS</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    conteiner: {
        marginTop: 30,
        marginHorizontal: 15,
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderRadius: 30,
        padding: 10,
        elevation: 3,
    },
    image: {
        width: "50%", 
        height: (1031 / 1040) * width * 0.5,
    },
    conteudoCard: {
        marginLeft: 10,
        gap: 10,
    },
    tituloCard: {
        fontSize: 20,
        color: "#4F4F4F",
    },
    button: {
        backgroundColor: "#FFB2F2",
        alignItems: "center",
        paddingVertical: 10,
        borderRadius: 12,
    },
    textButton: {
        color: "#4F4F4F",
    },
});
