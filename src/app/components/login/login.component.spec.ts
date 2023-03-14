import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        MatSnackBarModule
         
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente LoginComponent se ha creado correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario se mantiene cuando dejamos campos requeridos vacios', ()=>{
    const form = component.form;
    const usuario = form.controls["user"];
    usuario.setValue('Nidia');
    expect(form.valid).toBeFalse();
  });


  it('El formulario cambia a VALID cuando ingresamos el campo password', ()=>{
    const form = component.form;
    const password = form.controls["password"];
    password.setValue('123');
    expect(password.valid).toBeTrue();
  });

  it('Retornara formulario valido', ()=>{
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance
    fixture.detectChanges();

    let user = app.form.controls['user']
    let password = app.form.controls ['password']

    user.setValue('Nidia')
    password.setValue(123)

    expect(app.form.invalid).toBeFalse();
  })

  it('Retornara formulario VALID', ()=>{
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance
    fixture.detectChanges();

    let user = app.form.controls['user']
    let password = app.form.controls ['password']

    user.setValue('Nidia')
    password.setValue(123)

    expect(app.form.valid).toBeTrue();
  })
});
