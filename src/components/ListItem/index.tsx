import React from 'react';
import { FlatList, View } from 'react-native';
import { Prestamo, PropsItem } from '../../interfaces';
import { Item } from './Item';

type Props = {
    setPrestamos: React.Dispatch<React.SetStateAction<Prestamo[]>>;
    prestamos: Prestamo[];
    accionDetail: (params:any) => void;
}

export const ListItem = ({prestamos, setPrestamos, accionDetail}:Props) => {
  
    const renderItem = ({item, accion, accionDetail}: PropsItem) => (
      <Item item={item} accion={accion} accionDetail={accionDetail} />
    );

    return (
        <View>
            <FlatList
                data={prestamos}
                keyExtractor={(item)=>item.id?.toString()}
                renderItem={({item,index})=>renderItem({
                    item,
                    accion: ()=>{
                        let newPrestamos = [...prestamos];
                        newPrestamos.splice(index,1)
                        setPrestamos(newPrestamos)
                    },
                    accionDetail,
                })}
            />
        </View>
    )
}
