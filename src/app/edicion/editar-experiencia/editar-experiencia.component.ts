import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html'
})

export class EditarExperienciaComponent implements OnInit{
  experiencias: Experiencia[]=[]; 
  experiencia?: number;
  form : FormGroup;
  empresa = '';
  puesto = '';
  duracion = '';
  inicio = '';
  fin = '';

  constructor(private formBuilder: FormBuilder, private sExperiencia: ExperienciaService){  
    this.form=this.formBuilder.group({
      empresa:['',[Validators.required]],
      puesto:['',[Validators.required]],
      duracion:['',[Validators.required]],
      inicio:['',[Validators.required]],
      fin:['',[Validators.required]]
      })
  }

  ngOnInit(): void {
    this.cargarExperiencia();
  }

  cargarExperiencia():void{
    this.sExperiencia.verExperiencias().subscribe(data => {this.experiencias=data});
  }

  editarExperiencia(id:number){
    this.experiencia = id;
  }

  eliminarExperiencia(id:number){
    this.sExperiencia.eliminarExperiencia(id).subscribe(data => {
      this.ngOnInit();  
    }, err => {
      this.ngOnInit();
      }
      );
  }

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
    this.sExperiencia.agregarExperiencia(expe).subscribe()
  }

  limpiar():void{
    this.form.reset();
  }
  
  onEnviar(event:Event){
    event.preventDefault();
    if (this.form.valid)
    {
      this.onCreate();
      alert("Experiencia agregada");
    }else{
      alert("falló la carga, intente de nuevo");
      this.form.markAllAsTouched();
    }
    this.ngOnInit();
    this.limpiar();
  }

}