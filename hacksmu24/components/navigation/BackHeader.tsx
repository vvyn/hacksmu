import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BackHeader({title}: {title: string}) {
    const navigation = useNavigation();

    const backBtn = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.btn} onPress={backBtn}>
                <Text style={styles.text}>{"< Back"}</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        width: '100%',
    },
    btn: {
        marginRight: 20,
    },
    text: {
        fontSize: 24,
        color: 'black',
    },
    title: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
    },
});
