import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme';
import { AddItem } from '../components/AddItem';
import { Prestamo } from '../interfaces';
import { ListItem } from '../components/ListItem';


interface Props extends StackScreenProps<any, any>{};

export const Home = ({navigation}: Props) => {
    const [prestamos, setPrestamos] = useState<Prestamo[]>([])
    
    return (
        <ScrollView
            contentInsetAdjustmentBehavior='automatic'
        >
            <View style={{ flex: 1 }}>
                <Text style={[styles.textBase, styles.textH1]} >
                    Crear Prestamo
                </Text>
                <AddItem prestamos={prestamos} setPrestamos={setPrestamos} />
                <ListItem prestamos={prestamos} setPrestamos={setPrestamos} accionDetail={(params:Prestamo)=>navigation.navigate("DetailsLoans",params)} />
            </View>
        </ScrollView>
    )
}