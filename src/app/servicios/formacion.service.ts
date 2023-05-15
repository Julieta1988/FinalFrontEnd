import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formacion } from '../model/formacion';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {
  url= "http://localhost:8080/formacion"
  
  constructor(private httpClient:HttpClient) { }

  public verFormaciones(): Observable<Formacion[]> {
    return this.httpClient.get<Formacion[]>(this.url + '/lista')
  }

  public verFormacion(id:number): Observable<Formacion> {
    return this.httpClient.get<Formacion>(this.url + `/ver/${id}`)
  }

  public agregarFormacion(formacion:Formacion): Observable<any> {
    return this.httpClient.post<any>(this.url + '/crear', formacion)
  }

  public editarFormacion(id: number, formacion:Formacion): Observable<any> {
    return this.httpClient.put<any>(this.url + `/editar/${id}`, formacion)
  }

  public eliminarFormacion(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `/eliminar/${id}`)
  }

}
