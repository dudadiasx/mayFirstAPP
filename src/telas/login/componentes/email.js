import React from "react";
import { StyleSheet, View, TextInput} from "react-native";

import {useState} from 'react';
export default function Email() {
    const [email, setEmail] = useState('');
    return (
        <TextInput
        value={email}
        onChangeText={(email) => setEmail(email)}
        placeholder={'E-MAIL'}
        style={styles.input}
      />   
    );
}
const styles = StyleSheet.create({
    input: {
        width: "80%",
        padding: 10,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        color: '#4F4F4F',
        elevation: 3,
      },
});
