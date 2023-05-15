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
    this.form=this.form=this.formBuilder.group({
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
    const expe = new Idioma (this.idioma,this.nivel);
    this.sIdioma.agregarIdioma(expe).subscribe(
      data=>{alert("Idioma agregada");},
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
