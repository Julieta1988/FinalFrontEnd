import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html'
})

export class EditarExperienciaComponent implements OnInit{
  experiencias: Experiencia[]=[]; 
  experiencia?: number;

  constructor(private sExperiencia: ExperienciaService) { }

  ngOnInit(): void {
    this.cargarExperiencia();
  }

  cargarExperiencia():void{
    this.sExperiencia.verExperiencias().subscribe(data => {this.experiencias=data});
  }

  editarExperiencia(id:number){
    this.experiencia = id;
  }

  eliminarExperiencia(id:number){
    this.sExperiencia.eliminarExperiencia(id).subscribe(data => {
      this.cargarExperiencia();  
    }, err => {
        window.location.reload();
      }
      );
  }

}
