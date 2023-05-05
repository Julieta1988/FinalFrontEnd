import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';


@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html'
})
export class IdiomaComponent implements OnInit{
  idiomaList: any = [];
  constructor(private datosPortfolio:DataService) { }

  ngOnInit(): void {
    this.datosPortfolio.getDatos().subscribe(data =>{
      this.idiomaList=data.idioma;
    })
  }
}