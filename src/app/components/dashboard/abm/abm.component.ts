import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Alumno } from 'src/app/interfaces/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.scss']
})
export class AbmComponent  {

  form: FormGroup;


  constructor(private fb: FormBuilder, private router:Router, private _alumnoService: AlumnoService
  
    ){
  
    //formulario para nuevo alumno
    this.form = this.fb.group({
      cod: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      estatus: ['Activo', Validators.required]
    })
  }
  
  // agregar nuevo alumno
  agregarAlumno(){
    console.log(this.form);

    const nuevoAlumno: Alumno ={
      id: '1',
      cod: this.form.value.cod,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      estatus: this.form.value.estatus
    }

    // console.log(nuevoAlumno);

    this._alumnoService.agregarAlumno(nuevoAlumno);
    this.router.navigate(['/dashboard'])
  
  }

}
