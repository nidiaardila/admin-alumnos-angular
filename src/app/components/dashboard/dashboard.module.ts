import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../../material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { AbmComponent } from './abm/abm.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NombreCompletoPipe } from 'src/app/pipes/nombre-completo.pipe';
import { TamanoFuenteDirective } from 'src/app/directives/tamano-fuente.directive';
import { EditComponent } from './edit/edit.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from '../login/login.component';

import { StoreModule } from '@ngrx/store';
import { alumnoStateFeatureKey, reducer } from 'src/app/state/alumno-state.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AlumnosEffects } from 'src/app/state/alumno-state.effects';
import { authFeatureKey, authReducer } from 'src/app/components/state/auth.reducer';
import { AlumnoService } from 'src/app/services/alumno.service';




@NgModule({
  declarations: [
    DashboardComponent,
    AbmComponent,
    AlumnosComponent,
    NavbarComponent,
    ToolbarComponent,
    NombreCompletoPipe,
    TamanoFuenteDirective,
    EditComponent,
    CursosComponent,
    LoginComponent
    
  
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature(alumnoStateFeatureKey, reducer),
    EffectsModule.forFeature([AlumnosEffects])
    
  ],

  providers: [
    AlumnoService
  ],
})
export class DashboardModule {}
