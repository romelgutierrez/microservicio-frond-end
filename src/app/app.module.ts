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
import { FormCategoriaComponent } from './categorias/form-categoria.component';

const routes:Routes=[
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'clientes', component:ClientesComponent },
  { path:'clientes/form', component:FormClienteComponent },
  { path:'clientes/form/:id', component:FormClienteComponent },

  { path:'categorias', component:CategoriasComponent },
  { path:'categorias/form', component:FormCategoriaComponent },
  { path:'categorias/form/:id', component:FormCategoriaComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    FormClienteComponent,
    HomeComponent,
    CategoriasComponent,
    FormCategoriaComponent
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
