import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html'
})

export class EditarExperienciaComponent implements OnInit{
  experiencias: Experiencia[]=[]; 
  experiencia?: number;

  constructor(private sExperiencia: ExperienciaService) { }

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
    if(id != undefined){
      this.sExperiencia.eliminarExperiencia(id).subscribe(data => {
        this.cargarExperiencia();  
      }, err => {
          window.location.reload();
        }
        );
    } 
  }

}


// eliminarExperiencia(id:number){
//   if(id != undefined){
//     this.sExperiencia.eliminarExperiencia(id).subscribe(data => {
//       this.cargarExperiencia();  
//     }, err => {
//         window.location.reload();
//         alert("No se pudo eliminar la experiencia");
//       }
//       );
//   } 
  


// import { Component, OnInit } from '@angular/core';
// import { Experiencia } from 'src/app/model/experiencia';
// import { ExperienciaService } from 'src/app/servicios/experiencia.service';


// @Component({
//   selector: 'app-editar-experiencia',
//   templateUrl: './editar-experiencia.component.html'
// })
// export class EditarExperienciaComponent implements OnInit{
//   experiencias: Experiencia[]=[]; 
//   experiencia?: number;
  
//   constructor(private sExperiencia: ExperienciaService) { }

//   ngOnInit(): void {
//     this.cargarExperiencia();
//   }

//   cargarExperiencia():void{
//     this.sExperiencia.verExperiencias().subscribe(data => {this.experiencias=data});
//   }

//   editarExperiencia(id:number){
//     this.experiencia = id;
//   }

//   eliminarExperiencia(id:number){
//     if(id != undefined){
//       this.sExperiencia.eliminarExperiencia(id).subscribe(data => {this.cargarExperiencia();}, err => {alert("No se pudo eliminar la experiencia")})
//     }
//   }
    
// }







// import { Component, OnInit } from '@angular/core';
// import { DataService } from 'src/app/servicios/data.service';

// @Component({
//   selector: 'app-editar-experiencia',
//   templateUrl: './editar-experiencia.component.html'
// })
// export class EditarExperienciaComponent implements OnInit{
//   experiencias: any = []; 
//   constructor(private datosPortfolio:DataService) { }

//   ngOnInit(): void {
//     this.datosPortfolio.getDatos().subscribe(data =>{
//       this.experiencias=data.experiencia;
//     })
//   }
// }






// import { Component, OnInit } from '@angular/core';
// import { Experiencia } from 'src/app/model/experiencia';
// import { ExperienciaService } from 'src/app/servicios/experiencia.service';


// @Component({
//   selector: 'app-editar-experiencia',
//   templateUrl: './editar-experiencia.component.html'
// })
// export class EditarExperienciaComponent implements OnInit{
//   experiencias: Experiencia[]=[]; 
//   experiencia?: number;
  
//   constructor(private sExperiencia: ExperienciaService) { }

//   ngOnInit(): void {
//     this.cargarExperiencia();
//   }

//   cargarExperiencia():void{
//     this.sExperiencia.verExperiencias().subscribe(data => {this.experiencias=data});
//   }

//   editarExperiencia(id:number){
//     this.experiencia = id;
//   }

//   eliminarExperiencia(id:number){
//     if(id != undefined){
//       this.sExperiencia.eliminarExperiencia(id).subscribe(data => {this.cargarExperiencia();}, err => {alert("No se pudo eliminar la experiencia")})
//     }
//   }
    
// }















// import { Component, OnInit } from '@angular/core';
// import { Experiencia } from 'src/app/model/experiencia';
// import { ExperienciaService } from 'src/app/servicios/experiencia.service';

// @Component({
//   selector: 'app-editar-experiencia',
//   templateUrl: './editar-experiencia.component.html'
// })
// export class EditarExperienciaComponent implements OnInit{
//   experiencias: any = []; 
//   // experiencias: Experiencia[]=[]; 
//   //experi : number;
//   constructor(private sExperiencia: ExperienciaService) { }

//   ngOnInit(): void {
//     this.cargarExperiencia();
//     // if(this.tokenService.getToken()){
//     //   this.isLogged = True;
//     // }else{
//     //   this.isLogged = False;
//     // }
//   }


// cargarExperiencia():void{
//   this.sExperiencia.verExperiencias().subscribe(data => {this.experiencias=data});
// }

// // editarExperiencia(id:number){
// //   this.experi = id;
// // }

// eliminarExperiencia(id:number){
//   if(id != undefined){
//     this.sExperiencia.eliminarExperiencia(id).subscribe(data => {this.cargarExperiencia();}, err => {alert("No se pudo eliminar la experiencia")})
//   }
// }

// }








