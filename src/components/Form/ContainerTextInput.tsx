import React from 'react';
import { View, StyleSheet, TextInputProps } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../../theme';

interface ContainerTextInputProps extends TextInputProps {
    value: string | undefined;
    label: string | undefined;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    keyboardType?: "default" | "number-pad" | "decimal-pad" | "numeric" | "email-address" | "phone-pad";
}

export const ContainerTextInput = ({value, label, onChangeText, secureTextEntry = false, keyboardType = "default"}: ContainerTextInputProps) => {
    
    return (
    <View style={{ marginVertical: 5 }}>
            <View
                style={stylesLocal.textContainer}
            >
                <TextInput
                    onChangeText={onChangeText}
                    label={label}
                    value={value}
                    dense
                    style={{
                        backgroundColor: colors.white["50"],
                    }}
                    isTVSelectable={true}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                />
            </View>
    </View>
    )
}

export const stylesLocal = StyleSheet.create({
	textContainer: {
		backgroundColor: "transparent",
		borderRadius: 5,
		justifyContent: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,

		elevation: 0,
	}
})