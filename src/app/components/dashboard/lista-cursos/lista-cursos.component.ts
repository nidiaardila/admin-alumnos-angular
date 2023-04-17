import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SesionService } from 'src/app/services/sesion.service';
import { Curso } from 'src/app/interfaces/curso';
import { Sesion } from 'src/app/interfaces/sesion';
import { cargarCursoState, cursosCargados, eliminarCursoState } from 'src/app/state/curso-state.actions';
import { CursoState } from 'src/app/state/curso-state.reducer';
import { selectCargandoCursos, selectCursosCargados } from 'src/app/state/curso-state.selectors';
import { CursosService } from 'src/app/services/cursos.service';
import { EditarCursoComponent } from '../editar-curso/editar-curso.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit{
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>;
  sesion$!: Observable<Sesion>
  cargando$!: Observable<Boolean>;

  displayedColumns: string[] = ['cod', 'nombreCurso', 'comision', 'profesor', 'inscripcionAbierta', 'fechaInicio', 'fechaFin','acciones'];
  dataSource!: MatTableDataSource<Curso>;

  constructor(
    private _cursoService: CursosService,
    private router: Router,
    private sesion: SesionService,
    private dialog: MatDialog,
    private store: Store<CursoState>,
    private snackBar: MatSnackBar
  ){}

  ngOnInit() {
    this.cargando$ = this.store.select(selectCargandoCursos);

    this.cursos$ = this.store.select(selectCursosCargados);
    this.sesion$ = this.sesion.obtenerSesion();

    this.store.dispatch(cargarCursoState());

    
  }

  deleteCurso(curso: Curso) {
    this.store.dispatch(eliminarCursoState({ curso }));
    
  }

  redirigirEditCurso(curso: Curso) {
    
    this.router.navigate(['/dashboard/edit', curso]);
  }

  // eliminarCurso(curso: Curso){
  //   this.snackBar.open(`${curso.nombre} eliminado satisfactoriamente`);
  //   this.store.dispatch(eliminarCursoState({ curso }));
  // }

  // abrirDialog(curso: Curso){
  //   this.dialog.open(EditarCursoComponent, {
  //     data: curso
  //   }).afterClosed().subscribe((curso: Curso) => {
  //     this.snackBar.open(`${curso.nombre} editado satisfactoriamente`)
  //     this.cursos$ = this.cursoService.obtenerCursos();
  //   });
  // }
}