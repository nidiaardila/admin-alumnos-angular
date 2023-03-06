import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, Subscriber, throwError  } from 'rxjs';
import { Alumno } from '../interfaces/alumno';
import { HttpClient } from '@angular/common/http';
import {env} from 'src/environment/environment'

@Injectable({
  providedIn: 'root',
})
// @Injectable()  
export class AlumnoService {
  private alumnos: Alumno[] = [
    {cod: 1, nombre: 'Maria', apellido: 'Luna', estatus: 'Activo'},
    {cod: 2, nombre: 'Antonio', apellido: 'Cordoba', estatus: 'Activo'},
    {cod: 3, nombre: 'Andres', apellido: 'Pinzon', estatus: 'Inactivo'},
    {cod: 4, nombre: 'Rodrigo', apellido: 'Mora', estatus: 'Activo'},
    {cod: 5, nombre: 'Jorge', apellido: 'Cipriano', estatus: 'Activo'},
    {cod: 6, nombre: 'Ana', apellido: 'Melendez', estatus: 'Activo'},
    {cod: 7, nombre: 'Nathalia', apellido: 'Oliveira', estatus: 'Activo'},
    {cod: 8, nombre: 'Sophia', apellido: 'Jaimes', estatus: 'Activo'},
    {cod: 9, nombre: 'Blanca', apellido: 'Herrera', estatus: 'Inactivo'},
    {cod: 10, nombre: 'Fernando', apellido: 'Diaz', estatus: 'Activo'},
    {cod: 11, nombre: 'Lucia', apellido: 'Rojas', estatus: 'Inactivo'},
    {cod: 12, nombre: 'Camilo', apellido: 'Gomez', estatus: 'Activo'},
    {cod: 13, nombre: 'Juliana', apellido: 'Vargas', estatus: 'Inactivo'},
    {cod: 14, nombre: 'Gustavo', apellido: 'Santos', estatus: 'Inactivo'},
    {cod: 15, nombre: 'Miguel', apellido: 'Ramirez', estatus: 'Activo'},
    {cod: 16, nombre: 'Valentina', apellido: 'Castillo', estatus: 'Activo'},
    {cod: 17, nombre: 'Julian', apellido: 'Garcia', estatus: 'Inactivo'},
    {cod: 18, nombre: 'Isabella', apellido: 'Lopez', estatus: 'Activo'},
    {cod: 19, nombre: 'Diego', apellido: 'Rivera', estatus: 'Inactivo'},
    {cod: 20, nombre: 'Sofia', apellido: 'Perez', estatus: 'Activo'}
  ];

  // const url = https://6405f14deed195a99f917bbe.mockapi.io/:endpoint;

  private alumnos$: BehaviorSubject<Alumno[]>;

  constructor(private http: HttpClient) {
    this.alumnos$ = new BehaviorSubject<Alumno[]>(this.alumnos);
   }

   
  //get api
  //  obtenerAlumnos(): Observable<Alumno[]>{
  //   return this.http.get<Alumno[]>(`${env.URL}/alumnos`)
  // }
   

  // cargarAlumnos(): Observable<Alumno[]> {
  //  return this.alumnos$.asObservable();
   
  // }
  


  getAlumno(){
    return this.alumnos.slice();
  }

  //actualizar la tabla con el nuevo alumno
  agregarAlumno(nuevoAlumno: Alumno){
    this.alumnos.unshift(nuevoAlumno);
    console.log(this.alumnos);
  }
  // agregarAlumno(nuevoAlumno: Alumno){
   
  // }

  edit(alumno: Alumno): void{
    let indice = this.alumnos.findIndex((a: Alumno) => a.cod === a.cod);

    if(indice > -1){
      this.alumnos[indice] = alumno;
      this.alumnos$.next(this.alumnos);
    }
  }
  
}

  // mockapi

  // constructor(private http: HttpClient) {}


  // }



