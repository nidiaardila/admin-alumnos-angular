import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, Subscriber, throwError  } from 'rxjs';
import { Alumno } from '../interfaces/alumno';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {env} from 'src/environment/environment'

@Injectable({
  providedIn: 'root',
}) 
export class AlumnoService {

  constructor(private http: HttpClient) {
    
   }

  //get api
  getAlumnos(): Observable<Alumno[]>{
    console.log(`${env.URL}/alumnos`);
    const result = this.http.get<Alumno[]>(`${env.URL}/alumnos`);
    return result;
  }

  deleteAlumno(alumno: Alumno): Observable<Alumno>{
    return this.http.delete<Alumno>(`${env.URL}/alumnos/${alumno.id}`, {
      headers: new HttpHeaders({
        'Alumno': 'Activo'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }

  updateAlumno(alumno: Alumno): Observable<Alumno>{
    console.log(alumno.id);
    return this.http.put<Alumno>(`${env.URL}/alumnos/${alumno.id}`, alumno, {
      headers: new HttpHeaders({
        'usuario': 'Nidia'
      })
    }).pipe(
      catchError(this.capturarError)
    );
    
  }

  addAlumno(alumno: Alumno): Observable<Alumno>{
    return this.http.post<Alumno>(`${env.URL}/alumnos`, alumno, {
      headers: new HttpHeaders({
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }

 
  private capturarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      alert(`Error del lado del cliente: ${error.message}`);
    }else{
      alert(`Error del lado del servidor: ${error.message}`);
    }

    return throwError(() => new Error('Error en el procesamiento de alumnos'));
  }
   
  
}



