// import { Profesor } from "./profesor";

export interface Curso{
    id: string;
    cod: number;
    nombre: string;
    comision: number;
    profesor: string;
    disponibilidad: boolean;
    fechaInicio: Date;
    fechaFin: Date;
}