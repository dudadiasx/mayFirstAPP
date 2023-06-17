import React from "react";
import { StyleSheet, View, TextInput} from "react-native";

import {useState} from 'react';
export default function Senha() {
    const [passWord, setPassWord] = useState('');
    return (
        <TextInput
        value={passWord}
        onChangeText={(passWord) => setPassWord(passWord)}
        placeholder={'SENHA'}
        style={styles.input}
      />   
    );
}
const styles = StyleSheet.create({
    input: {
        width: "80%",
        padding: 10,
        padding: 10,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        color: '#4F4F4F',
        elevation: 3,
      },
});
