import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit{
  titulo:string="Lista de categoria";
  categorias:Categoria[];

  constructor(private categoriaService:CategoriaService){}

  ngOnInit(): void {
    this.categoriaService.getAll().subscribe(
      c =>this.categorias=c
    );
  }

  delete(categoria:Categoria):void{
    console.log("Hello form delete");
    this.categoriaService.delete(categoria.id).subscribe(
      res=>this.categoriaService.getAll().subscribe(
        response=>this.categorias=response
      )
    );
  }
}
