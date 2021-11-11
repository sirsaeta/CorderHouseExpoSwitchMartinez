import React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../../theme';
import { RootStackParams } from '../../navigator';

interface Props extends StackScreenProps<RootStackParams, "DetailsLoans">{};

export const DetailsLoans = ({navigation, route}: Props) => {
    const { value } = route.params;
    
    return (
        <ScrollView
            contentInsetAdjustmentBehavior='automatic'
        >
            <View style={{ flex: 1 }}>
                <Text style={[styles.textBase, styles.textH1]} >
                    {value}
                </Text>
                <Button title='Ir Atras' onPress={() => navigation.canGoBack() && navigation.goBack()} />
            </View>
        </ScrollView>
    )
}