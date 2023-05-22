import { Component, OnInit } from '@angular/core';
import { Aptitudes } from 'src/app/model/aptitudes';
import { AptitudesService } from 'src/app/servicios/aptitudes.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-aptitudes',
  templateUrl: './modal-aptitudes.component.html'
})
export class ModalAptitudesComponent implements OnInit{
  form : FormGroup;
  aptitud = '';

  constructor(private formBuilder: FormBuilder, private sAptitudes: AptitudesService){  
    this.form=this.formBuilder.group({
      aptitud:['',[Validators.required]]
      })
  }

  ngOnInit(): void{}

  //Declarar para las validaciones
  get Aptitud(){
    return this.form.get("aptitud");
  }

  get AptitudValid(){
    return this.Aptitud?.touched && !this.Aptitud.valid;
  }


  onCreate():void{
    const apti = new Aptitudes (this.aptitud);
    this.sAptitudes.agregarAptitudes(apti).subscribe(
      data=>{alert("Aptitudes agregada"); window.location.reload();},
      err =>{alert("No se puedo cargar")}
    )
  }

  limpiar():void{
    this.form.reset();
  }
  
  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onCreate();
    }else{
      alert("falló la carga, intente de nuevo");
      this.form.markAllAsTouched();
    }
  }
}
