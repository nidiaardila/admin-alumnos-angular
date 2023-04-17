import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProfesorService } from 'src/app/core/services/profesor.service';
import { Curso } from 'src/app/interfaces/curso';
// import { Profesor } from 'src/app/interfaces/profesor';
import { CursosService } from 'src/app/services/cursos.service';
import { agregarCursoState } from 'src/app/state/curso-state.actions';
import { CursoState } from 'src/app/state/curso-state.reducer';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit{
  formulario!: FormGroup;
  // profesores$!: Observable<Profesor[]>;

  constructor(
    private router: Router,
    private cursoService: CursosService,
    // private profesores: ProfesorService,
    private store: Store<CursoState>
  ){}

  ngOnInit(): void {
    // this.profesores$ = this.profesores.obtenerProfesores();
    this.formulario = new FormGroup({
      comision: new FormControl(''),
      fechaFin: new FormControl(''),
      fechaInicio: new FormControl(''),
      inscripcionAbierta: new FormControl(false),
      nombre: new FormControl(''),
      profesor: new FormControl({})
    })
  }

  agregarCurso(){
  //   let curso: Curso = {
  //     id: '',
  //     nombre: this.formulario.value.nombre,
  //     comision: this.formulario.value.comision,
  //     fechaInicio: this.formulario.value.fechaInicio,
  //     fechaFin: this.formulario.value.fechaFin,
  //     inscripcionAbierta: this.formulario.value.inscripcionAbierta,
  //     profesor: this.formulario.value.profesor
  //   }
  //   this.store.dispatch(agregarCursoState({ curso: curso }));
  }
}