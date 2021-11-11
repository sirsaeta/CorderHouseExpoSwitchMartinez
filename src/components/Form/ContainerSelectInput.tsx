import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInputProps } from 'react-native';
import { List } from 'react-native-paper';
import { colors } from '../../theme';
import { ContainerTextInput } from './ContainerTextInput';

interface SelectItemProps {
    value: string;
    label: string;
}
interface ContainerSelectInputProps extends TextInputProps {
    value: string | undefined;
    label: string | undefined;
    options: SelectItemProps[] | undefined;
    onChangeText: (text: string) => void;
}

export const ContainerSelectInput = ({value, label, onChangeText, options = []}: ContainerSelectInputProps) => {
	const [filter, setFilter] = useState("");

    const filterOptions = (option:SelectItemProps)=>option.label.toLowerCase().includes(filter.toLowerCase()) && option.label.toLowerCase()!==filter.toLowerCase()

    useEffect(() => {
        setFilter(value || "");
    }, [])
    
    return (
    <View style={{ marginVertical: 5 }}>
        <ContainerTextInput 
            label={label}
            value={filter}
            onChangeText={setFilter}
        />
        {options
        .filter(filterOptions || filter.length===0)
        .filter((_,index)=>index<3).length>0 && <List.Section>
            {
                options
                .filter(filterOptions || filter.length===0)
                .filter((_,index)=>index<3)
                .map((option:SelectItemProps,index:number)=><List.Item 
                    style={{backgroundColor: colors.white["30"]}} key={index} 
                    onPress={()=>{
                        setFilter(option.label);
                        onChangeText(option.value);
                    }} 
                    title={option.label} 
                />)
            }
        </List.Section>}
    </View>
    )
}

export const stylesLocal = StyleSheet.create({
	textContainer: {
		backgroundColor: "green",
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