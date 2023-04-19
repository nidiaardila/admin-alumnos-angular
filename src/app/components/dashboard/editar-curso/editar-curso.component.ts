import { HttpParams } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/interfaces/alumno';

import { Store } from '@ngrx/store';
import { CursoState } from 'src/app/state/curso-state.reducer';
import { CursosService } from 'src/app/services/cursos.service';
import { Curso } from 'src/app/interfaces/curso';
import { editarCursoState } from 'src/app/state/curso-state.actions';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit{
  form!: FormGroup;
  id2!: string;

  constructor(
    private fb: FormBuilder, 
    private activatedRoute: ActivatedRoute,
     private router:Router, 
     private _cursoService : CursosService,
     private store: Store<CursoState>
  ){}


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros);
      this.form = new FormGroup({
        cod: new FormControl(parametros.get('cod')),
        nombre: new FormControl(parametros.get('nombre')),
        comision: new FormControl(parametros.get('comision')),
        profesor: new FormControl(parametros.get('profesor')),
        inscripcion: new FormControl(parametros.get('inscripcion')),
        fechaInicio: new FormControl(parametros.get('fechaInicio')),
        fechaFin: new FormControl(parametros.get('fechaFin'))
        
      })
    })
  }

  updateCurso(){ 
    this.activatedRoute
      .paramMap
      .subscribe(params => {        
        this.id2 = String(params.get('id'));
       console.log(params.get('id'));
      });   
    let curso: Curso = {
      id: this.id2,
      cod: this.form.value.cod,
      nombre: this.form.value.nombre,
      comision: this.form.value.comision,
      profesor: this.form.value.profesor,
      inscripcion: this.form.value.inscripcion,
      fechaInicio: this.form.value.fechaInicio,
      fechaFin: this.form.value.fechaFin
    }

    this._cursoService.updateCurso(curso).subscribe((curso: Curso)=>{
      console.log(curso);
      this.store.dispatch(editarCursoState({curso: curso}));
      this.router.navigate(['dashboard/cursos']);
      this._cursoService.getCursos();
    });
      
  }

}
