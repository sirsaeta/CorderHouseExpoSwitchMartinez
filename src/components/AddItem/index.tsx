import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Prestamo } from '../../interfaces';
import { ContainerTextInput } from '../Form/ContainerTextInput';
import { Ionicons } from '@expo/vector-icons';

type Props = {
    setPrestamos: React.Dispatch<React.SetStateAction<Prestamo[]>>;
    prestamos: Prestamo[];
}

export const AddItem = ({setPrestamos, prestamos}:Props) => {
    const [text, onChangeText] = useState("");
    
    return (
    <View style={{flexDirection: "row", justifyContent: "space-around", alignItems: "center"}} >
        <View style={{width: "90%"}} >
        <ContainerTextInput
            label ="Prestamo"
            onChangeText={onChangeText}
            value={text}
        />
        </View>
        <TouchableOpacity onPress={()=> {
            if (text.length>0) {
                setPrestamos([...prestamos,{
                    id: prestamos.length+1,
                    value: text
                }]); 
                onChangeText("") ;
            }
            else return
        }}>
            <Ionicons name="add" color="white" size={25} />
        </TouchableOpacity>
    </View>
    )
}