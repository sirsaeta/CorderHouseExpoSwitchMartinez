export interface Prestamo {
    id: number;
    value: string;
}

export interface PropsItem {
    item: Prestamo;
    accion: ()=>void;
    accionDetail: (params:Prestamo)=>void;
}