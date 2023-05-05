import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-editar-formacion',
  templateUrl: './editar-formacion.component.html'
})
export class EditarFormacionComponent implements OnInit{
  formacionList: any = [];
  constructor(private datosPortfolio:DataService) { }

  ngOnInit(): void {
    this.datosPortfolio.getDatos().subscribe(data =>{
      this.formacionList=data.formacion;
    })
  }
} 