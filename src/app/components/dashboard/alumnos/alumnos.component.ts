import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/interfaces/alumno';
import { Sesion } from 'src/app/interfaces/sesion';
import { AlumnoService } from 'src/app/services/alumno.service';
import { SesionService } from 'src/app/services/sesion.service';

import { cargarAlumnoState, alumnosCargados, eliminarAlumnoState } from 'src/app/state/alumno-state.actions';
import { AlumnoState } from 'src/app/state/alumno-state.reducer';
import { selectCargandoAlumnos, selectAlumnosCargados } from 'src/app/state/alumno-state.selectors';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {
  alumnos!: Alumno[];
  alumnos$!: Observable<Alumno[]>;
  sesion$!: Observable<Sesion>;
  cargando$!: Observable<Boolean>



  displayedColumns: string[] = ['cod', 'nombreCompleto', 'estatus', 'acciones'];
  dataSource!: MatTableDataSource<Alumno>;

  constructor(
    private _alumnoService: AlumnoService, 
    private router: Router, 
    private sesion: SesionService,
    private store: Store<AlumnoState>
    ) {}

  ngOnInit() {
    
    this.cargando$ = this.store.select(selectCargandoAlumnos);

    this.alumnos$ = this.store.select(selectAlumnosCargados);
    this.sesion$ = this.sesion.obtenerSesion();

    this.store.dispatch(cargarAlumnoState());
    
  }

  // eliminar
  deleteAlumno(alumno: Alumno) {
    this.store.dispatch(eliminarAlumnoState({ alumno }));
  }

  redirigirEditAlumno(alumno: Alumno) {
    
    this.router.navigate(['/dashboard/edit', alumno]);
  }
}
