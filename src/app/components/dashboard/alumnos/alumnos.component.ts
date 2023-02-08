import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno, Estatus } from 'src/app/interfaces/alumno';

import { AbmComponent } from '../abm/abm.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent {

  

  alumnos: Alumno[] = [
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
  ]
 
  displayedColumns: string[] = ['cod', 'nombre', 'apellido', 'estatus', 'acciones'];
  dataSource = new MatTableDataSource(this.alumnos);

  // paginator
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(){
    
  }

  // ngOnInit(): void {
  // }

    // search
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    
    //eliminar
    eliminar(alumno: Alumno) {
      const index = this.alumnos.indexOf(alumno);
      this.alumnos.splice(index, 1);
      this.dataSource = new MatTableDataSource<Alumno>(this.alumnos); //actualizar la data en la tabla después de eliminar un alumno
      
    }


  //actualizar la tabla con el nuevo alumno
  agregarAlumno(alumno: Alumno){
    this.alumnos.push(alumno);
    console.log(this.alumnos);
  }

}
