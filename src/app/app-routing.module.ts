import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardAdminComponent} from "./modulo_admin/components/dashboard-admin/dashboard-admin.component";
import {UsuariosComponent} from "./modulo_admin/components/usuarios/usuarios.component";
import {UsuarioComponent} from "./modulo_admin/components/usuario/usuario.component";

const routes: Routes = [
  { path: 'dashboard-admin' , component: DashboardAdminComponent},
  { path: 'usuarios' , component: UsuariosComponent},
  { path: 'usuario/:id', component: UsuarioComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard-admin'}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
