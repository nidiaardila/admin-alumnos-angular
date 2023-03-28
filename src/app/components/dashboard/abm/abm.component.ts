import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Alumno } from 'src/app/interfaces/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { agregarAlumnoState } from 'src/app/state/alumno-state.actions';
import { AlumnoState } from 'src/app/state/alumno-state.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.scss']
})
export class AbmComponent implements OnInit {

  form!: FormGroup;


  constructor(
    private fb: FormBuilder, 
    private router:Router, 
    private _alumnoService: AlumnoService,
    private store: Store<AlumnoState>,
  
    ){
  
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      cod: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      estatus: ['Activo', Validators.required]
    })
  }

  addAlumno(){
    let alumno: Alumno = {
      id: '',
      cod: this.form.value.cod,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      estatus: this.form.value.estatus
    }
    this.store.dispatch(agregarAlumnoState({ alumno: alumno }))
    // this._alumnoService.addAlumno(alumno).subscribe((alumno: Alumno) => {
     
    //   this.router.navigate(['/dashboard']);
    //   alert(`${alumno.nombre} ${alumno.nombre} agregado con exito`);
    // });
  }

}
