import { Component, OnInit } from '@angular/core';
import { Aptitudes } from 'src/app/model/aptitudes';
import { AptitudesService } from 'src/app/servicios/aptitudes.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-aptitudes',
  templateUrl: './editar-aptitudes.component.html'
})
export class EditarAptitudesComponent implements OnInit{
  aptitudes: Aptitudes[]=[]; 
  aptit?: number;
  form : FormGroup;
  aptitud = '';

  constructor(private formBuilder: FormBuilder, private sAptitudes: AptitudesService){  
    this.form=this.formBuilder.group({
      aptitud:['',[Validators.required]]
      })
  }

  ngOnInit(): void {
    this.cargarAptitudes();
  }

  cargarAptitudes():void{
    this.sAptitudes.verAptitudes().subscribe(data => {this.aptitudes=data});
  }

  editarAptitud(id:number){
    this.aptit = id;
  }

  eliminarAptitudes(id:number){
    if(id != undefined){
      this.sAptitudes.eliminarAptitudes(id).subscribe(data => {
        this.ngOnInit();
      }, err => {
        this.ngOnInit();
        }
        );
    } 
  }

  //Declarar para las validaciones
  get Aptitud(){
    return this.form.get("aptitud");
  }

  get AptitudValid(){
    return this.Aptitud?.touched && !this.Aptitud.valid;
  }


  onCreate():void{
    const apti = new Aptitudes (this.aptitud);
    this.sAptitudes.agregarAptitudes(apti).subscribe()
  }

  limpiar():void{
    this.form.reset();
  }
  
  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onCreate();
      alert("Aptitud agregada");
    }else{
      alert("falló la carga, intente de nuevo");
      this.form.markAllAsTouched();
    }
    this.ngOnInit();
    this.limpiar();
  }

}