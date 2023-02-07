export interface Alumno {
    cod: number;
    nombre: string;
    apellido: string;
    estatus: Estatus;
  }
  
  export enum Estatus {
      Activo = 'Activo',
      Inactivo = 'Inactivo',
      Graduado = 'Graduado'
  }