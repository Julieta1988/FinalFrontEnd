import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-editar-idioma',
  templateUrl: './editar-idioma.component.html'
})
export class EditarIdiomaComponent implements OnInit{
  idiomaList: any = [];
  constructor(private datosPortfolio:DataService) { }

  ngOnInit(): void {
    this.datosPortfolio.getDatos().subscribe(data =>{
      this.idiomaList=data.idioma;
    })
  }
}