import { Component, OnInit } from '@angular/core';
import { Aptitudes } from 'src/app/model/aptitudes';
import { AptitudesService } from 'src/app/servicios/aptitudes.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html'
})
export class AptitudesComponent implements OnInit{
  aptitudes: Aptitudes[]=[]; 
  aptitud?: number;

  constructor(private sAptitudes: AptitudesService) { }

  ngOnInit(): void {
    this.cargarAptitudes();
  }

  cargarAptitudes():void{
    this.sAptitudes.verAptitudes().subscribe(data => {this.aptitudes=data});
  }

}