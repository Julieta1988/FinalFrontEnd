import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html'
})
export class AptitudesComponent implements OnInit{
  aptitudesList: any = [];
  constructor(private datosPortfolio:DataService) { }

  ngOnInit(): void {
    this.datosPortfolio.getDatos().subscribe(data =>{
      this.aptitudesList=data.aptitudes;
    })
  } 
}