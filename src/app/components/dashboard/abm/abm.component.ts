import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/interfaces/alumno';

@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.scss']
})
export class AbmComponent  {

  form: FormGroup;
nuevoAlumno: any;

  constructor(private fb: FormBuilder, private router:Router){
  
    //formulario para nuevo alumno
    this.form = this.fb.group({
      cod: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      estatus: ['Activo', Validators.required]
    })
  }
  
  // agregar nuevo alumno
  agregar(){
    console.log(this.form);

    const alumno: Alumno ={
      cod: this.form.value.cod,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      estatus: this.form.value.estatus
    }

    console.log(alumno);
    this.router.navigate(['/dashboard'])
    console.log(alumno);
  
  }


}
