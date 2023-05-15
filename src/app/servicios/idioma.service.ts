import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idioma } from '../model/idioma';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {
  url= "http://localhost:8080/idioma"
  
  constructor(private httpClient:HttpClient) { }

  public verIdiomas(): Observable<Idioma[]> {
    return this.httpClient.get<Idioma[]>(this.url + '/lista')
  }

  public verIdioma(id:number): Observable<Idioma> {
    return this.httpClient.get<Idioma>(this.url + `/ver/${id}`)
  }

  public agregarIdioma(idioma:Idioma): Observable<any> {
    return this.httpClient.post<any>(this.url + '/crear', idioma)
  }

  public editarIdioma(id: number, idioma:Idioma): Observable<any> {
    return this.httpClient.put<any>(this.url + `/editar/${id}`, Idioma)
  }

  public eliminarIdioma(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `/eliminar/${id}`)
  }

}
