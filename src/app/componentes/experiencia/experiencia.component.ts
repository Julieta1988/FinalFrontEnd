import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html'
})
export class ExperienciaComponent implements OnInit{
  experiencias: Experiencia[]=[]; 
  experiencia?: number;

  constructor(private sExperiencia: ExperienciaService) { }

  ngOnInit(): void {
    this.cargarExperiencia();
  }

  cargarExperiencia():void{
    this.sExperiencia.verExperiencias().subscribe(data => {this.experiencias=data});
  }

}