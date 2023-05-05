import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';
                    
@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html'
})
export class PresentacionComponent implements OnInit{
  //inicializar variables de infancia
  nombre: string = '';
  apellido: string = '';
  presentacion: string = '';

  constructor(private datosPortfolio:DataService) { }

  ngOnInit(): void {
    //este servicio, dame los datos, yo me suscribo, entonces...
    this.datosPortfolio.getDatos().subscribe(data =>{
      //mostrame los datos
      console.log(data);
      //traeme ese nombre, ese apellido... 
      this.nombre=data.nombre;
      this.apellido=data.apellido;
      this.presentacion=data.presentacion;
    })
  }
}
