import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-presentacion',
  templateUrl: './modal-presentacion.component.html'
})
export class ModalPresentacionComponent  implements OnInit {
  form : FormGroup;
  nombre = '';
  imagen = '';
  presentacion = '';

  constructor(private formBuilder: FormBuilder, private sPersona: PersonaService){  
    this.form=this.formBuilder.group({
      nombre:['',[Validators.required]],
      imagen:['',[Validators.required]],
      presentacion:['',[Validators.required]]
      })
  }

  ngOnInit(): void{}

  //Declarar para las validaciones
  get Nombre(){
    return this.form.get("nombre");
  }

  get Imagen(){
    return this.form.get("imagen");
  }

  get Presentacion(){
    return this.form.get("presentacion");
  }

  //Validaciones
  get NombreValid(){
    return this.Nombre?.touched && !this.Nombre.valid;
  }

  get ImagenValid(){
    return this.Imagen?.touched && !this.Imagen?.valid;
  }

  get PresentacionValid(){
    return this.Presentacion?.touched && !this.Presentacion.valid;
  }

  onCreate():void{
    const prese = new Persona (this.nombre,this.imagen, this.presentacion);
    this.sPersona.agregarPersona(prese).subscribe(
      data=>{alert("Persona agregada");window.location.reload();},
      err =>{this.form.reset()}
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


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-modal-presentacion',
//   templateUrl: './modal-presentacion.component.html'
// })
// export class ModalPresentacionComponent {

// }
