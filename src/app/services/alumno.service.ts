import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumno, Estatus } from '../interfaces/alumno';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private alumnos: Alumno[] = [
    {cod: 1, nombre: 'Maria', apellido: 'Luna', estatus: Estatus.Activo},
    {cod: 2, nombre: 'Antonio', apellido: 'Cordoba', estatus:  Estatus.Graduado},
    {cod: 3, nombre: 'Andres', apellido: 'Pinzon', estatus:  Estatus.Inactivo},
    {cod: 4, nombre: 'Rodrigo', apellido: 'Mora', estatus:  Estatus.Activo},
    {cod: 5, nombre: 'Jorge', apellido: 'Cipriano', estatus:  Estatus.Activo},
    {cod: 6, nombre: 'Ana', apellido: 'Melendez', estatus:  Estatus.Inactivo},
    {cod: 7, nombre: 'Nathalia', apellido: 'Oliveira', estatus:  Estatus.Activo},
    {cod: 8, nombre: 'Sophia', apellido: 'Jaimes', estatus:  Estatus.Activo},
    {cod: 9, nombre: 'Blanca', apellido: 'Herrera', estatus:  Estatus.Graduado},
    {cod: 10, nombre: 'Fernando', apellido: 'Diaz', estatus:  Estatus.Activo},
    {cod: 11, nombre: 'Lucia', apellido: 'Rojas', estatus: Estatus.Inactivo},
    {cod: 12, nombre: 'Camilo', apellido: 'Gomez', estatus: Estatus.Activo},
    {cod: 13, nombre: 'Juliana', apellido: 'Vargas', estatus: Estatus.Graduado},
    {cod: 14, nombre: 'Gustavo', apellido: 'Santos', estatus: Estatus.Inactivo},
    {cod: 15, nombre: 'Miguel', apellido: 'Ramirez', estatus: Estatus.Activo},
    {cod: 16, nombre: 'Valentina', apellido: 'Castillo', estatus: Estatus.Activo},
    {cod: 17, nombre: 'Julian', apellido: 'Garcia', estatus: Estatus.Graduado},
    {cod: 18, nombre: 'Isabella', apellido: 'Lopez', estatus: Estatus.Activo},
    {cod: 19, nombre: 'Diego', apellido: 'Rivera', estatus: Estatus.Inactivo},
    {cod: 20, nombre: 'Sofia', apellido: 'Perez', estatus: Estatus.Graduado}
  ];

  private alumnos$: BehaviorSubject<Alumno[]>

  constructor() {
    this.alumnos$ = new BehaviorSubject<Alumno[]>(this.alumnos);
   }

  getAlumno(){
    return this.alumnos.slice();
  }

  //actualizar la tabla con el nuevo alumno
  agregarAlumno(nuevoAlumno: Alumno){
    this.alumnos.unshift(nuevoAlumno);
    console.log(this.alumnos);
  }

  // eliminar(alumno: Alumno): void{
  //   let indice = this.alumnos.findIndex((a: Alumno) => a.cod === alumno.cod);

  //   if(indice > -1){
  //     this.alumnos.splice(indice, 1);
  //     this.alumnos$.next(this.alumnos);
  //   }
  // }


  edit(alumno: Alumno): void{
    let indice = this.alumnos.findIndex((a: Alumno) => a.cod === a.cod);

    if(indice > -1){
      this.alumnos[indice] = alumno;
      this.alumnos$.next(this.alumnos);
    }
  }



}
