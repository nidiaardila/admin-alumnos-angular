import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Curso } from 'src/app/interfaces/curso';

import { CursosService } from 'src/app/services/cursos.service';
import { agregarCursoState } from 'src/app/state/curso-state.actions';
import { CursoState } from 'src/app/state/curso-state.reducer';


@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit{
  form!: FormGroup;
  picker!: MatDatepicker<Date>;

  constructor(
    private router: Router,
    private _cursoService: CursosService,
    private store: Store<CursoState>,
    private fb: FormBuilder, 
    
  ){}

  ngOnInit(): void {
    this.form = this.fb.group({
      cod: ['', Validators.required],
      nombre: ['', Validators.required],
      comision: ['', Validators.required],
      profesor: ['', Validators.required],
      disponibilidad: ['', Validators.required],
      fechaInicio: [''],
      fechaFin: ['']
    })
  }

  addCurso(){
    let curso: Curso = {
      id: '',
      cod: this.form.value.cod,
      nombre: this.form.value.nombre,
      comision: this.form.value.comision,
      profesor: this.form.value.profesor,
      disponibilidad: this.form.value.disponibilidad,
      fechaInicio: this.form.value.fechaInicio,
      fechaFin: this.form.value.fechaFin
    }
    this._cursoService.addCurso(curso).subscribe((curso: Curso) => {
     
      this.router.navigate(['/dashboard/cursos']);
      alert(`${curso.cod} ${curso.nombre} agregado con exito`);
    });
  }

}

