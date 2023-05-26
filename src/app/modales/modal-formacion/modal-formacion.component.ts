import { Component, OnInit } from '@angular/core';
import { Formacion } from 'src/app/model/formacion';
import { FormacionService } from 'src/app/servicios/formacion.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-formacion',
  templateUrl: './modal-formacion.component.html'
})
export class ModalFormacionComponent implements OnInit {
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

  ngOnInit(): void{}

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
    this.sFormacion.agregarFormacion(form).subscribe(
      data=>{alert("Formacion agregada");window.location.reload();},
      err =>{this.form.reset();}
    )
  }

  limpiar():void{
    this.form.reset();
  }
  
  onEnviar(event:Event){
    event.preventDefault();
    if (this.form.valid)
    {
      this.onCreate();
      window.location.reload();
      alert("Formacion agregada");
    }else{
      alert("falló la carga, intente de nuevo");
      this.form.markAllAsTouched();
    }
  }
}


// origin, arriba clone
// import { Component, OnInit } from '@angular/core';
// import { Formacion } from 'src/app/model/formacion';
// import { FormacionService } from 'src/app/servicios/formacion.service';
// import { FormBuilder, Validators, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-modal-formacion',
//   templateUrl: './modal-formacion.component.html'
// })
// export class ModalFormacionComponent implements OnInit {
//   form : FormGroup;
//   descripcion = '';
//   institucion = '';
//   titulo = '';

//   constructor(private formBuilder: FormBuilder, private sFormacion: FormacionService){  
//     this.form=this.formBuilder.group({
//       descripcion:['',[Validators.required]],
//       institucion:['',[Validators.required]],
//       titulo:['',[Validators.required]]
//       })
//   }

//   ngOnInit(): void{}

//   //Declarar para las validaciones
//   get Descripcion(){
//     return this.form.get("descripcion");
//   }

//   get Institucion(){
//     return this.form.get("institucion");
//   }

//   get Titulo(){
//     return this.form.get("titulo");
//   }

//   //Validaciones
//   get DescripcionValid(){
//     return this.Descripcion?.touched && !this.Descripcion.valid;
//   }

//   get InstitucionValid(){
//     return this.Institucion?.touched && !this.Institucion?.valid;
//   }

//   get TituloValid(){
//     return this.Titulo?.touched && !this.Titulo.valid;
//   }

//   onCreate():void{
//     const form = new Formacion (this.descripcion,this.institucion, this.titulo);
//     this.sFormacion.agregarFormacion(form).subscribe(
//       data=>{alert("Formacion agregada");},
//       err =>{this.form.reset();}
//     )
//   }

//   limpiar():void{
//     this.form.reset();
//   }
  
//   onEnviar(event:Event){
//     event.preventDefault();
//     if (this.form.valid)
//     {
//       this.onCreate();
//       alert("Formacion agregada");
//     }else{
//       alert("falló la carga, intente de nuevo");
//       this.form.markAllAsTouched();
//     }
//   }
// }
