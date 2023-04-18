import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/interfaces/usuario';
import { LoginService } from 'src/app/services/login.service';
import { AuthState } from '../state/auth.reducer';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private login: LoginService, 
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private authStore: Store<AuthState>
      ) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  accept() {
    // console.log(this.form);
     let user: Usuario = {
      usuario: this.form.value.user,
      contrasena: this.form.value.password
    }
  

    if(user.usuario == 'Nidia' && user.contrasena== '123'){
      this.login.login(user)
      this.router.navigate(['dashboard/alumnos']);
      console.log('Bienvenid@')

    } else{
      this.error();
      this.form.reset();
    }
  }

error(){
  this._snackBar.open('Invalid user or password', 'Close', {
    duration:3000,
    horizontalPosition:'center',
    verticalPosition:'bottom'
  } )
}

}
