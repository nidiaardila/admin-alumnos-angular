import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { Alumno } from "../interfaces/alumno";
import { AlumnoService} from "../services/alumno.service"

import { agregarAlumnoState, cargarAlumnoState, alumnosCargados, editarAlumnoState, eliminarAlumnoState } from "./alumno-state.actions";

@Injectable()
export class AlumnosEffects{
    cargarAlumnos$ = createEffect(() => {
        return this.actions$.pipe( 
            ofType(cargarAlumnoState),
            concatMap(() => {
                return this.alumnos.getAlumnos().pipe( 
                    map((a: Alumno[]) => alumnosCargados({ alumnos: a }))
                )
            })
        )
    });
    agregarAlumno$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(agregarAlumnoState),
            concatMap(({ alumno }) => {
                return this.alumnos.addAlumno(alumno).pipe(
                    map((alumno: Alumno) => {
                        // this.snackBar.open(`${alumno.nombre} agregado con exito`);
                        // alert(`${alumno.nombre} agregado con exito`)
                        this.snackBar.open('Alumno agregado con exito', 'Close', {
                            duration:3000,
                            horizontalPosition:'center',
                            verticalPosition:'bottom'
                          } )
                        this.router.navigate(['dashboard/alumnos']);
                        return cargarAlumnoState();
                    })
                )
            })
        );
    });
    elimninarAlumno$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(eliminarAlumnoState),
            concatMap(({ alumno }) => {
                return this.alumnos.deleteAlumno(alumno).pipe(
                    map((alumno: Alumno) => {
                        this.snackBar.open('Alumno eliminado con exito', 'Close', {
                            duration:3000,
                            horizontalPosition:'center',
                            verticalPosition:'bottom'
                          } )
                        return cargarAlumnoState();
                    })
                )
            })
        )
    });
    
    editarAlumno$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(editarAlumnoState),
            concatMap(({ alumno }) => {
                return this.alumnos.updateAlumno(alumno).pipe(
                    map((alumno: Alumno) => {
                        this.snackBar.open('Alumno editado con exito', 'Close', {
                            duration:3000,
                            horizontalPosition:'center',
                            verticalPosition:'bottom'
                          } )
                        return cargarAlumnoState();
                    })
                )
            })
        );
    });

    constructor(
        private alumnos: AlumnoService,
        private actions$: Actions,
        private router: Router,
        private snackBar: MatSnackBar
    ){}
}