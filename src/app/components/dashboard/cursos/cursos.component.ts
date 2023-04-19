
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
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit{
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>;
  sesion$!: Observable<Sesion>
  cargando$!: Observable<Boolean>

  // displayedColumns: string[] = ['cod', 'nombreCurso', 'comision', 'profesor', 'inscripcionAbierta', 'fechaInicio', 'fechaFin', 'acciones'];
  displayedColumns: string[] = ['cod', 'nombre', 'comision', 'profesor', 'inscripcion', 'fechaInicio', 'fechaFin', 'acciones'];
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
    this.cursos$ = this._cursoService.getCursos();
    this.sesion$ = this.sesion.obtenerSesion();
    
  }

  deleteCurso(curso: Curso) {
    this._cursoService.deleteCurso(curso).subscribe((curso:Curso)=>{
      alert(`El alumno ${curso.id} ${curso.nombre} ha sido eliminado`);
      this.cursos$ = this._cursoService.getCursos();
    });
    
  }

  redirigirEditCurso(curso: Curso) {
    
    this.router.navigate(['/dashboard/editarCurso', curso]);
  }
}
