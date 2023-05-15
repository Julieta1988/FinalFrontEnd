import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html'
})
export class ModalExperienciaComponent implements OnInit{
  form : FormGroup;
  empresa = '';
  puesto = '';
  duracion = '';
  inicio = '';
  fin = '';

  constructor(private formBuilder: FormBuilder, private sExperiencia: ExperienciaService){  
    this.form=this.form=this.formBuilder.group({
      empresa:['',[Validators.required]],
      puesto:['',[Validators.required]],
      duracion:['',[Validators.required]],
      inicio:['',[Validators.required]],
      fin:['',[Validators.required]]
      })
  }

  ngOnInit(): void{}

  //Declarar para las validaciones
  get Empresa(){
    return this.form.get("empresa");
  }

  get Puesto(){
    return this.form.get("puesto");
  }

  get Duracion(){
    return this.form.get("duracion");
  }

  get Inicio(){
    return this.form.get("inicio");
  }

  get Fin(){
    return this.form.get("fin");
  }
  //Validaciones
  get EmpresaValid(){
    return this.Empresa?.touched && !this.Empresa.valid;
  }

  get PuestoValid(){
    return this.Puesto?.touched && !this.Puesto?.valid;
  }

  get DuracionValid(){
    return this.Duracion?.touched && !this.Duracion.valid;
  }

  get InicioValid(){
    return this.Inicio?.touched && !this.Inicio.valid;
  }

  get FinValid(){
    return this.Fin?.touched && !this.Fin.valid;
  }


  onCreate():void{
    const expe = new Experiencia (this.empresa,this.puesto, this.duracion, this.inicio, this.fin);
    this.sExperiencia.agregarExperiencia(expe).subscribe(
      data=>{alert("Experiencia agregada");},
      err =>{window.location.reload();}
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

