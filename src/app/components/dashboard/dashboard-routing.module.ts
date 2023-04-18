import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmComponent } from './abm/abm.component';
import { AgregarCursoComponent } from './agregar-curso/agregar-curso.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CursosComponent } from './cursos/cursos.component';
import { DashboardComponent } from './dashboard.component';
import { EditComponent } from './edit/edit.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'abm', component: AbmComponent },
  { path: 'edit', component: EditComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'editarCurso', component: EditarCursoComponent },
  { path: 'agregarCurso', component: AgregarCursoComponent },
  // { path: 'abmCursos', component: AbmCursosComponent}
  // { path: 'editar', component: EditarCursoComponent, canActivate: [AdminGuard] },
  // { path: 'agregar', component: AgregarCursoComponent, canActivate: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
