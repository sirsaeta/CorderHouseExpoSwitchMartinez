import React from 'react';
import { View, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { Checkbox  } from 'react-native-paper';

interface ContainerCheckBoxInputProps {
    value: boolean | undefined;
    label: string;
    onCheck: (value: boolean) => void;
}

export const ContainerCheckBoxInput = ({value, label, onCheck }: ContainerCheckBoxInputProps) => {
    
    return (
    <View style={{ marginVertical: 5 }}>
        <TouchableNativeFeedback
            onPress={()=>{
                onCheck(!value);
            }}
            background={TouchableNativeFeedback.Ripple('#ffffff', false)}
        >
            <View
                style={stylesLocal.textContainer}
            >
                <Checkbox.Item
                    label={label}
                    status={value ? 'checked' : 'unchecked'}
                    onPress={() => {
                        onCheck(!value);
                    }}
                    color="#ffffff"
                    uncheckedColor="#ffffff"
                    labelStyle={{
                        color:"#ffffff",
                        textAlign: "left"
                    }}
                    mode="android"
                    position="leading"
                />
            </View>
        </TouchableNativeFeedback>
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