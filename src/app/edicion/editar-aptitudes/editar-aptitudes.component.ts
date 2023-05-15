import { Component, OnInit } from '@angular/core';
import { Aptitudes } from 'src/app/model/aptitudes';
import { AptitudesService } from 'src/app/servicios/aptitudes.service';

@Component({
  selector: 'app-editar-aptitudes',
  templateUrl: './editar-aptitudes.component.html'
})
export class EditarAptitudesComponent implements OnInit{
  aptitudes: Aptitudes[]=[]; 
  aptitud?: number;

  constructor(private sAptitudes: AptitudesService) { }

  ngOnInit(): void {
    this.cargarAptitudes();
  }

  cargarAptitudes():void{
    this.sAptitudes.verAptitudes().subscribe(data => {this.aptitudes=data});
  }

  editarAptitud(id:number){
    this.aptitud = id;
  }

  eliminarAptitudes(id:number){
    if(id != undefined){
      this.sAptitudes.eliminarAptitudes(id).subscribe(data => {
        this.cargarAptitudes();  
      }, err => {
          window.location.reload();
        }
        );
    } 
  }

}