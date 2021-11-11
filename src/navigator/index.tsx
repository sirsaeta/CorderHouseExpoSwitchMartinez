import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ListLoansScreen, DetailsLoansScreen } from '../screens';
import { Prestamo } from '../interfaces';

export type RootStackParams = {
    Home: undefined,
    ListLoans: undefined,
    DetailsLoans: Prestamo,
}

const Stack = createNativeStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => null,
                contentStyle: {
                    backgroundColor: "#121212",
                }
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ListLoans" component={ListLoansScreen} />
            <Stack.Screen name="DetailsLoans" component={DetailsLoansScreen} />
        </Stack.Navigator>
    );
}