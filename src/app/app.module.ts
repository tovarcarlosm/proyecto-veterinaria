import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './modulo_admin/components/dashboard-admin/dashboard-admin.component';
import { MenuAdminComponent } from './modulo_admin/components/shared/menu-admin/menu-admin.component';
import { MenuTiendaComponent } from './modulo_tienda/components/shared/menu-tienda/menu-tienda.component';
import { DashboardTiendaComponent } from './modulo_tienda/components/dashboard-tienda/dashboard-tienda.component';
import { DashboardUsuarioComponent } from './modulo_usuario/components/dashboard-usuario/dashboard-usuario.component';
import { MenuUsuarioComponent } from './modulo_usuario/components/shared/menu-usuario/menu-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminComponent,
    MenuAdminComponent,
    MenuTiendaComponent,
    DashboardTiendaComponent,
    DashboardUsuarioComponent,
    MenuUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
