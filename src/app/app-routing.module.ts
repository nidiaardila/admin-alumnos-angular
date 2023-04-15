import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component'
import { SesionGuard } from './core/guards/sesion.guard';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, //iniciar la app en el login
  {path: 'login', component: LoginComponent, canActivate: [SesionGuard]},
  {
    path: 'dashboard', 
    loadChildren: () => import('./components/dashboard/dashboard.module').then((modulo) => modulo.DashboardModule),
    canLoad: [SesionGuard]
  },

  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
