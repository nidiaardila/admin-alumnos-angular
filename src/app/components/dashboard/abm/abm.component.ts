import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.scss']
})
export class AbmComponent  {

  form: FormGroup;

  constructor(private fb: FormBuilder){

    this.form = this.fb.group({
      cod: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      estatus: ['', Validators.required]
    })
  }

  login(){
    console.log("creado")
  }


}
