import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardAdminComponent} from "./modulo_admin/components/dashboard-admin/dashboard-admin.component";
import {DashboardTiendaComponent} from "./modulo_tienda/components/dashboard-tienda/dashboard-tienda.component";
import {DashboardUsuarioComponent} from "./modulo_usuario/components/dashboard-usuario/dashboard-usuario.component";

const routes: Routes = [
  { path: 'dashboard-admin' , component: DashboardAdminComponent},
  { path: 'dashboard-tienda' , component: DashboardTiendaComponent},
  { path: 'dashboard-usuario', component: DashboardUsuarioComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard-admin'}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
