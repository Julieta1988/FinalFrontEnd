import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';  


@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html'
})

export class PresentacionComponent implements OnInit{
  personas: Persona[]=[]; 
  persona?: number;

  constructor(private sPersona: PersonaService) { }

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona():void{
    this.sPersona.verPersonas().subscribe(data => {this.personas=data});
  } 

}
