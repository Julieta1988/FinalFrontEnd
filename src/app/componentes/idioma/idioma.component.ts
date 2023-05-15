import { Component, OnInit } from '@angular/core';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/servicios/idioma.service';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html'
})
export class IdiomaComponent implements OnInit{
  idiomas: Idioma[]=[]; 
  idioma?: number;

  constructor(private sIdioma: IdiomaService) { }

  ngOnInit(): void {
    this.cargarIdioma();
  }

  cargarIdioma():void{
    this.sIdioma.verIdiomas().subscribe(data => {this.idiomas=data});
  }

}