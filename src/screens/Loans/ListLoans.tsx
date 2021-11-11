import React from 'react';
import { Text, View, useWindowDimensions, ScrollView, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles, colors } from '../../theme';

interface Props extends StackScreenProps<any, any>{};

export const ListLoans = ({navigation}: Props) => {
    const { height, width } = useWindowDimensions()
    
    return (
        <ScrollView
            contentInsetAdjustmentBehavior='automatic'
        >
            <View style={{ flex: 1 }}>
                <Text style={[styles.textBase, styles.textH1]} >
                    ListLoans
                </Text>
                <Button title='Ir Atras' onPress={() => navigation.canGoBack() && navigation.goBack()} />
            </View>
        </ScrollView>
    )
}