import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, Subscriber, throwError } from 'rxjs';
import { Curso } from 'src/app/interfaces/curso';
import { env } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
}
)
export class CursosService {
  constructor(
    private http: HttpClient
  ){
    
  }

  getCursos(): Observable<Curso[]>{
    console.log(`${env.URL}/cursos`);
    const result = this.http.get<Curso[]>(`${env.URL}/cursos`);
    return result;
  }

  // obtenerCursos(): Observable<Curso[]>{
  //   return this.http.get<Curso[]>(`${env.apiURL}/cursos`, {
  //     headers: new HttpHeaders({
  //       'content-type': 'application/json',
  //       'encoding': 'UTF-8'
  //     })
  //   }).pipe(
  //     catchError(this.capturarError)
  //   );
  // }

  deleteCurso(curso: Curso): Observable<Curso>{
    return this.http.delete<Curso>(`${env.URL}/cursos/${curso.id}`, {
      headers: new HttpHeaders({
        'Alumno': 'Activo'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }

  updateCurso(curso: Curso): Observable<Curso>{
    console.log(curso.id);
    return this.http.put<Curso>(`${env.URL}/cursos/${curso.id}`, curso, {
      headers: new HttpHeaders({
        'usuario': 'Nidia'
      })
    }).pipe(
      catchError(this.capturarError)
    );
    
  }

  addCurso(curso: Curso): Observable<Curso>{
    return this.http.post<Curso>(`${env.URL}/cursos`, curso, {
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

    return throwError(() => new Error('Error en el procesamiento de cursos'));
  }
}
