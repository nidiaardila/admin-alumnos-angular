import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/interfaces/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router:Router, private _alumnoService: AlumnoService){}
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

  edit(){
    let alumno: Alumno = {
      id: '1',
      cod: this.form.value.cod,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      estatus: this.form.value.estatus
    }

    this._alumnoService.edit(alumno);
    this.router.navigate(['dashboard']);
  }

}
