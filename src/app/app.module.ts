import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {Routes, RouterModule} from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormClienteComponent } from './clientes/form-cliente.component';
import { HomeComponent } from './home/home.component';
import { CategoriasComponent } from './categorias/categorias.component';

const routes:Routes=[
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'clientes', component:ClientesComponent },
  { path:'clientes/form', component:FormClienteComponent },
  { path:'clientes/form/:id', component:FormClienteComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    FormClienteComponent,
    HomeComponent,
    CategoriasComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
