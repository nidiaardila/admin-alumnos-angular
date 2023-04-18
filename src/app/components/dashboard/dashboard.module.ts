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
import { AgregarCursoComponent } from 'src/app/components/dashboard/agregar-curso/agregar-curso.component';
import { DetalleCursoComponent } from 'src/app/components/dashboard/detalle-curso/detalle-curso.component';
import { EditarCursoComponent } from 'src/app/components/dashboard/editar-curso/editar-curso.component';
import { CursosInicioComponent } from 'src/app/components/dashboard/cursos-inicio/cursos-inicio.component';

import { StoreModule } from '@ngrx/store';
import { alumnoStateFeatureKey, reducer } from 'src/app/state/alumno-state.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AlumnosEffects } from 'src/app/state/alumno-state.effects';
import { authFeatureKey, authReducer } from 'src/app/components/state/auth.reducer';
import { AlumnoService } from 'src/app/services/alumno.service';
import { CursosService } from 'src/app/services/cursos.service';
import { cursoStateFeatureKey } from 'src/app/state/curso-state.reducer';
import { CursosEffects } from 'src/app/state/curso-state.effects';

// import { CursosModule } from '../cursos/cursos.module';

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
    LoginComponent,
  
    // ListaCursosComponent,
    AgregarCursoComponent,
    DetalleCursoComponent,
    EditarCursoComponent,
    // TablaCursosComponent,
    CursosInicioComponent
    
  
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    // CursosModule,
    StoreModule.forFeature(alumnoStateFeatureKey, reducer),
    EffectsModule.forFeature([AlumnosEffects]),
    StoreModule.forFeature(cursoStateFeatureKey, reducer),
    EffectsModule.forFeature([CursosEffects]),
    
    
  ],

  providers: [
    AlumnoService,
    CursosService
  ],
})
export class DashboardModule {}
