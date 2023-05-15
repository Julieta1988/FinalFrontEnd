import { Component, OnInit } from '@angular/core';
import { Formacion } from 'src/app/model/formacion';
import { FormacionService} from 'src/app/servicios/formacion.service';


@Component({
  selector: 'app-editar-formacion',
  templateUrl: './editar-formacion.component.html'
})
export class EditarFormacionComponent implements OnInit{
  formaciones: Formacion[]=[]; 
  formacion?: number;

  constructor(private sFormacion: FormacionService) { }

  ngOnInit(): void {
    this.cargarFormacion();
  }

  cargarFormacion():void{
    this.sFormacion.verFormaciones().subscribe(data => {this.formaciones=data});
  }

  editarFormacion(id:number){
    this.formacion = id;
  }

  eliminarFormacion(id:number){
    if(id != undefined){
      this.sFormacion.eliminarFormacion(id).subscribe(data => {
        this.cargarFormacion();  
      }, err => {
          window.location.reload();
        }
        );
    } 
  }

}