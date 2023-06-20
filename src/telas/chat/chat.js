import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Dimensions, Image, TouchableOpacity, TextInput } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import carrinhoBB from "../../../assets/carrinhoBB.webp";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("screen").width;
export default function ChatUserr() {
    const navigation = useNavigation();
    return ( 
        <SafeAreaView style={estilos.container}>
            <View style={estilos.conteudo}>
                <View style={{alignItems: 'center', flexDirection: 'row'}}>    
                    <Ionicons name="person" size={40} color="black" onPress={() => navigation.navigate('TimeLineStack')}/>
                    <Text style={estilos.textoUser}>User</Text>
                    <View style={{ width: '80%', marginLeft: '14%', height: 20, borderWidth: 1, position: 'absolute'}}></View>
                </View>
                <View style={{alignItems: 'center', flexDirection: 'row'}}>    
                    <Ionicons name="person" size={40} color="black" onPress={() => navigation.navigate('TimeLineStack')}/>
                    <Text style={estilos.textoUser}>User</Text>
                    <View style={{ width: '80%', marginLeft: '14%', height: 20, borderWidth: 1, position: 'absolute'}}></View>
                </View>
                <View style={{alignItems: 'center', flexDirection: 'row'}}>    
                    <Ionicons name="person" size={40} color="black" onPress={() => navigation.navigate('TimeLineStack')}/>
                    <Text style={estilos.textoUser}>User</Text>
                    <View style={{ width: '80%', marginLeft: '14%', height: 20, borderWidth: 1, position: 'absolute'}}></View>
                </View>
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
    textoUser: {
        fontWeight: "bold",
        fontSize: 12,
        width: '100%',
        marginLeft: '3%',
    },
});
