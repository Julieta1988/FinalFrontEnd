import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';
@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html'
})
export class EditarExperienciaComponent implements OnInit{
  experienciasList: any = []; 
  constructor(private datosPortfolio:DataService) { }

  ngOnInit(): void {
    this.datosPortfolio.getDatos().subscribe(data =>{
      this.experienciasList=data.experiencia;
    })
  }
}