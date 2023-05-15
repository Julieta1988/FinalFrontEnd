import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InicioNavbarComponent } from './componentes/inicio-navbar/inicio-navbar.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { LoginComponent } from './componentes/login/login.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { IdiomaComponent } from './componentes/idioma/idioma.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ErrorComponent } from './componentes/error/error.component';
import { EditarPresentacionComponent } from './edicion/editar-presentacion/editar-presentacion.component';
import { EditarExperienciaComponent } from './edicion/editar-experiencia/editar-experiencia.component';
import { EditarFormacionComponent } from './edicion/editar-formacion/editar-formacion.component';
import { EditarAptitudesComponent } from './edicion/editar-aptitudes/editar-aptitudes.component';
import { EditarIdiomaComponent } from './edicion/editar-idioma/editar-idioma.component';
import { ModalExperienciaComponent } from './modales/modal-experiencia/modal-experiencia.component';
import { EditarNavbarComponent } from './edicion/editar-navbar/editar-navbar.component';
import { ModalFormacionComponent } from './modales/modal-formacion/modal-formacion.component';
import { EdicionComponent } from './edicion/edicion/edicion.component';
import { ModalAptitudesComponent } from './modales/modal-aptitudes/modal-aptitudes.component';
import { ModalPresentacionComponent } from './modales/modal-presentacion/modal-presentacion.component';
import { ModalIdiomaComponent } from './modales/modal-idioma/modal-idioma.component';
import { ModalFotoComponent } from './modales/modal-foto/modal-foto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioNavbarComponent,
    PresentacionComponent,
    LoginComponent,
    ExperienciaComponent,
    FormacionComponent,
    AptitudesComponent,
    IdiomaComponent,
    FooterComponent,
    InicioComponent,
    ErrorComponent,
    EditarPresentacionComponent,
    EditarExperienciaComponent,
    EditarFormacionComponent,
    EditarAptitudesComponent,
    EditarIdiomaComponent,
    ModalExperienciaComponent,
    EditarNavbarComponent,
    ModalFormacionComponent,
    EdicionComponent,
    ModalAptitudesComponent,
    ModalPresentacionComponent,
    ModalIdiomaComponent,
    ModalFotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
