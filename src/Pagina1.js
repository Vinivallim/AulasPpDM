import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'

export default function Pagina1() {
    return (
        <View style={styles.container}>
            <Text>FATEC Zona Leste - Pagina 1</Text>
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
});
