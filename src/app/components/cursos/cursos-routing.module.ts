import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AdminGuard } from '../core/guards/admin.guard';
import { SesionGuard } from 'src/app/core/guards/sesion.guard';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { CursosInicioComponent } from './components/cursos-inicio/cursos-inicio.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';

const routes: Routes = [
  { path: '', component: CursosInicioComponent, canActivateChild: [SesionGuard], children: [
    { path: 'listar', component: ListaCursosComponent },
    { path: 'editar', component: EditarCursoComponent},
    { path: 'agregar', component: AgregarCursoComponent},
    // { path: 'editar', component: EditarCursoComponent, canActivate: [AdminGuard] },
    // { path: 'agregar', component: AgregarCursoComponent, canActivate: [AdminGuard] },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRountingModule { }
