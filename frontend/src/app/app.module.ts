// app.module.ts
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ClienteListComponent } from './clientes/components/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './clientes/components/cliente-form/cliente-form.component';
import { ClienteService, TipoIdentificacionService } from './clientes/services/cliente.service';

import { ProductoListComponent } from './productos/components/producto-list/producto-list.component';
import { ProductoFormComponent } from './productos/components/producto-form/producto-form.component';
import { ProductoService } from './productos/services/producto.service';

import { UsuarioListComponent } from './usuarios/components/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './usuarios/components/usuario-form/usuario-form.component';
import { UsuarioService } from './usuarios/services/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    ProductoListComponent,
    UsuarioListComponent,
    ClienteFormComponent,
  ],
  imports: [
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    FormsModule,
    DataTablesModule,
    CommonModule,
    HttpClientModule,
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    RouterModule.forRoot([
      { path: 'clientes', component: ClienteListComponent },
      { path: 'clientes/nuevo', component: ClienteFormComponent },
      { path: 'clientes/editar/:id', component: ClienteFormComponent },
      { path: 'productos', component: ProductoListComponent },
      { path: 'productos/nuevo', component: ProductoFormComponent },
      { path: 'productos/editar/:id', component: ClienteFormComponent },
      { path: 'usuarios', component: UsuarioListComponent },
      { path: 'usuarios/nuevo', component: UsuarioFormComponent },
      { path: 'usuarios/editar/:id', component: ClienteFormComponent },
      { path: '', redirectTo: '/clientes', pathMatch: 'full' },
    ]),
  ],
  providers: [ClienteService, ProductoService, UsuarioService, TipoIdentificacionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
