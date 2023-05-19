import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EdicionComponent } from './edicion/edicion/edicion.component';
import { ErrorComponent } from './componentes/error/error.component';

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'edicion', component:EdicionComponent},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
