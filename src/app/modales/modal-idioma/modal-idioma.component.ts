import { Component, OnInit } from '@angular/core';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/servicios/idioma.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-idioma',
  templateUrl: './modal-idioma.component.html'
})
export class ModalIdiomaComponent implements OnInit{
  form : FormGroup;
  idioma = '';
  nivel = '';

  constructor(private formBuilder: FormBuilder, private sIdioma: IdiomaService){  
    this.form=this.formBuilder.group({
      idioma:['',[Validators.required]],
      nivel:['',[Validators.required]]
      })
  }

  ngOnInit(): void{}

  //Declarar para las validaciones
  get Idioma(){
    return this.form.get("idioma");
  }

  get Nivel(){
    return this.form.get("nivel");
  }

  get IdiomaValid(){
    return this.Idioma?.touched && !this.Idioma.valid;
  }

  get NivelValid(){
    return this.Nivel?.touched && !this.Nivel.valid;
  }


  onCreate():void{
    const idio = new Idioma (this.idioma,this.nivel);
    this.sIdioma.agregarIdioma(idio).subscribe(
      data=>{alert("Idioma agregado");},
      err =>{alert("falló la carga");}
    )
  }

  limpiar():void{
    this.form.reset();
  }
  
  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onCreate();
      alert("Idioma Agregado");
      this.ngOnInit();
    }else{
      alert("falló la carga, intente de nuevo");
      this.form.markAllAsTouched();
      this.ngOnInit();
    }
  }
}
