import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/interfaces/alumno';
import { Sesion } from 'src/app/interfaces/sesion';
import { AlumnoService } from 'src/app/services/alumno.service';
import { SesionService } from 'src/app/services/sesion.service';

// import { AbmComponent } from '../abm/abm.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {
  alumnos!: Alumno[];
  alumnos$!: Observable<Alumno[]>;
  sesion$!: Observable<Sesion>

  // alumnos: Alumno[] = [];

  displayedColumns: string[] = ['cod', 'nombreCompleto', 'estatus', 'acciones'];
  // displayedColumns: string[] = ['cod', 'nombre', 'apellido', 'estatus', 'acciones'];
  // dataSource = new MatTableDataSource(this.alumnos);
  dataSource!: MatTableDataSource<Alumno>;

  // paginator
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  constructor(private _alumnoService: AlumnoService, private router: Router, private sesion: SesionService) {}

  ngOnInit(): void {
    // this._alumnoService.obtenerAlumnos();
    // this._alumnoService.cargarAlumnos();
    // this.cargarAlumnos();
    // this.alumnos$ = this._alumnoService.cargarAlumnos();
    this.alumnos$ = this._alumnoService.getAlumnos();
    // this.sesion.obtenerSesion().subscribe((sesion: Sesion)=>{
    //   console.log('Estado de la session', sesion);
    this.sesion$ = this.sesion.obtenerSesion();

    // })
    
  }

  // cargarAlumnos() {
  //   this.alumnos = this._alumnoService.getAlumno();
  //   this.dataSource = new MatTableDataSource(this.alumnos);
  // }

  // Buscar
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // eliminar
  // eliminar(alumno: Alumno) {
  //   const index = this.alumnos.indexOf(alumno);
  //   this.alumnos.splice(index, 1);
  //   this.dataSource = new MatTableDataSource<Alumno>(this.alumnos); //actualizar la data en la tabla después de eliminar un alumno
  // }
  deleteAlumno(alumno: Alumno) {
    this._alumnoService.deleteAlumno(alumno).subscribe((alumno:Alumno)=>{
      alert(`El alumno ${alumno.nombre} ${alumno.apellido} ha sido eliminado`);
      this.alumnos$ = this._alumnoService.getAlumnos();
    });
    
  }

  redirigirEditAlumno(alumno: Alumno) {
    this.router.navigate(['/dashboard/edit', alumno]);
  }
}
