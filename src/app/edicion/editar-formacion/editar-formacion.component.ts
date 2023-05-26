import { Component, OnInit } from '@angular/core';
import { Formacion } from 'src/app/model/formacion';
import { FormacionService} from 'src/app/servicios/formacion.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-editar-formacion',
  templateUrl: './editar-formacion.component.html'
})
export class EditarFormacionComponent implements OnInit{
  formaciones: Formacion[]=[]; 
  formacion?: number;
  form : FormGroup;
  descripcion = '';
  institucion = '';
  titulo = '';

  constructor(private formBuilder: FormBuilder, private sFormacion: FormacionService){  
    this.form=this.formBuilder.group({
      descripcion:['',[Validators.required]],
      institucion:['',[Validators.required]],
      titulo:['',[Validators.required]]
      })
  }

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
        this.ngOnInit();
      }, err => {
          this.ngOnInit();
        }
        );
    } 
  }
  //Declarar para las validaciones
  get Descripcion(){
    return this.form.get("descripcion");
  }

  get Institucion(){
    return this.form.get("institucion");
  }

  get Titulo(){
    return this.form.get("titulo");
  }

  //Validaciones
  get DescripcionValid(){
    return this.Descripcion?.touched && !this.Descripcion.valid;
  }

  get InstitucionValid(){
    return this.Institucion?.touched && !this.Institucion?.valid;
  }

  get TituloValid(){
    return this.Titulo?.touched && !this.Titulo.valid;
  }

  onCreate():void{
    const form = new Formacion (this.descripcion,this.institucion, this.titulo);
    this.sFormacion.agregarFormacion(form).subscribe()
  }

  limpiar():void{
    this.form.reset();
  }
  
  onEnviar(event:Event){
    event.preventDefault();
    if (this.form.valid)
    {
      this.onCreate();
      alert("Formacion agregada");
    }else{
      alert("falló la carga, intente de nuevo");
      this.form.markAllAsTouched();
    }
    this.ngOnInit();
    this.limpiar();
  }
}