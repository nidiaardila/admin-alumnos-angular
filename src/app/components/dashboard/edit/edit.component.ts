import { HttpParams } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/interfaces/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

import { editarAlumnoState } from 'src/app/state/alumno-state.actions';
import { AlumnoState } from 'src/app/state/alumno-state.reducer';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  form!: FormGroup;
   id2!: string;
  

  constructor(
    private fb: FormBuilder, 
    private activatedRoute: ActivatedRoute,
     private router:Router, 
     private _alumnoService: AlumnoService,
     private store: Store<AlumnoState>,
     
     ){}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros);
      this.form = new FormGroup({
        cod: new FormControl(parametros.get('cod')),
        nombre: new FormControl(parametros.get('nombre')),
        apellido: new FormControl(parametros.get('apellido')),
        estatus: new FormControl(parametros.get('estatus'))
      })
    })
  }

  updateAlumno(){ 
         
    this.activatedRoute
      .paramMap
      .subscribe(params => {        
        this.id2 = String(params.get('id'));
       console.log(params.get('id'));
      });   
    let alumno: Alumno = {
      id: this.id2,
      cod: this.form.value.cod,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      estatus: this.form.value.estatus
    }

    // this._alumnoService.updateAlumno(alumno);
    this._alumnoService.updateAlumno(alumno).subscribe((alumno: Alumno)=>{
      console.log(alumno);
      this.store.dispatch(editarAlumnoState({alumno: alumno}));
      this.router.navigate(['dashboard']);
      this._alumnoService.getAlumnos();
      alert(`El alumno se modifico con exito`);
    });
    
    
    
  }

}
