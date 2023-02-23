import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmComponent } from './abm/abm.component';
import { DashboardComponent } from './dashboard.component';
import { EditComponent } from './edit/edit.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: '',component: DashboardComponent},
  {path: 'abm',component: AbmComponent},
  {path: 'edit',component: EditComponent},
  {path: 'dashboard',component: DashboardComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
