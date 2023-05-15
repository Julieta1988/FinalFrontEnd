import { Component, OnInit } from '@angular/core';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/servicios/idioma.service';

@Component({
  selector: 'app-editar-idioma',
  templateUrl: './editar-idioma.component.html'
})
export class EditarIdiomaComponent implements OnInit{
  idiomas: Idioma[]=[]; 
  idioma?: number;

  constructor(private sIdioma: IdiomaService) { }

  ngOnInit(): void {
    this.cargarIdioma();
  }

  cargarIdioma():void{
    this.sIdioma.verIdiomas().subscribe(data => {this.idiomas=data});
  }

  editarIdioma(id:number){
    this.idioma = id;
  }

  eliminarIdioma(id:number){
    if(id != undefined){
      this.sIdioma.eliminarIdioma(id).subscribe(data => {
        this.cargarIdioma();  
      }, err => {
          window.location.reload();
        }
        );
    } 
  }

}