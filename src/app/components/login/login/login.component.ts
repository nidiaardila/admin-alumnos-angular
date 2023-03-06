import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  accept() {
    // console.log(this.form);
    const user = this.form.value.user;
    const password = this.form.value.password;

    if(user == 'Nidia' && password== '12345'){
      this.router.navigate(['dashboard']);
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
