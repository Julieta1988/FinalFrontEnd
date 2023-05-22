import { Component, OnInit } from '@angular/core';
import { Formacion } from 'src/app/model/formacion';
import { FormacionService } from 'src/app/servicios/formacion.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html'
})

export class FormacionComponent implements OnInit{
  formaciones: Formacion[]=[]; 
  formacion?: number;

  constructor(private sFormacion: FormacionService) { }

  ngOnInit(): void {
    this.cargarFormacion();
  }

  cargarFormacion():void{
    this.sFormacion.verFormaciones().subscribe(data => {this.formaciones=data});
  }

}