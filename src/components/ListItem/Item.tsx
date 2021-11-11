import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { PropsItem } from "../../interfaces";
import { styles } from "../../theme";
import { Ionicons } from '@expo/vector-icons';

export const Item = ({item, accion, accionDetail}: PropsItem) => {
    return (
    <View style={{
        flexDirection:"row",
        marginVertical: 5,
    }}>
        <View style={{
            flex:1,
        }}>
            <Text style={[styles.textBase,styles.textH3]}>{item.value}</Text>
        </View>
        <TouchableOpacity
            onPress={()=>accionDetail(item)}
        >
            <Ionicons name="eye" color="white" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={accion}
        >
            <Ionicons name="close" color="white" size={25} />
        </TouchableOpacity>
    </View>)
}