import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { Curso } from "src/app/interfaces/curso";
import { CursosService } from "src/app/services/cursos.service";
import { agregarCursoState, cargarCursoState, cursosCargados, editarCursoState, eliminarCursoState } from "./curso-state.actions";

@Injectable()
export class CursosEffects{
    cargarCursos$ = createEffect(() => {
        return this.actions$.pipe( // Obserable2
            ofType(cargarCursoState),
            concatMap(() => {
                return this.cursos.getCursos().pipe( // Obsaervable1
                    map((c: Curso[]) => cursosCargados({ cursos: c }))
                )
            })
        )
    });
    agregarCurso$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(agregarCursoState),
            concatMap(({ curso }) => {
                return this.cursos.addCurso(curso).pipe(
                    map((curso: Curso) => {
                        this.snackBar.open(`${curso.nombre} agregado satisfactoriamente`);
                        this.router.navigate(['cursos/listar']);
                        return cargarCursoState();
                    })
                )
            })
        );
    });
    elimninarCurso$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(eliminarCursoState),
            concatMap(({ curso }) => {
                return this.cursos.deleteCurso(curso).pipe(
                    map((curso: Curso) => {
                        return cargarCursoState();
                    })
                )
            })
        )
    });
    
    editarCurso$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(editarCursoState),
            concatMap(({ curso }) => {
                return this.cursos.updateCurso(curso).pipe(
                    map((curso: Curso) => {
                        return cargarCursoState();
                    })
                )
            })
        );
    });

    constructor(
        private cursos: CursosService,
        private actions$: Actions,
        private router: Router,
        private snackBar: MatSnackBar
    ){}
}