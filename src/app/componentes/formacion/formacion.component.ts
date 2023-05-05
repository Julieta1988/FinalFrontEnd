import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html'
})
export class FormacionComponent implements OnInit{
  formacionList: any = [];
  constructor(private datosPortfolio:DataService) { }

  ngOnInit(): void {
    this.datosPortfolio.getDatos().subscribe(data =>{
      this.formacionList=data.formacion;
    })
  }
} 