// import { Profesor } from "./profesor";

export interface Curso{
    id: string;
    nombre: string;
    comision: number;
    profesor: string;
    inscripcionAbierta: boolean;
    fechaInicio: Date;
    fechaFin: Date;
}