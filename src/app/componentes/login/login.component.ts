import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit{
  form: FormGroup;

  //Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder){
    this.form=this.form=this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required, 
                    Validators.minLength(6),
                    Validators.maxLength(10)]]
      })
    }
  
  ngOnInit(){}

  get Password(){
    return this.form.get("password");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get Mail(){
    return this.form.get("email");
  }
  get MailValid(){
    return false;
  }

  onEnviar(event: Event){
    event.preventDefault;

    if (this.form.valid){
      alert("¡Enviar formulario!")
    }
    else{
      this.form.markAllAsTouched();
      alert("¡NO!")
    }
  }


}